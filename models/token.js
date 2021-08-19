'use strict';

module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    token: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE
    },
    exp: {
      type: DataTypes.INTEGER
    },
    fk_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    is_active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    }
  }, {
      timestamps: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      deletedAt: 'fecha_eliminacion',
      freezeTableName: true,
      tableName: 'tokens',
  });

  token.associate = function(models) { 
    token.belongsTo(models.usuario, {
        as: 'usuario',
        foreignKey: 'fk_usuario'
    });
  }

  return token;
};