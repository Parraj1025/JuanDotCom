const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    username:{
        type: Datatypes.STRING,
        primaryKey: true
    },
    password: Datatypes.STRING
})