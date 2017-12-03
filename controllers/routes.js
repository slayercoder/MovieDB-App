const express = require("express");
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require("assert");
const engines = require('consolidate');
const config = require("../config");

MongoClient.connect(config.dbURL, function(err, db){
        // assert.equal(null, err);
        // console.log("Connected to Database");
        if(err){
            console.log("Error");
        }
        else{
            console.log("Connected");
            router.get("/", function(req, res){
                res.render("index"); 
            });
        
            router.post("/movie-entry", function(req, res){
                var data = req.body;
                
                db.collection("movies").insertOne({ "title" : data.title,"year" : data.year, "imdb" : data.imdb }).then(function(){
                    console.log("movie added");
                    res.render("status", {status : "Movie Succesfully Added"});

                });
                
            });
        }
                
    });

    


module.exports = router;