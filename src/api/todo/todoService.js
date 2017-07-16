const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
/*
quando se faz um update em um arquivo no mongo,
ele te retorna o registro 'antigo' o atributo new
setado para true diz para retornar o novo registro. 
o runValidators é para que as validações ocorram
no update também (por default elas não ocorrem)
*/
Todo.updateOption({new:true, runValidators:true})

module.exports = Todo