//connect to connection.js
var connection = require('./connection.js');
//declares the orm variable to be exported
var ORM = {
    //creates a function to query the DB and return a call back with all of the entries from a specific table/column
    ALL: function(tablename, cb) {
        //piece of SQL code to feed into the DB as a query
        var querystring = "SELECT * FROM ??";
        //send the query to the connected DB as defined by connection.js and returns the resulting data or error
        connection.query(querystring, [tablename], function(err, result){
            if (err){
                console.log(err);
            } else{
                //defines the callback which will be run by the script to populate the page 
                cb(result);
            }
        })
    },
    //inserts an new row into the table. expects tablename, column, and a value and returns a callback
    INSERT: function(tablename, column, value, cb){
        var querystring = "INSERT INTO ?? (??) VALUE (?)";
        connection.query(querystring, [tablename, column, value], function(err,result){
            if(err) {
                console.log(err);
            }else {
                cb(result);
            }
        }) 
    },
    UPDATE: function (tablename, colval, boolean, colname, condition, cb) {
        //query string finds the "devoured" column at row of id and changes it to true
        var querystring = "UPDATE ?? SET??=? WHERE ??=?";
        connection.query(querystring, [tablename, colval, boolean,colname, condition], function(err, result){
            if(err) {
                console.log(err);
            } else {
                callback(result);
            }
        })
    }
};
module.exports = ORM;