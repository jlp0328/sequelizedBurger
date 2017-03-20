var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sequelizeburger_db"
});


var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);


db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
