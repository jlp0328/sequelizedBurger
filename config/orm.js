var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + " = " + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput,cb){
    var x = "SELECT * FROM " + tableInput + ";";

    connection.query(x, function(err,result){
          if (err) {
        throw err;
      }
        cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb){
    var x = "INSERT INTO " + table;

    x += " (";
    x += cols.toString();
    x += " )";
    x += "VALUES (";
    x += printQuestionMarks(vals.length);
    x += ")";


    console.log(x);

    connection.query(x, vals,function(err,result){
    if (err) {
        throw err;
      }
        cb(result);
    });

  },

  updateOne: function(table, objColVals, condition, cb){
    var x = "UPDATE " + table;

    x += " SET ";
    x += objToSql(objColVals);
    x += " WHERE ";
    x += condition;

    console.log(x);


    connection.query(x, function(err,result){
    if (err) {
        throw err;
      }

        cb(result);
    });

  }
}

module.exports = orm;
