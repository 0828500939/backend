require('dotenv').config(); // Load env file
const express = require('express'); // conmmon js module
const path = require('path'); // Path module
const configViewEngine = require('./config/viewEngine'); // Config view engine 
const webRoutes = require('./routers/web'); // Web routes
const app = express(); // App express
const port = process.env.PORT || 8888; // Port
const hostname = process.env.HOST_NAME; // Hostname
// Get the client
const mysql = require('mysql2')

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, // default: 3306
  user: 'root',
  password: '123456789',
  database: 'quangminh_mysql',
});

// A simple SELECT query
connection.query(
    'SELECT * FROM Users u',
function (err, results, fields)
{
          console.log('>>>check err:', err);
          console.log('>>>check results: ', results);
          console.log('>>>check fields: ', fields);
});

// config template engine
configViewEngine(app);

// define route
app.use('/', webRoutes);

var server = app.listen(port, hostname, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", hostname, port)
})
