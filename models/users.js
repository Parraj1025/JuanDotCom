const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init({
    username:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }},
{
hooks:{
    beforeCreate: () =>
    console.log('new user added')
},
timestamps:false,
sequelize,
modelName: "users"
})

module.exports = Users;