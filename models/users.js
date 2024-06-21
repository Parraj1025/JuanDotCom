const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs')

const encryptedPassword = async (data) => {data.password = await bcrypt.hash(data.password,10)};
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
    beforeCreate: encryptedPassword(data),
    afterCreate : () => console.log('password encrypted')
},
timestamps:false,
sequelize,
modelName: "users"
})

module.exports = Users;