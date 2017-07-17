/*isso é um middleware, o res é de 'response' */
module.exports=function(req,res,next){
    res.header('Acces-Control-Allow-Origin','*')
    res.header('Acces-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acces-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')

    /*depois de inserir os cabeçalhos, se chama o next() */
    next()
}