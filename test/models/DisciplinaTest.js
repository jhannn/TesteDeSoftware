var assert = require('assert');
var should = require('should');

var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricularHelper = require('../../app/models/ComponenteCurricularHelper.js');
var Mock = require('./mock.js');

describe('# Teste da classe Disciplina', function() {
  describe('## Construtores', function() {
      it('Disciplina VALIDO', function() {
      	var componenteCurricular = ComponenteCurricularHelper(Mock.componenteCurricularTeste);
        var disciplina=new Disciplina('reprovada', 5, [1,0], componenteCurricular);
        disciplina.should.not.be.null;
      });
  });
});