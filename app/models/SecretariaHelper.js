var Secretaria = require('./Secretaria');
var CursoHelper = require('./CursoHelper');

module.exports = function secretariaHelper(obj_json) {
	return new Secretaria(
		CursoHelper(obj_json.curso),
		[],
		[],
		[]);
};
