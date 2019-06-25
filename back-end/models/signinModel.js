var sql = require('.././db');


var Data = function(data) {
    this.id = data.id;
}

Data.getAllData = function (result) {


    sql.query('SELECT * from Users', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};

module.exports = Data;