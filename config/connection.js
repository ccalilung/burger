var mysql = require('mysql')


if (process.env.JAWSDB_URL) {
    connection = mysql.creationConnection(process.env.JAWSDB_URL);

} else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "burgers_db"
})
};

connection.connect(function(err){
    if(err)
    {
        return;
    }
})

module.exports = connection