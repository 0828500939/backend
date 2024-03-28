const getHomepage = (req, res) => 
{
    // process data
    // call model
    res.send('Hello HomePage !');
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