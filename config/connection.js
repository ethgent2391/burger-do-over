//requires sql
var SQL = require("mysql");
var connection;

//check to see if there is a .env/JAWSDB  being used if so use it; else use local settings
if (process.env.JAWSDB_URL) {
    connection = SQL.createConnection(procces.env.JAWSDB_URL);
} else{
    connection = SQL.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'burger_db'
    })
};

//if error in connection; err otherwise consolelog it
connection.connect(function(err){
    if (err){
        //err.stack logs a sequence of functions run and displays them
        console.error("Dave, connection has failed. It's not my fault: " + err.stack);
        return;
    } else {
        console.log("Dave, It seems i've connected to a DB")
    }
});
//exports connection to any file that calls it
module.exports = connection;