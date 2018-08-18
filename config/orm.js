var connection = require("./connection");


var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;"
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result)

    });
  }, updateOne: function(tableName, column, columnValue, whereCol ,equals) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
    connection.query(queryString, [tableName, column, columnValue, whereCol, equals], function(err, result) {
      if (err) throw err;
      
    });
}, insertOne: function(tableName,columns,values,cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [tableName,columns,values], function(err, result) {
      if (err) throw err;
      cb(result)
    });
  }

};




module.exports = orm;
