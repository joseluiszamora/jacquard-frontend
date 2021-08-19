'use strict';

module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('persona', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING(30)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    documento: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    expedido: {
      type: DataTypes.STRING,
    },
    nombres: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    apellidos: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    nombre_completo: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('nombre') + ' ' + this.getDataValue('paterno');
      }
    },
    fecha_nacimiento: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    telefono: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    genero: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    direccion: {
      type: DataTypes.STRING(100)
    },
    avatar: {
      type: DataTypes.STRING(250)
    },
    estado: {
      allowNull: false,
      type: DataTypes.STRING(15)
    },
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER
  }, {
      timestamps: true,
      paranoid: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      deletedAt: 'fecha_eliminacion',
      freezeTableName: true,
      tableName: 'personas',
      classMethods: {},
      defaultScope: {
        attributes: {
          exclude: ['password']
        }
      },
      scopes: {
        withPassword: {
          attributes: {}
        }
      }
  });

  return person;
};