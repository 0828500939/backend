const express = require('express');
const router = express.Router(); 
const { getHomepage, getSecondpage, getCreatePage, postCreateUser } = require('../controllers/homeController');

// define the first route
router.get('/', getHomepage);
// define the second route
router.get('/ejs', getSecondpage);
// define the third route
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router; // Export module