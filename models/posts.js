const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class NewPost extends Model {}


NewPost.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    post: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    timestamps:false,
    underscored: true
})


module.exports = NewPost;