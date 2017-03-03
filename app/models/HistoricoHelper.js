var Historico = require('./Historico');

module.exports = function historicoHelper(obj_json) {
	return new Historico(
		obj_json.disciplinas);
};
