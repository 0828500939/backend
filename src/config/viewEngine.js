const path = require('path'); // Path module
const express = require('express'); // conmmon js module

const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join('./src', 'views')) 
    app.set('view engine', 'ejs')

    // config static file
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine; // Export module