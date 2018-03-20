var orm = require ("../config/orm.js");

var burger = {
    all: function(cb) {
    	orm.all("burgers", function(res){
    		cb(res);
    	});
    },
    create: function(name, cb){
    	orm.insertOne("burgers", name, function(res){
    		cb(res);
    	});
    },
    update: function(devoured, id, cb){
    	orm.updateOne("burgers", devoured, id, function(res){
    		cb(res);
    	});
    }
};

module.exports = burger;

var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
