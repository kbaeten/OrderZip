
exports.seed = function(knex, Promise) {
  return Promise.join(
  // Deletes ALL existing entries
    knex('beers').del(),
    // Inserts seed entries
    knex('beers').insert({
      brew: 'Coors Light',
      package: '2/12/12 Can',
      brand: 'Coors'
    }),
    knex('beers').insert({
      brew: 'Coors Banquet',
      package: '2/12/12 Can',
      brand: 'Coors'
    }),
    knex('beers').insert({
      brew: 'Coors Light',
      package: '24/12 Can',
      brand: 'Coors'
    }),
    knex('beers').insert({
      brew: 'Coors Banquet',
      package: '24/12 Can',
      brand: 'Coors'
    }),
    knex('beers').insert({
      brew: 'Keystone Light',
      package: '12/24 Can',
      brand: 'Keystone'
    }),
    knex('beers').insert({
      brew: 'Keystone Ice',
      package: '12/24 Can',
      brand: 'Keystone'
    }),
    knex('beers').insert({
      brew: 'Miller High Life',
      package: '12/24 Can',
      brand: 'High Life'
    }),
    knex('beers').insert({
      brew: 'Steel Reserve',
      package: '12/24 Can',
      brand: 'Steel Reserve'
    }),
    knex('beers').insert({
      brew: 'Corona Extra',
      package: '4/6/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Light',
      package: '4/6/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Extra',
      package: '12/12/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Light',
      package: '2/12/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Extra',
      package: '24/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Light',
      package: '24/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Extra',
      package: '18/12 BTL',
      brand: 'Corona'
    }),
    knex('beers').insert({
      brew: 'Corona Light',
      package: '18/12 BTL',
      brand: 'Corona'
    })
  );
};
