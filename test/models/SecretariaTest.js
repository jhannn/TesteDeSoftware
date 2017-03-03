var assert = require('assert');
var should = require('should');

var Secretaria = require('../../app/models/Secretaria.js');
var ComponenteCurricular =  require('../../app/models/ComponenteCurricular.js');
var Curso =  require('../../app/models/Curso.js');
var Mock = require('./mock.js');

describe('# Teste da classe Secretaria', function() {
  describe('## Construtores', function() {
    it('Criar nova Secretaria', function() {
      var componenteCurricular = new ComponenteCurricular('TDD', 80);
      var curso = new Curso('Tads', 2160, componenteCurricular);
      var secretaria = new Secretaria(curso, [], [], []);
      secretaria.should.be.not.null;
    });
  });

  describe('## Funcoes', function() {
    it('Adicionar novo Professor', function() {
      var componenteCurricular = new ComponenteCurricular('TDD', 80);
      var curso = new Curso('Tads', 2160, componenteCurricular);
      var secretaria = new Secretaria(curso, [], [], []);
      var novoProfessor = secretaria.adicionarNovoProfessor('Felipao', '587415');
      novoProfessor.should.be.not.null;
    });
  });

  it('Adicionar o mesmo Professor na Secretaria ja cadastrado', function() {
    var componenteCurricular = new ComponenteCurricular('TDD', 80);
    var curso = new Curso('Tads', 2160, componenteCurricular);
    var secretaria = new Secretaria(curso, [], [], []);
    secretaria.adicionarNovoProfessor('Felipao', '587415');
    var novoProfessor = secretaria.adicionarNovoProfessor('Felipao', '587415');
    should(novoProfessor).be.a.null;
  });

  // it('Gerenciador de Requerimentos VALIDO', function() {
  //   var componenteCurricular = new ComponenteCurricular('TDD', 80);
  //   var curso = new Curso('Tads', 2160, componenteCurricular);
  //   var secretaria = new Secretaria(curso, [], [], []);
  //   var aluno = secretaria.adicionarNovoAluno('Johann', '20131014040048', historico, curso);
  //   aluno.should.be.not.null;
  // });

});

