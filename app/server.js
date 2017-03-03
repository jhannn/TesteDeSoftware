var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Aluno = require('./models/Aluno');
var AlunoHelper = require('./models/AlunoHelper');
var ComponenteCurricular = require('./models/ComponenteCurricular');
var ComponenteCurricularHelper = require('./models/ComponenteCurricularHelper');
var Curso = require('./models/Curso');
var CursoHelper = require('./models/CursoHelper');
var Disciplina = require('./models/Disciplina');
var DisciplinaHelper = require('./models/DisciplinaHelper');
var Historico = require('./models/Historico');
var HistoricoHelper = require('./models/HistoricoHelper');
var Professor = require('./models/Professor');
var professorHelper = require('./models/ProfessorHelper');
var Requerimento = require('./models/Requerimento');
var RequerimentoHelper = require('./models/RequerimentoHelper');
var Secretaria = require('./models/Secretaria');
var SecretariaHelper = require('./models/SecretariaHelper');

var secretaria=undefined;

// Rotas
app.get('/', function(req, res) {
  res.send({'api':'ac','mensagem':'Ok!'});
});

app.post('/api/adicionar/Secretaria', function(req, res) {
  var secretaria = SecretariaHelper(req.body);
  if (secretaria === undefined) {
    res
    .status(404)
    .send({"status":"falhou"});
  } else {
    this.secretaria=secretaria;
    res
    .status(201)
    .send(secretaria);
  }
});

app.post('/api/adicionar/Aluno', function(req, res) {
  var aluno = this.secretaria.adicionarNovoAluno(req.body.nome, req.body.matricula, req.body.historico, req.body.curso);
  if (aluno === undefined) {
    res
    .status(404)
    .send({"status":"falhou"});
  } else {
    res
    .status(201)
    .send(aluno);
  }
});

app.post('/api/adicionar/Professor', function(req, res) {
  var professor = this.secretaria.adicionarNovoProfessor(req.body.matricula, req.body.nome);
  if (professor === undefined) {
    res
    .status(404)
    .send({"status":"falhou"});
  } else {
    res
    .status(201)
    .send(professor);
  }
});

// app.post('/api/adicionar/ComponenteCurricular', function(req, res) {
//   console.log(req);
//     //console.log(this.secretaria.curso);
//   var componenteCurricular = this.secretaria.curso.adicionarNovoComponenenteCurricular(req.body.nome, req.body.cargaHoraria);

//   if (componenteCurricular === undefined) {
//     res
//       .status(404)
//       .send({"status":"falhou"});
//   } else {
//     res
//       .status(201)
//       .send(componenteCurricular);
//   }
// });

// Rodar Servidor
app.listen(3000, function() {
  console.log('Servidor Funcionando!!!');
});
