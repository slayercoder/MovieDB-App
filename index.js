const express = require('express');
const config = require("./config");
const router = require("./controllers/routes");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const consolidate = require("consolidate");
const app = express();

app.engine("html", consolidate.nunjucks);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(router);

app.listen(config.port, function(){
    console.log("Server running on port " + config.port);
}); 