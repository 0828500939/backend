//hello world express with port 8081
const express = require('express'); // conmmon js module
// import express from 'express'; // ES6 module

const app = express(); // App express
const port = 8081; // Port

// define the first route
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
