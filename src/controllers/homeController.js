const connection = require('../config/database');
const { getAllUsers, importUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    try {
        let results = await getAllUsers();
        // console.log(results);
        return res.render('home.ejs', {listUsers: results});
    } catch (err) {
        console.log(err);
    }
}

const getSecondpage = (req, res) => {
    res.render('sample.ejs');
}
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //       console.log(results);
    //     }
    //   );
    try {
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) 
            VALUES (?, ?, ?)`,
            [email, name, city]
        );
        console.log(results); // results contains rows returned by server
        res.send("User created successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while creating the user");
    }
}
const getUpdatePage = (req, res) => {
    res.render('edit.ejs');
}

module.exports =
{
    getHomepage,
    getSecondpage,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
} // Export module 