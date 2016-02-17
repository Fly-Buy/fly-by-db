var airlines = require('../airlines');
var promiseArray = [];

exports.seed = function(knex, Promise) {
  if(true){
    return knex('airlines').del().then(function(){
      var idCount = 1;
      airlines.forEach(function(airline){
        promiseArray.push(knex('airlines').insert({
          id: idCount,
          name: airline.Airline,
          icao: airline.ICAO,
          callsign: airline.Callsign
        }));
        idCount++;
      });
      return Promise.all(promiseArray);
    });
  }
}
