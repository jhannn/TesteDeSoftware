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

//   describe('Populando API', function() {
//     it('Adiconando uma Secretaria', function(done) {
//       chai.request(server)
//       .post('/api/adicionar/Secretaria')
//       .set('content-type', 'application/x-www-form-urlencoded')
//       .send(Mock.secretaria)
//       .end(function(err, res) {
//         expect(res).to.have.status(201);
//         expect(res.body.curso).to.have.property('nome').and.equal('Tads');
//         done();
//       });
//     });

//     it('Adiconando um Novo Aluno a Secretaria', function(done) {
//       chai.request(server)
//       .post('/api/adicionar/Aluno')
//       .set('content-type', 'application/x-www-form-urlencoded')
//       .send({'nome':'Johann', 'matricula': '20123123124', 'historico': Mock.historico, 'curso': Mock.curso})
//       .end(function(err, res) {
//         expect(res).to.have.status(201);
//         expect(res.body.curso).to.have.property('nome').and.equal('Tads');
//         done();
//       });
//     });

//     it('Adiconando um Novo Professor a Secretaria', function(done) {
//       chai.request(server)
//       .post('/api/adicionar/Professor')
//       .set('content-type', 'application/x-www-form-urlencoded')
//       .send({'nome':'Felipao', 'matricula': '578412'})
//       .end(function(err, res) {
//         expect(res).to.have.status(201);
//         expect(res.body).to.have.property('matricula').and.equal('578412');
//         done();
//       });
//     });

//     it('Adiconando um Novo Componente Curricular no Curso', function(done) {
//       chai.request(server)
//       .post('/api/adicionar/ComponenteCurricular')
//       .set('content-type', 'application/x-www-form-urlencoded')
//       .send({'nome':'TDD', 'cargaHoraria': '80'})
//       .end(function(err, res) {
//         console.log(res);
//         expect(res).to.have.status(201);
//         expect(res.body).to.have.property('nome').and.equal('TDD');
//         expect(res.body).to.have.property('cargaHoraria').and.equal('80');
//         done();
//       });
//     });
//   });
});
