var Secretaria = require('./Secretaria');

module.exports = function secretariaHelper(obj_json) {
	return new Secretaria(
		obj_json.curso,
		[],
		[],
		[]);
};
