/* --  Usando mysql 5.3 ---*/
// const mysql = require('mysql');
// connectionString = process.env.DATABASE_URL 

/* --  Usando mysql 8 ---*/
const mysql = require('mysql2');

db = {};
db.cnn = {};
db.cnn.exec = function(query, callback){
    /* --  Usando mysql 8 ---*/
    var connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE 
    });
    /* --  fim mysql 8 ---*/

    /* --  Usando mysql 5 ---*/
    //var connection = mysql.createConnection(connectionString);
    /* --  fim mysql 5 ---*/

    connection.query(query, function(err, rows){
        callback(rows, err);
        connection.end();
    });
};

module.exports = db;