const connection = require('../config/database');

const getHomepage = (req, res) => {
    // process data
    // call model
    // A simple SELECT query
    return res.render('home.ejs')
}

const getSecondpage = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('>>>check req.body:','\nemail:', email,'\nname:', name, '\ncity:', city);

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
          console.log(results);
        }
      );
}

module.exports =
{
    getHomepage,
    getSecondpage,
    postCreateUser,
} // Export module 