
exports.seed = function(knex, Promise) {
  return Promise.join(
  // Deletes ALL existing entries
    knex('accounts').del(),
    // Inserts seed entries
    knex('accounts').insert({
      name: 'Village Green Liquors',
      phone: '(720)899-9000',
      contact: 'Patty Wilson',
      street_address: '1234 32nd Ave.',
      city: 'Denver',
      state: 'CO ',
      zip_code: '80212',
    }),
    knex('accounts').insert({
      name: 'Highland Wine & Spirits',
      phone: '(720)542-9955',
      contact: 'Tom Boland',
      street_address: '4200 38th Ave.',
      city: 'Denver',
      state: 'CO',
      zip_code: '80212',
    }),
    knex('accounts').insert({
      name: 'Country Squire Liquor',
      phone: '(720)890-8999',
      contact: 'Dave Schultz',
      street_address: '3125 Tennyson St.',
      city: 'Denver',
      state: 'CO',
      zip_code: '80211',
    }),
    knex('accounts').insert({
      name: 'Roscoe\'s Wine & Spirits',
      phone: '(720)894-1331',
      contact: 'Rhonda Roadhouse',
      street_address: '1717 Raleigh St.',
      city: 'Denver',
      state: 'CO',
      zip_code: '80210',
    }),
    knex('accounts').insert({
      name: 'The Grape Vine',
      phone: '(720)548-1122',
      contact: 'Alex Jenkins',
      street_address: '6785 Colfax Pl.',
      city: 'Denver',
      state: 'CO',
      zip_code: '80210',
    })
  );
};
