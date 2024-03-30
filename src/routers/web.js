const express = require('express');
const router = express.Router(); 
const { getHomepage, getSecondpage } = require('../controllers/homeController');

// define the first route
router.get('/', getHomepage);
// define the second route
router.get('/ejs', getSecondpage);

module.exports = router; // Export module