'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    icono: DataTypes.STRING,
    enlace: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER,
  }, {
      timestamps: true,
      paranoid: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      deletedAt: 'fecha_eliminacion',
    });
  menu.associate = function (models) {
    menu.belongsTo(models.menu, {
      as: 'menus',
      foreignKey: 'fk_menu'
    })
  };
  return menu;
};
