const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Token = require('../models').token;
const Usuario = require('../models').usuario;

const validateJWT = async( req = request, res = response, next ) => {
    const auth_header = req.headers.authorization;

    // if token header hasn't sent
    if ( !auth_header ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    // if is not bearer token
    if (!auth_header.startsWith("Bearer ")) {
        throw res.status(401).json({
            msg: 'Unauthorized'
        });	
    }

    try {
        const bearer_token = TokenArray = auth_header.substring(7, auth_header.length);

        // verifying jwt
        const { id } = await jwt.verify( bearer_token, process.env.JWT_SECRET_MOBILE );

        // if token does not exist in db
        const token = await Token.findOne({ where: { fk_usuario: id, token: bearer_token } })
        if( !token ) {
            return res.status(401).json({
                msg: 'Token no válido - token no existe'
            });
        }
        
        // if token exists but no active
        if( !token.is_active ) {
            return res.status(401).json({
                msg: 'Token no válido - token inactivo is_active = false en db'
            })
        }

        // if person is deleted or does not exist in db
        const person = await Usuario.findOne({ where: { id } });
        if( !person ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en db'
            })
        }
        
        req.person = person;
        next();

    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validateJWT
}