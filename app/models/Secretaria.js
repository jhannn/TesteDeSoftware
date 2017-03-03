var Requerimento=require('./Requerimento.js');
var Aluno=require('./Aluno.js');
var Professor=require('./Professor.js');

var Secretaria = function(curso, requerimentos, alunos, professores){
  this.curso = curso;
  this.requerimentos = requerimentos;
  this.alunos = alunos;
  this.professores = professores;
};

Secretaria.prototype.adicionarNovoAluno = function(nome, matricula, historico, curso){
  var auxArray=this.alunos;
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].matricula==matricula){
      return null;
    }
  }
  var novoAluno=new Aluno(nome, matricula, historico, this.curso);
  this.alunos.push(novoAluno);
  return novoAluno;
};

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

Secretaria.prototype.requererCertificacao = function(aluno, componentCurricular, semestreReferente, data){
  if (!buscarPorAlunoAndComponenteAndSemestre(aluno, componentCurricular, semestreReferente)){
    if (qtdDeRequerimentosDeAlunoNoSemestre(aluno, semestreReferente < 4)){
      var requerimentoCertificacao = Requerimento.createCertificacao(aluno, componentCurricular, semestreReferente, data, this.curso);
      this.requerimentos.push(requerimentoCertificacao);
      return requerimentoCertificacao;
    }
  }
  return null;
};

Secretaria.prototype.buscarPorAlunoAndComponenteAndSemestre = function(aluno, componentCurricular, semestreReferente){
  var auxArray=this.requerimentos;
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].aluno.matricula==aluno.matricula && auxArray[i].semestreReferente==semestreReferente && auxArray[i].componentCurricular.nome==componentCurricular.nome){
      return false;
    }
  }
  return true;
};

Secretaria.prototype.qtdDeRequerimentosDoAlunoNoSemestre = function(aluno, semestreReferente){
  var auxArray=this.requerimentos;
  var contadorDisciplinas=0;
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].aluno.matricula==aluno.matricula && auxArray[i].semestreReferente==semestreReferente){
      contadorDisciplinas+=1;
    }
  }
  return contadorDisciplinas;
};


module.exports = Secretaria;