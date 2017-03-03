var assert = require('assert');
var should = require('should');

var Professor = require('../../app/models/Professor.js');

describe('# Teste da classe Professor', function() {
  describe('## Construtores', function() {
      it('Professor', function() {
        var professor = new Professor('54147', 'juninho');
        professor.should.not.be.null;
      });
  });
});