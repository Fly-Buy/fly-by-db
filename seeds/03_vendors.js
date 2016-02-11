var vendors = require("../vendors");
var promiseArray = [];

exports.seed = function(knex, Promise){
  if(true){
    return knex('vendors').del().then(function(){
      var idCount = 1;
      vendors.forEach(function(vendor){
        promiseArray.push(knex('vendors').insert({
          id: idCount,
          name: vendor.name
        }));
        idCount++;
      });
      return Promise.all(promiseArray);
    });
  }
}
