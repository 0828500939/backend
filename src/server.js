const express = require('express'); // conmmon js module
// import express from 'express'; // ES6 module

const path = require('path'); // Path module
const app = express(); // App express
const port = 8082; // Port
const hostname = 'localhost'; // Hostname

// config template engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs')

// define the first route
app.get('/', function (req, res) {
   res.send('Hello HomePage !');
})
// define the second route
app.get('/abc', function (req, res) {
  res.send('Hello SecondPage !');
})
// define the third route
app.get('/quangminh', function (req, res) {
  res.send('<h1>Quang Minh Page ! </h1>');
})
// define the fourth route
app.get('/ejs', (req, res) => { 
  res.render('sample.ejs');
})


var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", hostname, port)
})
