const User = require('../../models/user');

const emailExists = async (email) => {
    const exists = await User.findOne({ where: { email } });
    if ( exists ) {
        throw new Error(`El correo ${ email } ya existe`);
    }
}

module.exports = {
    emailExists
}