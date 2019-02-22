//this file exists in-between the orm and handlebars. it is the middleware (middleman) of the CRUD.
//points to the orm.js file
var ORM = require("../config.ORM.js");
//uses express
var EXPRESS = require("express");
var APP = EXPRESS();

//defines burger to be exported at the end of the script
var BURGER = {
    ALL: function(cb) {
        //calls the ALL function from the orm file
        ORM.ALL('burgers', function(res) {
            cb(res);
        });
    },
    INSERT: function(value, cb) {
         //calls the INSERT function from the orm file
        ORM.INSERT("burgers", "burger_name", value, function(res){
            cb(res);
        });
    },
    UPDATE: function(condition, cb){
        //calls the UPDATE function from the orm file
        ORM.UPDATE("burgers", "devoured", "1", "ID", condition, function(res){
            cb(res);
        });
    }
}
module.exports = BURGER;