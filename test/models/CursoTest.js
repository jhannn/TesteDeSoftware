var assert = require('assert');
var should = require('should');

var Curso = require('../../app/models/Curso.js');
var CursoHelper = require('../../app/models/CursoHelper.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');
var ComponenteCurricularHelper = require('../../app/models/ComponenteCurricularHelper.js');
var Mock = require('./mock.js');

describe('# Teste da classe Curso', function() {
  describe('## Construtores', function() {
      it('Curso VALIDO', function() {
      	var componenteCurriculares=[];
      	componenteCurriculares.push(ComponenteCurricularHelper(Mock.componenteCurricularTeste));
      	componenteCurriculares.push(ComponenteCurricularHelper(Mock.componenteCurricularJogos));
        var curso = new Curso('Tads', 2160, componenteCurriculares);
        curso.should.not.be.null;
      });
  });

    describe('## Funcoes', function() {
      it('Adicionar novo Componente Curricular', function() {
        var curso = CursoHelper(Mock.curso);
        var novoComponenteAdicionadoNoCurso = curso.adicionarNovoComponenenteCurricular('Tdd', 80);
        novoComponenteAdicionadoNoCurso.should.not.be.null;
      });

      it('Adicionar o mesmo Componente Curricular ja cadastrado', function() {
        var curso = CursoHelper(Mock.curso);
        curso.adicionarNovoComponenenteCurricular('Tdd', 80);
        var novoComponenteAdicionadoNoCurso = curso.adicionarNovoComponenenteCurricular('Tdd', 80);
        should(novoComponenteAdicionadoNoCurso).be.a.null;
      });
  });
});