var flights = require("../flights");
var promiseArray = [];

exports.seed = function(knex, Promise){
  if(true){
    return knex('flights').del().then(function(){
      var idCount = 1;
      flights.forEach(function(flight){
        promiseArray.push(knex('flights').insert({
          user_id:flight.user_id,
          flight_date:flight.flight_date,
          purchase_date:flight.purchase_date,
          flight_number:flight.flight_number,
          price_paid:flight.price_paid,
          purchase_location:flight.purchase_location,
          departure_airport_id:flight.departure_airport_id,
          arrival_airport_id:flight.arrival_airport_id,
          suspect:flight.suspect
        }));
        idCount++;
      });
      return Promise.all(promiseArray);
    });
  }
}
