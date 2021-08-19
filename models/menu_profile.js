'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu_profile = sequelize.define('menu_profile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fk_menu: {
      type: DataTypes.INTEGER,
    },
    fk_profile: {
      type: DataTypes.INTEGER,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
    {
      tableName: 'menu_profiles',
      timestamps: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      deletedAt: 'fecha_eliminacion',
    });
  menu_profile.associate = function (models) {};
  return menu_profile;
};