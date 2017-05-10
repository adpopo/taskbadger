// app/models/user.js
// load the things we need
var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("User", {
    local: {
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140]
            },
        password:  {
            type: DataTypes.STRING,
            allowNull: false,
            }
        }
    },
    generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    validPassword: function(password) {
        return bcrypt.compareSync(password, this.local.password);
    }
  });
  return Login;
};
