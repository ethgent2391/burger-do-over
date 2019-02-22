var EXPRESS = require("express");
var BP = require("body-parser");
var METHOVERRIDE = require("method-override");
var HANDLEBARS = require("express-handlebars");
var APP = EXPRESS();
var PORT = process.env.PORT || 3000;

//tells express to set CURRENT WORK DIRECTORY to public
APP.use(EXPRESS.static(process.cwd() + "/public"));
//tells express to use bodyparse to expect URL encoding, and denies the use of nested objects
APP.use(BP.urlencoded({ extended: false}));
//use method ovveride to simplyfy/streamlin REQ and POST
APP.use(METHOVERRIDE("_method"));
//Tells express to use handlebars as the redering engine, and sets default template to main.
APP.engine("handlebars", HANDLEBARS({ defaultLayout: "main"}));
APP.set("view engine", "handlesbars");
//Sets routes = controller change this for sequelize
var ROUTES = require("./controller/controller.js");
APP.use("/", ROUTES);
//Tells express to listen to port for req/post
APP.listen(PORT, function(){
    console.log("Hello dave. LISTENING on %d for %s", this.address().port, APP.settings.env);
})
