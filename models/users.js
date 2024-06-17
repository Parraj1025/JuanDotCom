const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: DataTypes.STRING
})

module.exports = User;