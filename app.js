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


sequelize.sync({force: false}).then(() => {
    app.listen(PORT,()=> {
        console.log('listening')
    })
})


