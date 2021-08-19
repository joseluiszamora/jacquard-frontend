'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menu_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_menu: {
        type: Sequelize.INTEGER,
        references: {
          model: 'menus',
          key: 'id'
        },
        allowNull: false
      },
      fk_profile: {
        type: Sequelize.INTEGER,
        references: {
          model: 'perfiles',
          key: 'id'
        },
        allowNull: false
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('menu_profile');
  }
};