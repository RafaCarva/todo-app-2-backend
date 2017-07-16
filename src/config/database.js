//Faz o mapeamento de objetos e a conexão com o mongo.
const mongoose = require('mongoose')

/*
Seta o mongoose para usar a api de promise do node
(para evitar um warning que diz que a api do próprio mongoose
está depreciada (em uma versão mais nova do mongoose não deve
precisar fazer isso))
*/
mongoose.Promise = global.Promise

/*
aqui é a conexão em si.
esse banco ainda não foi criado...
*/
module.exports = mongoose.connect('mongodb://localhost/todo')