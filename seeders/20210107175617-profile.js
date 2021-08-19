'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles', [
      {
        name: 'Administrador',
      },
      {
        name: 'Cajero'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles', null, {});
  }
};
