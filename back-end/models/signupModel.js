var mySQL = require('../database/db');

var User = function(data) {
  this.FirstName = data.FirstName;
  this.LastName = data.LastName;
  this.Email = data.Email;
  this.Pseudo = data.Pseudo;
  this.PasswordUser = data.PasswordUser;
  this.PasswordUser2 = data.PasswordUser2;
}


User.signUp = function (addUser, result) {
  var addUsers = Object.values(addUser);
  var table = [[addUsers[0], addUsers[1], addUsers[2], addUsers[3], addUsers[4], addUsers[5]]];


  mySQL.query('INSERT INTO Users (FirstName, LastName, Email, Pseudo, PasswordUser, PasswordUser2) VALUES ?', [table], function (err, response) {
        if (err) throw err;
        result(null, response);
  });

};

module.exports = User;