const Person = require('../../models').person;

const personExists = async (dni) => {
    const personFound = await Person.findOne( {
        where: { dni }
    });

    if (personFound) {
        throw new Error(`El usuario con el documento ${ dni } ya se encuentra registrado`)
    }
}

module.exports = {
    personExists
}