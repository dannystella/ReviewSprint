var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlit3"
  }
});

module.exports = knex;
