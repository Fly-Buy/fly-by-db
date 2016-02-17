
exports.up = function(knex, Promise) {
  return knex.schema.createTable('airlines', function(table){
    table.increments();
    table.string('name');
    table.string('icao');
    table.string('callsign');
  })
  .then(function(){
    return knex.schema.createTable('airports', function(table){
      table.increments();
      table.string('name');
      table.string('callsign');
      table.string('city');
      table.string('state');
    })
  })
  .then(function(){
    return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('oauthid');
      table.string('user_image');
      table.string('provider');
      table.integer('times_visited');
    })
  })
  .then(function(){
    return knex.schema.createTableIfNotExists('session', function (table) {
      table.string('sid').notNullable().primary(),
      table.json('sess').notNullable(),
      table.timestamp('expire', true).notNullable()
    })
  })
  .then(function(){
    return knex.schema.createTable('vendors', function(table){
      table.increments();
      table.string('name');
    })
  })
  .then(function(){
    return knex.schema.createTable('flights', function(table){
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.date('flight_date');
      table.date('purchase_date');
      table.integer('flight_number');
      table.float('price_paid');
      table.string('purchase_location');
      table.integer('departure_airport_id').references('id').inTable('airports');
      table.integer('arrival_airport_id').references('id').inTable('airports');
      table.integer('airline_id').references('id').inTable('airlines');
      table.boolean('suspect');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flights')
  .then(function(){
    return knex.schema.dropTableIfExists('users')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('vendors')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('airports')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('airlines')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('session')
  })
};
