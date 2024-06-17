const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init({
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING
    }},
{
timestamps:false,
sequelize,
modelName: "users"
})

module.exports = Users;