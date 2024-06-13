require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');

const sequelize = require('./config/connection');
const routes = require("./routes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


sequelize.sync({force:true}).then(() => {
    app.listen(PORT,()=> {
        console.log('listening')
    })
})


