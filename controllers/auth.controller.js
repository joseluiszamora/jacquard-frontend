const Usuario = require('../models').usuario;
var CryptoJS = require("crypto-js");

const { generateToken, verifyToken, saveToken } = require('../helpers/tokens/mobile-token-manager');

module.exports = {

    async signIn(req, res, next) {
        const { username, password } = req.body;

        try {
            const usuario = await Usuario.scope('withPassword').findOne({
                where: {
                    username: username
                }
            });

            // when person does not exist 
            if (!usuario) {
                return res.status(401).send( { 
                    success: false,
                    msg: 'usuario/password incorrectos',
                    error_code: 1306
                } );
            }

            var bytes = CryptoJS.HmacSHA256(password, "2, 4, 6, 7, 9, 15, 20, 23, 25, 30");
            var checkpass = bytes.toString();
            
            if( usuario.password === checkpass ) {
                // generate a new token
                const token = await generateToken({
                    id: usuario.id,
                    username: usuario.username,
                    nombre: usuario.nombre,
                    paterno: usuario.paterno
                });

                console.log(token)

                // save the new token for the user
                await saveToken({ token, fk_usuario: usuario.id })
                
                // verify validation of token
                const result = await verifyToken(token);

                // success result
                return res.status(200).json({ 
                    success: true,
                    msg: 'credenciales correctas',
                    data:  {
                        token: token, 
                        iat: result.iat, 
                        exp: result.exp 
                    }
                });
            }

            // result when password don't match
            return res.status(401).json({ 
                success: false,
                msg: 'usuario/password incorrectos',
                error_code: 1309
            });

        } catch ( error ) {
            console.error( error );
            // another error happen
            return res.status(500).json( {
                success: false,
                msg: 'Lo sentimos ha ocurrido un error',
                error_code: 1000
            } )
        }
    },

    async getUserInfo(req, res) {
        id = req.query.id;
        return Usuario.findOne({
            where: { id }
        })
        .then(usuario => {
            if(!usuario)
                return res.status(200).send({ message: "Usuario no econtrado", status: 404, usuario })    
            
            return res.status(200).send({message: "success", status: 200, usuario })

        })
        .catch(error => {
            console.log(error)
            return res.status(500).send("ha ocurrido un error")
        });
    }

}