var Requerimento = require('./Requerimento');

module.exports = function requerimentoHelper(obj_json) {
	return new Requerimento(
		obj_json.aluno,
		obj_json.componenteCurricular,
		obj_json.semestreReferente,
		obj_json.data,
		obj_json.tipo);
};
