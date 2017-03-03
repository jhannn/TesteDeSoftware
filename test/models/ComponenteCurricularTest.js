var assert = require('assert');
var should = require('should');

var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe ComponenteCurricular', function() {
  describe('## Construtores', function() {
      it('Componente Curricular VALIDO', function() {
      	var componenteCurricular = new ComponenteCurricular('TDD', 80);
		componenteCurricular.should.not.be.null;
      });
  });
});