/*isso é um middleware, o res é de 'response' */
module.exports=function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')

    /*depois de inserir os cabeçalhos, se chama o next() */
    next()
}