
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.string('user_image');
    table.string('provider');
    table.integer('times_visited');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('user_image');
    table.dropColumn('provider');
    table.dropColumn('times_visited');
  })
};
