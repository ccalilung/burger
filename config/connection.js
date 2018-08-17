var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "burgers_db"
})

connection.connect(function(err){
    if(err)
    {
        return;
    }
})

module.exports = connection