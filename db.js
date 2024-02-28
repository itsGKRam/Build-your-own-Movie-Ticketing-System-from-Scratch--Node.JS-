const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "b4fe85a8",
  password: "Cab#22se",
  database: "b4fe85a8",
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
    return;
  }
  console.log("Connected to MySQL");
  connection.release();
});


module.exports = pool;
