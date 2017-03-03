var ComponenteCurricular = require('./ComponenteCurricular.js');

module.exports = function componenteCurricularHelper(obj_json) {
	return new ComponenteCurricular(
		obj_json.nome,
		obj_json.cargaHoraria);
};
