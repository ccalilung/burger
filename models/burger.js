var orm = require("../config/orm")

// Find all the pets ordering by the lowest price to the highest price.
var burger = {
    all: function(cb) {
      orm.selectAll(function(res){
          cb(res)
      });
    },

    insert: function(tableName,column,value,cb){
        orm.insertOne(tableName,column,value, function(res){
            cb(res)
        })
    },
    update: function(tableName, column, columnValue, whereCol, equals) {
        orm.updateOne(tableName,column,columnValue,whereCol,equals)
    }
}

module.exports = burger

