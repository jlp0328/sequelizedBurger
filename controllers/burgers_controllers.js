var express = require("express");

var router = express.Router();
var db = require("../models");

// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({

    }).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      // res.json(dbBurger);
    console.log(dbBurger);
    res.render("index", {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    });
  });
});

router.post("/", function(req, res) {
   db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
    console.log(dbBurger);
    res.render("index", dbBurger);
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

   db.Burger.update({
      burger_name:req.body.burger_name,
      devoured: req.body.devoured
    },
    {
      where:{
        id:req.body.id}
      }).then(function(dbBurger) {
    res.render("index", dbBurger);
    });
  });


module.exports = router;
