//a instância do express é singleton
const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()

    /*quando o endereço começar com '/api' o
    router será chamado.*/
    server.use('/api',router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')

    /*o register vai usar os métodos declarados no 
    todoService.js get, post, put e delete  */
    todoService.register(router,'/todos')
}