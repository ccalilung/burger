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
    }
}
// Find a pet in the pets table by an animal_name of Rachel.
// orm.updateOne("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
// orm.insertOne("buyer_name", "buyer_id", "buyers", "pets");

module.exports = burger

