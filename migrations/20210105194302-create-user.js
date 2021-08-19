'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_profile: {
        type: Sequelize.INTEGER,
        references: {
          model: 'perfiles',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      paterno: {
        type: Sequelize.STRING
      },
      materno: {
        type: Sequelize.STRING
      },
      nombre_completo: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      logins: {
        type: Sequelize.INTEGER
      },
      last_login: {
        type: Sequelize.DATE
      },
      habilitado: {
        type: Sequelize.BOOLEAN
      },
      created_by: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_by: {
        allowNull: true,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};