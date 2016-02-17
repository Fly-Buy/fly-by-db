var airports = require('../airports');
var promiseArray = [];

exports.seed = function(knex, Promise) {
  if(true){
    return knex('airports').del().then(function(){
      var idCount = 1;
      airports.forEach(function(airport){
        promiseArray.push(knex('airports').insert({
          id: idCount,
          name: airport.Name,
          callsign: airport.Call_Sign,
          city: airport.City,
          state: airport.State
        }));
        idCount++;
      });
      return Promise.all(promiseArray);
    });
  }
}
