require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');

const sequelize = require('./config/connection');
const routes = require("./controllers")
const app = express();

const NewBook = require("./models/posts")
const User = require('./models/users')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes)

app.set("view engine", "ejs")

app.use(express.static('/public'))

app.get("/", (req, res) => {
    try {
        res.render(path.join(__dirname,'../views', "index"))
    }
    catch (error) {
        res.status(500).json(`${error}`)
    }
})

sequelize.sync({force: false}).then(() => {
    app.listen(PORT,()=> {
        console.log('listening')
    })
})


