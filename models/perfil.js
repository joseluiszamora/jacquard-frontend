'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('perfil', {
    nombre: {
      type: DataTypes.STRING,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
      timestamps: true,
      paranoid: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      deletedAt: 'fecha_eliminacion',
    });
  profile.associate = function (models) {

    profile.hasMany(models.usuario, {
      as: 'usuarios',
      foreignKey: 'fk_profile'
    })

    profile.belongsToMany(models.menu,
      {
        through: models.menu_profile,
        foreignKey: 'fk_profile',
        otherKey: 'fk_menu'
      });
  };
  return profile;
};
