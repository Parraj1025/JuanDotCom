const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')

app.use("/api", postRoutes, userRoutes)

app.use(express.static(path.join(__dirname , '../public/css/output.css')));
app.use(expressLayouts)
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

