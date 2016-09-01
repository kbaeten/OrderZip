
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('phone').notNullable();
    table.string('contact').notNullable();
    table.string('street_address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip_code').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts');
};
