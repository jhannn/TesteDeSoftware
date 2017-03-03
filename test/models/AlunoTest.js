var assert = require('assert');
var should = require('should');

var Aluno = require('../../app/models/Aluno.js');
var Curso = require('../../app/models/Curso.js');
var Historico = require('../../app/models/Historico.js');
var AlunoHelper = require('../../app/models/AlunoHelper.js');
var CursoHelper = require('../../app/models/CursoHelper.js');
var HistoricoHelper = require('../../app/models/HistoricoHelper.js');
var Mock = require('./mock.js');

describe('# Teste da classe Aluno', function() {
  describe('## Construtores', function() {
      it('Aluno VALIDO', function() {
      	var curso = CursoHelper(Mock.curso);
      	var historico = HistoricoHelper(Mock.historico);
      	var aluno = new Aluno('Johann Guerra', '20131014040048', historico, curso);
		aluno.should.not.be.null;
      });
  });
});