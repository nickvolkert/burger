// Import mysql connections
// =============================================================
var connection = require("../models/burger.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(cb) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  // deleteTodo: function(id, callback) {
  //
  //   var s = "DELETE FROM " + tableName + " WHERE id=?";
  //
  //   connection.query(s, [id], function(err, result) {
  //
  //     callback(result);
  //   });
  //
  // },

  insertOne: function(todo, callback) {
    var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    //todo.complete = todo.complete || 0;
    connection.query(s, [
      burgers.name, burgers.devoured
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(todo, callback) {
    var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    connection.query(s, [
      burgers.name, burgers.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
