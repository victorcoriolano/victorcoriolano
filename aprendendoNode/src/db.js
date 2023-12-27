const sequelize = require('sequelize');
const database = new sequelize ('dbApiCarros', 'root', 'root',
{
    dialect:'mssql',
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306'
});

database.sync();

module.exports=database;