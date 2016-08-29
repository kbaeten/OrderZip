
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', function(table) {
    table.increments('id').primary();
    table.string('brew').notNullable().unique();
    table.string('package').notNullable();
    table.string('brand').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('beers');
};
