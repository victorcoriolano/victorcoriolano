const { Model } = require('sequelize');
const ModelProduto = require('../models/produto');

module.exports=
{
    async List(req, res)
    {
        try {
            
            const produtos = await ModelProduto.findAll();
            
            return res.json(produtos);
        
           } catch (erro) {
            return console.error('erro na list:', erro)
        }
    },

    async Create(req, res)
    {
        try {
            
            const produtos = ModelProduto.create({

                Codigo : req.body.Codigo,
                Descricao: req.body.Descricao,
                DataCriacao: req.body.DataCriacao,
                DataAtualizacao: null
            
            });
            
            return res.json(produtos);
        
           } catch (erro) {
            return console.error('erro na create:', erro)
        }
    },

    async Update(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
            if (prod){
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date();
                await prod.save();
            }
            
            return res.json(prod);
        
           } catch (erro) {
            return console.error('erro na update:', erro)
        }
    },

    async GetOne(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
            
            return res.json(prod);
        
           } catch (erro) {
            return console.error('erro na getone:', erro)
        }
    },

    async Delete(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
            await prod.destroy();
            
            return res.json(prod);
        
           } catch (erro) {
            return console.error('erro na delete:', erro)
        }
    },

}