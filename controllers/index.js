const postRoutes = require('./api/postroute');
const userRoutes = require('./api/UserRoutes');
const path = require('path')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs")
app.use(expressLayouts)

app.use("/api", postRoutes, userRoutes)

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/welcome", (req,res) => {
    res.render("welcome")
})

module.exports = app

