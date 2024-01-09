const Sequelize = require('sequelize');
const database = new Sequelize ('dbApiCarros', 'root', 'root',
{
    dialect:'mysql',
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306'
});

database.sync();

module.exports=database;