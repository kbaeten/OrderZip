
exports.seed = function(knex, Promise) {
  return Promise.join(
  // Deletes ALL existing entries
    knex('accounts_beers').del(),
        // Inserts seed entries
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 1,
      trigger_qty: 1.5,
      order_multiple: 5,
      sku_velocity: 5,
      week_1: 15,
      week_2: 19,
      week_3: 25,
      week_4: 30
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 2,
      trigger_qty: 1.5,
      order_multiple: 5,
      sku_velocity: 2,
      week_1: 8,
      week_2: 9,
      week_3: 12,
      week_4: 14
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 3,
      trigger_qty: 1.5,
      order_multiple: 5,
      sku_velocity: 7,
      week_1: 12,
      week_2: 19,
      week_3: 25,
      week_4: 32
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 4,
      trigger_qty: 1.5,
      order_multiple: 5,
      sku_velocity: 1,
      week_1: 5,
      week_2: 7,
      week_3: 7,
      week_4: 8
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 5,
      trigger_qty: 1.5,
      order_multiple: 2,
      sku_velocity: 12,
      week_1: 14,
      week_2: 25,
      week_3: 11,
      week_4: 24
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 6,
      trigger_qty: 1.5,
      order_multiple: 2,
      sku_velocity: 7,
      week_1: 18,
      week_2: 6,
      week_3: 14,
      week_4: 20
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 7,
      trigger_qty: 1.5,
      order_multiple: 2,
      sku_velocity: 13,
      week_1: 27,
      week_2: 5,
      week_3: 18,
      week_4: 30
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 8,
      trigger_qty: 1.5,
      order_multiple: 2,
      sku_velocity: 5,
      week_1: 15,
      week_2: 19,
      week_3: 25,
      week_4: 30
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 9,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 3,
      week_1: 11,
      week_2: 14,
      week_3: 18,
      week_4: 21
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 10,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 1,
      week_1: 4,
      week_2: 5,
      week_3: 6,
      week_4: 7
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 11,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 12,
      week_1: 7,
      week_2: 19,
      week_3: 30,
      week_4: 42
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 12,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 1,
      week_1: 7,
      week_2: 7,
      week_3: 9,
      week_4: 10
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 13,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 5,
      week_1: 7,
      week_2: 12,
      week_3: 16,
      week_4: 21
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 14,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 1,
      week_1: 4,
      week_2: 4,
      week_3: 5,
      week_4: 5
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 15,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 5,
      week_1: 5,
      week_2: 11,
      week_3: 16,
      week_4: 20
    }),
    knex('accounts_beers').insert({
      account_id: 1,
      beer_id: 16,
      trigger_qty: 1.5,
      order_multiple: 4,
      sku_velocity: 1,
      week_1: 3,
      week_2: 4,
      week_3: 6,
      week_4: 7
    })
  );
};
