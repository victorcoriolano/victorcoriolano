//requisiçao e caminho das dependencias no arquivo do servidor
require ('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//caminho da pasta de rotas para o servidor
const routes = require('./routes');
//controle do server por meio do express
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
//ouvir o arquivo .env e capturar a variavel PORT dentro dele
//()=>{} função anonima
//o PORT é a porta do servidor e o process.env pode capturar esse valor de qualquer local
server.listen(process.env.PORT, ()=>{
    console.log(`servidor rodando em: http://localhost:${process.env.PORT}`);
})

