var Disciplina = require('./Disciplina');

module.exports = function disciplinaHelper(obj_json) {
	return new Disciplina(
		obj_json.situacao,
		obj_json.semestreReferente,
		obj_json.notas,
		obj_json.componenteCurricular);
};
