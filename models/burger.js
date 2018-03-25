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
