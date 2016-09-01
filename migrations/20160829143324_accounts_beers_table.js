
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts_beers', function(table) {
    table.increments('id').primary();
    table.integer('account_Id').references('id').inTable('accounts').notNullable();
    table.integer('beer_id').references('id').inTable('beers').notNullable();
    table.float('trigger_qty', 1, ).notNullable();
    table.integer('order_multiple').notNullable();
    table.integer('sku_velocity').notNullable();
    table.integer('week_1').notNullable();
    table.integer('week_2').notNullable();
    table.integer('week_3').notNullable();
    table.integer('week_4').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts_beers');
};
