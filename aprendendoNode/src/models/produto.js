const sequelize = require('sequelize');
const database = require('../db');
const schema ='';

class Produto extends sequelize.Model{};

Produto.init(
    {
        Codigo:
        {
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            prymaryKey: true
        },
        Descricao:
        {
            type:sequelize.STRING,
            allowNull: true,
        },
        DataCriacao:
        {
            type:sequelize.DATE,
            allowNull: false
        },
        DataAtualizacao:
        {
            type:sequelize.DATE,
            allowNull: true
        },
    },
    {
    sequelize : database, modelName:'tbProduto',
    }
);

module.exports = Produto;