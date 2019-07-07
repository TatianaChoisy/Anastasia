var mySQL = require('../database/db');

var User = function(data) {
  this.email = data.email;
  this.password = data.password;
}

User.findUser = function (addUser, result) {
  var table = [addUser.email];

mySQL.query('SELECT * FROM Users WHERE email = ?', [table], function (err, response) {
        if (err) throw err;
        result(null, response);
  });

};


module.exports = User;