var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rotas
app.get('/', function(req, res) {
  res.send({'api':'ac','mensagem':'Ok!'});
});

// Rodar Servidor
app.listen(3000, function() {
  console.log('Servidor Funcionando!!!');
});
