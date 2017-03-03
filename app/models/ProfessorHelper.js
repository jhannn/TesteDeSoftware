var Professor = require('./Professor');

module.exports = function professorHelper(obj_json) {
	return new Professor(
		obj_json.matricula,
		obj_json.nome);
};
