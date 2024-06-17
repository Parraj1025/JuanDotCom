const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

User.init({
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING
    }},
{
sequelize,
modelName: "users"
})

module.exports = Users;