var mysql = require('mysql');
var connection;


{
  connection = mysql.createConnection({
    host     : 'www.(placeholder).com',
    user     : 'root',
    password :  null,
    database : 'taskBadger' 
  });
}

module.exports = connection;