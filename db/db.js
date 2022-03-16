const pg = require('pg')

const db = new pg.Pool({
  database: 'jeopardy_db'
})

module.exports = db

