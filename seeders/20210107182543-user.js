'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fk_profile: 1,
        email: 'cramirez@miteleferico.bo',
        password: await bcrypt.hash('password', 10),
        first_name: 'Carlos',
        last_name: 'Ramirez',
        logins: 0,
        is_active: true,
        created_at: '01/01/2020',
        updated_at: '01/01/2020'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
