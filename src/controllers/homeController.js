const connection = require('../config/database');

const getHomepage = (req, res) => 
{
    // process data
    // call model
    // A simple SELECT query
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
    function (err, results)
    {
        users = results;
        console.log('>>>check err:', err);
        console.log('>>>results homepage: ', results);
        // console.log('>>>check users:', users);
        res.send(JSON.stringify(users));
    });
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