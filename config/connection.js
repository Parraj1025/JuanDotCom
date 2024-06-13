require('dotenv').config()
const { Sequelize } = require ('sequelize');

console.log(`POSTGRESURL: ${process.env.POSTGRESURL} `)

const sequelize = new Sequelize(process.env.POSTGRESURL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: true
        }
    }
});

module.exports = sequelize;