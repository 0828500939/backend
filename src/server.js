require('dotenv').config(); // Load env file
const express = require('express'); // conmmon js module
const path = require('path'); // Path module
const configViewEngine = require('./config/viewEngine'); // Config view engine 
const webRoutes = require('./routers/web'); // Web routes
const app = express(); // App express
const port = process.env.PORT || 8888; // Port
const hostname = process.env.HOST_NAME; // Hostname
const connection = require('./config/database'); // Connection database

// config request body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app);

// define route
app.use('/', webRoutes);


var server = app.listen(port, hostname, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", hostname, port)
})
