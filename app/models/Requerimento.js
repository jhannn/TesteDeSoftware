var Requerimento = function(aluno, componenteCurricular, semestreReferente, data, tipo){
  this.aluno = aluno;
  this.componenteCurricular = componenteCurricular;
  this.semestreReferente = semestreReferente;
  this.data = data;
  this.tipo = tipo;
};

var certificacao = function (aluno, componenteCurricular, semestre_referente, data, curso) {
  if(!aluno.historico.findByComponenteCurricular(componenteCurricular)){
      if(aluno.historico.calcularChAproveitadaOuCertificada()<curso.cargaHoraria/2){
        var requereminto= new Requerimento(aluno, componenteCurricular, semestreReferente, data, "certificacao");
        return requereminto;
      }
  }
};

module.exports = Requerimento;
module.exports.createCertificacao = certificacao;
