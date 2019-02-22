//these are the routes that feed into express.router
var express = require("express");
var router = express.Router();
var model = require("../models/model.js");

//This route uses the endpoint of / to render index
router.get("/", function(req,res){
    //retrieves all data(burgers) from DB
    model.all(function(data){
        //renders data to index
        res.render("index", {
            model: data
        });
    });
});

//This post route inserts data into the DB
router.post("/", function(req, res){
    //take input and inserts it into table
    burger.inser(req.body.input, function(){
        //then redirects back to / to display rendered data with added input
        res.redirect("/");
    });
});
//this is essentially a url based API search for burger ID
router.put("/:id", function(req, res){
    burger.update(req.params.id, function() {
        res.redirect("/");
    });
});
//exports router variable to any file that requires it
module.exports = router;