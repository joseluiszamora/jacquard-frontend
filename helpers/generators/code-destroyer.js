const EmailCode = require('../../models').email_code;
const RestorePasswordCode = require('../../models').restore_password_code;

destroyCode = async (email, code) => {
    email_code = await EmailCode.findOne({ where: { email, code } });
    if( email_code ) {
        await email_code.destroy()
        return true;
    }
    return false;
}

destroyAllCodesByEmail = async (email) => {
    try {
        await EmailCode.destroy({ where: { email } });    
        return true;
    } catch (error) {
        return false;
    }
}

destroyRecoveryPasswordCode = async (dni, email, birthday, code) => {
    code = await RestorePasswordCode.findOne({ where: 
        { dni, email, birthday, code } 
    });

    if ( code ) {
        await code.destroy();
        return true;
    }
    return false;
}

destroyAllRecoveryPasswordCodes = async (dni, email, birthday, code) => {

    try {
        await RestorePasswordCode.destroy({ where: 
            { dni, email, birthday, code } 
        });
        return true;        
    } catch (error) {
        return false;
    }


    return false;
}

module.exports = {
    destroyCode,
    destroyAllCodesByEmail,
    destroyRecoveryPasswordCode,
    destroyAllRecoveryPasswordCodes
}