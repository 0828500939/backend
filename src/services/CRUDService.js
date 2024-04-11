const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users`
    );
    return results;
}
const importUsers = async () =>  {
    
    return results;

}
module.exports = {
    getAllUsers,
}