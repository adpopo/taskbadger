// app/models/user.js
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    local: {
        name:  {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140]
            }},
        password:  {
            type: DataTypes.STRING,
            allowNull: false,
            },
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140]
            }},
        phone_number:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            }
    }
  });
  return User;
};

var bcrypt = require('bcrypt-nodejs');
generateHash : function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
},

validPassword: function(password) {
    return bcrypt.compareSync(password, this.local.password);
}