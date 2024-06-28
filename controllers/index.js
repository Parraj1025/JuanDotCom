const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts');
const exp = require('constants');

app.use("/api", postRoutes, userRoutes)

app.use(express.static('../public'));
app.use(expressLayouts)

app.use(express.static(__dirname, "../public/assets/css"))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    try {
        res.render(path.join(__dirname,'../views', "index"))
    }
    catch (error) {
        res.status(500).json(`${error}`)
    }
})

module.exports = app

