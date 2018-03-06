exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id');
    table.string('username');
    table.string('password');
    // TODO: DESCRIBE THE USER TABLE
  }).createTableIfNotExists('goals', function (table) {
    table.increments('id');
    table.string('goal');
    table.string('description');
    table.boolean('complete');
    table.integer('userid').references('users.id')
    // TODO: DESCRIBE THE USER TABLE
  })
  ])
};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES
return Promise.all([
   knex.schema.dropTable('users').dropTable('goals')
])
};
