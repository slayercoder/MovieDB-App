const express = require("express");
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const engines = require('consolidate');
const config = require("../config");

MongoClient.connect(config.dbURL, function(err, db){
    if(err){
        console.log("Database failure!!");
    }
    else{
            router.get("/", function(req, res){
                res.render("index"); 
            });
        
            // router.post("/enter-movie", function(req, res){

            // });    
    }
});

    


module.exports = router;