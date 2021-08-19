const EmailCode = require('../../models').email_code;

verifyEmailCode = async (code, email) => {
    
    email_code = await EmailCode.findOne({ where: { email, code } });

    if( !email_code ) {
        throw new Error(`El código no es válido`);
    }

}

module.exports = {
    verifyEmailCode
}