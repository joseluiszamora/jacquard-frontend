const MobileToken = require('../../models').token;
const jwt = require('jsonwebtoken');

generateToken = async ( payload, expireTime = '30d' ) => {
    return new Promise((resolve, reject) => {
        try {
            var token = jwt.sign(JSON.parse(JSON.stringify(
                payload
                )), process.env.JWT_SECRET_MOBILE, { expiresIn: expireTime });

            resolve(token);
        } catch (error) {
            reject(error);
        }
    });
}

verifyToken = async ( token ) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(jwt.verify(token, process.env.JWT_SECRET_MOBILE))            
        } catch (error) {
            reject(error)
        }
    });
}

saveToken = async (payload) => {
    return new Promise((resolve, reject) => {
        const { token, fk_usuario } = payload;

        if (!token || !fk_usuario) {
            reject('usuario/token son obligatorios')
        }

        // Update all tokens of a user to inactive 
        MobileToken.update(
            { is_active : false },
            { where: { fk_usuario } }
        ).then(result => {
            // Create a new token available for a user
            MobileToken.create({
                token     : token,
                fk_usuario : fk_usuario,
                is_active : true,
            }).then(token => {
                (token) 
                ? resolve(token)
                : reject('Error al guardar el token')
            })
            .catch(error => {
                reject(error)
            });
        })
        .catch(error => {
            reject(error);
        });
    });
}

module.exports = {
    generateToken,
    verifyToken,
    saveToken
}