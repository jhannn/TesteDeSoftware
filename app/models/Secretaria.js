var Requerimento=require('./Requerimento.js');
var Aluno=require('./Aluno.js');
var Professor=require('./Professor.js');

var Secretaria = function(curso, requerimentos, alunos, professores){
  this.curso = curso;
  this.requerimentos = requerimentos;
  this.alunos = alunos;
  this.professores = professores;
};

// Secretaria.prototype.adicionarNovoAluno = function(nome, matricula, historico, curso){
//   var auxArray=this.alunos;
//   for (var i = 0; i < auxArray.length; i++) {
//     if(auxArray[i].matricula==matricula){
//       return null;
//     }
//   }
//   var novoAluno=new Aluno(nome, matricula, historico, this.curso);
//   this.alunos.push(novoAluno);
//   return novoAluno;
// };

Secretaria.prototype.adicionarNovoProfessor = function(matricula, nome){
  var auxArray=this.professores;
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].matricula==matricula){
      return null;
    }
  }
  var novoProfessor=new Professor(matricula, nome);
  this.professores.push(novoProfessor);
  return novoProfessor;
};

module.exports = Secretaria;
