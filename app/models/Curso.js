var ComponenteCurricular = require('./ComponenteCurricular');

var Curso = function(nome, cargaHoraria, componenteCurriculares) {
  this.nome = nome;
  this.cargaHoraria=cargaHoraria;
  this.componenteCurriculares=componenteCurriculares||[];
};

Curso.prototype.adicionarNovoComponenenteCurricular = function(nome, cargaHoraria){
  var auxArray=this.componenteCurriculares;
  if(auxArray){
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].nome==nome){
      return null;
    }
  }
}
  var novoComponenteCurricular=new ComponenteCurricular(nome, cargaHoraria);
  this.componenteCurriculares.push(novoComponenteCurricular);
  return novoComponenteCurricular;
};

module.exports = Curso;
