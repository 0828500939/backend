const connection = require('../config/database');

const getHomepage = (req, res) => 
{
    // process data
    // call model
    // A simple SELECT query
    return res.render('home.ejs')
}

const getSecondpage = (req, res) =>
{
    res.render('sample.ejs');
}

module.exports = 
{
    getHomepage,
    getSecondpage

} // Export module 