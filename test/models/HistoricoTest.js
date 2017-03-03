var assert = require('assert');
var should = require('should');

var Historico = require('../../app/models/Historico.js');
var ComponenteCurricularHelper = require('../../app/models/ComponenteCurricularHelper.js');
var Mock = require('./mock.js');

describe('# Teste da classe Historico', function() {
	describe('## Construtores', function() {
		it('Historico VALIDO', function() {
			var historico = new Historico([]);
			historico.should.not.be.null;
		});
	});

	describe('## Funcoes', function() {
		it('Adicionar uma nova disciplina cursada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			var disciplina = historico.adicionarNovaDisciplinaCursando(5, [7.1, 6], componenteCurricular);
			historico.should.not.be.null;
		});
		it('Adicionar a mesma disciplina cursada ja cadastrada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaCursando(5, [7.1, 6], componenteCurricular);
			var disciplina = historico.adicionarNovaDisciplinaCursando(5, [7.1, 6], componenteCurricular);
			should(disciplina).be.a.null;
		});
		it('Adicionar uma nova disciplina certificada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			var disciplina = historico.adicionarNovaDisciplinaCertificada(5, [7.1, 6], componenteCurricular);
			historico.should.not.be.null;
		});
		it('Adicionar a mesma disciplina certificada ja cadastrada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaCertificada(5, [7.1, 6], componenteCurricular);
			var disciplina = historico.adicionarNovaDisciplinaCertificada(5, [7.1, 6], componenteCurricular);
			should(disciplina).be.a.null;
		});
		it('Adicionar uma nova disciplina reprovada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			var disciplina = historico.adicionarNovaDisciplinaReprovada(5, [7.1, 6], componenteCurricular);
			historico.should.not.be.null;
		});
		it('Adicionar a mesma disciplina reprovada ja cadastrada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaReprovada(5, [7.1, 6], componenteCurricular);
			var disciplina = historico.adicionarNovaDisciplinaReprovada(5, [7.1, 6], componenteCurricular);
			should(disciplina).be.a.null;
		});
		it('Adicionar uma nova disciplina aprovada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			var disciplina = historico.adicionarNovaDisciplinaAprovada(5, [7.1, 6], componenteCurricular);
			historico.should.not.be.null;
		});
		it('Adicionar a mesma disciplina aprovada ja cadastrada no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaAprovada(5, [7.1, 6], componenteCurricular);
			var disciplina = historico.adicionarNovaDisciplinaAprovada(5, [7.1, 6], componenteCurricular);
			should(disciplina).be.a.null;
		});

		it('Verificar Se Ja Exite O Componente Curricular No Historico com o componente ja cadastrado no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaAprovada(5, [7.1, 6], componenteCurricular);
			var componenteCurricularEncontradoNoHistorico = historico.verificarSeJaExiteOComponenteCurricularNoHistorico(componenteCurricular);
			componenteCurricularEncontradoNoHistorico.should.not.be.null;
			componenteCurricularEncontradoNoHistorico.should.be.eql(true);
		});

		it('Verificar Se Ja Exite O Componente Curricular No Historico com o componente ja cadastrado no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			var componenteCurricularEncontradoNoHistorico = historico.verificarSeJaExiteOComponenteCurricularNoHistorico(componenteCurricular);
			componenteCurricularEncontradoNoHistorico.should.not.be.null;
			componenteCurricularEncontradoNoHistorico.should.be.eql(false);
		});

		it('Calcular Carga Horaria Certificada sem disciplinas certificadas no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaAprovada(5, [7.1, 6], componenteCurricular);
			var totalCh = historico.calcularChCertificada();
			totalCh.should.not.be.null;
			totalCh.should.be.eql(0);
		});

		it('Calcular Carga Horaria Certificada com disciplinas certificadas no historico', function() {
			var historico = new Historico([]);
			var componenteCurricular= ComponenteCurricularHelper(Mock.componenteCurricularTeste);
			historico.adicionarNovaDisciplinaCertificada(5, [7.1, 6], componenteCurricular);
			var totalCh = historico.calcularChCertificada();
			totalCh.should.not.be.null;
			totalCh.should.be.eql(80);
		});
	});
});