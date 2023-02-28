mysql = require('mysql');
connectionString = process.env.DATABASE_URL 

db = {};
db.cnn = {};
db.cnn.exec = function(query, callback){
    var connection = mysql.createConnection(connectionString);
    connection.query(query, function(err, rows){
        callback(rows, err);
        connection.end();
    });
};

module.exports = db;