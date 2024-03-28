const express = require('express');
const router = express.Router();

// define the first route
router.get('/', function (req, res) {
    res.send('Hello HomePage !');
 })
 // define the second route
 router.get('/abc', function (req, res) {
   res.send('Hello SecondPage !');
 })
 // define the third route
 router.get('/quangminh', function (req, res) {
   res.send('<h1>Quang Minh Page ! </h1>');
 })
 // define the fourth route
 router.get('/ejs', (req, res) => { 
   res.render('sample.ejs');
 })

module.exports = router; // Export module