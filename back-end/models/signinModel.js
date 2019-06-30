var mySQL = require('../database/db');

var User = function(data) {
  this.t_Pseudo = data.t_Pseudo;
  this.t_Password = data.t_Password;
}


User.signUp = function (findUser, result) {
  var findUsers = Object.values(findUser);
  var table = [[findUsers[0], findUsers[1]]];


  mySQL.query('SELECT * FROM Users WHERE t_Email = ?', [table], function (err, response) {
        if (err) throw err;
        result(null, response);
  });

};

module.exports = User;