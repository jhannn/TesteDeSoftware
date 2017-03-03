var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should;
var expect = chai.expect;

var Mock = require('./models/mock.js');

var server = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Testes API', function() {
  describe('Status', function() {
    it('API Funcionando', function(done) {
      chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});
