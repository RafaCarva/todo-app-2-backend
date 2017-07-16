/*o server.js foi aletrado para exportar 
um server*/
const server = require('./config/server')
require('./config/database')

/* Lá no routes.js, o que foi exportado é uma
função que recebe um atributo 'server', aqui
se chama essa função passando o server acima */
require('./config/routes')(server)