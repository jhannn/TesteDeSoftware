var Curso = require('./Curso');

module.exports = function cursoHelper(obj_json) {
	return new Curso(
		obj_json.nome,
		obj_json.cargaHoraria,
		obj_json.componenteCurriculares);
};
