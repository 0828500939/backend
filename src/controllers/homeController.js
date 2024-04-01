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

const postCreateUser = (req, res) =>
{
    console.log('>>>check req.body:', req.body);
    // res.send("Create user successfully");
    res.render('create-user.ejs');
}

module.exports = 
{
    getHomepage,
    getSecondpage,
    postCreateUser,
} // Export module 