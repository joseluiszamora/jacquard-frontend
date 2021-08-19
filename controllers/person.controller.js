const Person = require('../models').person;
const Nationality = require('../models').nationality;
const Card = require("../models").card;
const RestorePasswordCode = require('../models').restore_password_code;

const { generateToken, saveToken, verifyToken } = require('../helpers/tokens/mobile-token-manager')
const { destroyCode } = require('../helpers/generators/code-destroyer');
const { sendEmail } = require('../helpers/mail/send-email');
const { destroyAllRecoveryPasswordCodes } = require('../helpers/generators/code-destroyer');
const { generateCode } = require('../helpers/generators/code-generator');

const moment = require('moment');

store = async (req, res = response) => {
    try {
        const { document_type, dni, seat, first_name, last_name, birthday, landline, cellphone, 
            email, gender, address, fk_nationality, password, code } = req.body;
        
        await destroyCode(email, code)

        const person = await Person.create({
            document_type : document_type,
            dni: dni,
            first_name: first_name, 
            last_name: last_name, 
            birthday: birthday,
            landline: landline,
            cellphone: cellphone, 
            email: email,
            gender: gender,
            address: address,
            fk_nationality: fk_nationality, 
            state: "PENDIENTE",
            password: password,
            seat: seat,
        });

        if(person) {
            // generate a new token
            const token = await generateToken({
                id: person.id,
                dni: person.dni,
                first_name: person.first_name,
                last_name: person.last_name,
                cellphone: person.cellphone
            });

            // save the new token for the user
            await saveToken({ token, fk_person: person.id })
             
            // verify validation of token
            const result = verifyToken(token);

            return res.json({success: true, token: token, iat: result.iat, exp: result.exp});
        }

        //return res.status(200).send(person);
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Ha ocurrido un error' });
    }
}

generateRestorePasswordCode = async (req, res = response) => {
    const { dni, email, birthday } = req.body;
    const code = await generateCode();
    const exp = moment(new Date()).add(10, 'minute').toDate().getTime();

    try {
        const person = await Person.findOne({ where: { 
            dni, email, birthday
        } });

        // if person does not exist
        if ( !person ) {
            return res.status(400).json({
                errors: [{
                    msg: 'Los datos no cohinciden'
                }]
            })
        }

        // destroy all the old codes
        await destroyAllRecoveryPasswordCodes( dni, email, birthday, code );
        
        // save code in restore password codes
        RestorePasswordCode.create({
            dni, email, birthday, code, exp
        })

        const subject = 'Código de confirmación MT-Virtual';
        const message = `El código es <h1>${code}</h1>`

        // send email to email user
        sendEmail(
            email,
            subject,
            message
        )

        return res.status(200).json({
            msg: `Se ha enviado un código de recuperación a ${email}`
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Lo sentimos ha ocurrido un error en el servidor'
        });
    }
}

changePassword = async (req, res = response) => {
    const { dni, email, birthday, code, password } = req.body;

    try {
        const person = await Person.findOne({ where: { 
            dni, email, birthday
        } });

        // if person does not exist
        if ( !person ) {
            return res.status(400).json({
                errors: [{
                    msg: 'Los datos no cohinciden -- person'
                }]
            })
        }

        // verify code
        const restorePasswordCode = await RestorePasswordCode.findOne({ where : 
            { dni, email, birthday, code } 
        })

        // if password not verified
        if(!restorePasswordCode) {
            return res.status(400).json({
                errors: [{
                    msg: 'Código no válido'
                }]
            })
        }
        const current_time = new Date().getTime();
        // verify if the code is not expired
        if ( restorePasswordCode.exp >  current_time ) {
            // expire current code
            await restorePasswordCode.destroy();

            // actualiza la contraseña del usuario
            await person.update({
                password
            });

            return res.status(200).json({
                msg: `La contraseña del usuario ${dni} ha sido modificada exitosamente`
            })
        } else {
            // destroy code if it has expired
            await restorePasswordCode.destroy();
        }        

        return res.status(400).json({
            errors: [{
                msg: 'Código expirado'
            }]
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Lo sentimos ha ocurrido un error en el servidor'
        });
    }
}

changePasswordWithToken = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const id = req.person.id;

    try {
        // search person by id
        const person = await Person.scope('withPassword').findOne( { where: { id } } );
        // if person does not exist
        if ( !person ) {
            return res.status(400).json( {
                msg: 'Persona no encontrada'
            } );
        }

        // compare current password with db
        //const matchPasswords = bcrypt.compareSync( currentPassword, person.password )
        
        if ( !matchPasswords ) {
            return res.status(400).json( {
                errors: [{
                    msg: 'La contraseña es incorrecta'
                }]
            } );
        }

        // updates the password of person found
        await person.update( { password: newPassword } );

        return res.status(200).json({
            msg: `La contraseña del usuario ha sido modificada exitosamente`
        })

    } catch (error) {
        console.error(error);
        res.status(500).json( {
            msg: 'Lo sentimos ha ocurrido un error en el servidor'
        } );
    }
}

me = async (req, res = response) => {
    const id = req.person.id

    const person = await Person.findOne( { 
        attributes: { exclude: [ 
            'updated_at',
            'updated_by', 
            'deleted_by',
            'created_at',
            'deleted_at'
        ] },
        include: [
            {
                model: Nationality,
                as: 'nationality',
                attributes: [ 'id', 'name' ]
            }
        ],
        where: { id }, 
    
    } );

    // if person does not exist
    if ( !person ) {
        return res.status(400).json( {
            msg: 'persona no encontrada'
        } );
    }

    return res.status(200).json(person)

}

hasActiveCard = (req, res = response) => {
    const id = req.params.id;
    return Card.findAll({
        where: { 
            fk_person: id,
            status: 'ACTIVO',
        }
    }) 
    .then(result => {
        if(result.length == 0) {
            return res.status(200).send({
                success: true,
                hasActiveCards: false,
                message: 'El usuario no cuenta con una tarjeta virtual'
            })
        }

        return res.status(200).send({
            success: true,
            hasActiveCards: true,
            message: 'El usuario cuenta con tarjeta virtual'
        })
    })
    .catch((error) => {
        return res.status(500).send({
            success: false,
            message: 'Lo sentimos, ha ocurrido un error'
        })
    })
}

module.exports = {
    store,
    generateRestorePasswordCode,
    changePassword,
    changePasswordWithToken,
    me,
    hasActiveCard
}