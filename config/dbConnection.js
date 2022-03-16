const mysql = require('mysql');

let pool;
pool = mysql.createPool({
  connectionLimit : 10,
  host: "localhost",
  user: "root",
  password: "#Root2022",
  database: "bicom2",
  multipleStatements: true
});

module.exports = pool;

//connection.end();  <--- Finaliza la conexion.
