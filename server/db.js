const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "Hercules@2014",
  port: 5432,
});

module.exports = pool;
