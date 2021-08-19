'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('usuario', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING,
    documento: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    paterno: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    materno: {
      allowNull: true,
      type: DataTypes.STRING(30)
    },
    nombre_completo: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('nombre') + ' ' + this.getDataValue('paterno');
      }
    },
    avatar: {
      type: DataTypes.STRING(250)
    },
    logins: DataTypes.INTEGER,
    last_login: DataTypes.DATE,
    habilitado: DataTypes.INTEGER,
    
  }, {
      timestamps: false,
      paranoid: true,
      createdAt: 'fecha_creacion',
      updatedAt: 'fecha_modificacion',
      freezeTableName: true,
      tableName: 'usuarios',
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

  user.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });

  //genera token dado un payload
  user.generarToken= async function(payload){
    return await sha256.hmac(process.env.KEY_PASS, payload);        
}

  user.prototype.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, match) {
      if (err) {
        return cb(err);
      }
      cb(null, match);
    });
  }

  /*user.associate = function(models) {

    user.belongsTo(models.perfil, {
      foreignKey: 'fk_profile',
      as: 'profile'
    })

    user.belongsTo(models.user, {
      as: 'userCreator',
      foreignKey: 'created_by'
    });

    user.belongsTo(models.user, {
      as: 'userEditor',
      foreignKey: 'updated_by'
    });
  };*/

  return user;
};