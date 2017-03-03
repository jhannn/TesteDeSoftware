var Aluno = require('./Aluno');

module.exports = function alunoHelper(obj_json) {
	return new Aluno(
		obj_json.nome,
		obj_json.matricula,
		obj_json.historico,
		obj_json.curso);
};
