var Disciplina = require('./Disciplina.js');

var Historico = function(disciplinas){
  this.disciplinas = disciplinas;
};

Historico.prototype.verificarSeJaExiteOComponenteCurricularNoHistorico = function (componenteCurricular) {
  auxArray=this.disciplinas;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].componenteCurricular.nome==componenteCurricular.nome)
        return true;
    };
  }
  return false;
};

Historico.prototype.calcularChCertificada = function () {
  auxArray=this.disciplinas;
  totalCh=0;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].situacao=='certificada')
        totalCh+=auxArray[i].componenteCurricular.cargaHoraria;
    };
  };
  return totalCh;
};

Historico.prototype.adicionarNovaDisciplinaCursando = function(semestreReferente, notas, componenteCurricular){
  var auxArray=this.disciplinas;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].componenteCurricular.nome==componenteCurricular.nome && auxArray[i].situacao=='aproveitado' || auxArray[i].situacao=='certificado' || auxArray[i].situacao=='aprovado' || auxArray[i].situacao=='cursando' && auxArray[i]==semestreReferente){
        return null;
      }
    }
  }
  var novaDisciplina=new Disciplina('cursando', semestreReferente, notas, componenteCurricular);
  this.disciplinas.push(novaDisciplina);
  return novaDisciplina;
};

Historico.prototype.adicionarNovaDisciplinaCertificada = function(semestreReferente, notas, componenteCurricular){
  var auxArray=this.disciplinas;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].componenteCurricular.nome==componenteCurricular.nome && auxArray[i].situacao=='aproveitado' || auxArray[i].situacao=='certificado' || auxArray[i].situacao=='aprovado' || auxArray[i].situacao=='cursando' && auxArray[i]==semestreReferente){
        return null;
      }
    }
  }
  var novaDisciplina=new Disciplina('certificada', semestreReferente, notas, componenteCurricular);
  this.disciplinas.push(novaDisciplina);
  return novaDisciplina;
};

Historico.prototype.adicionarNovaDisciplinaReprovada = function(semestreReferente, notas, componenteCurricular){
  var auxArray=this.disciplinas;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].componenteCurricular.nome==componenteCurricular.nome && auxArray[i].situacao=='aproveitado' || auxArray[i].situacao=='certificado' || auxArray[i].situacao=='aprovado' || auxArray[i].situacao=='cursando' && auxArray[i]==semestreReferente){
        return null;
      }
    }
  }
  var novaDisciplina=new Disciplina('reprovada', semestreReferente, notas, componenteCurricular);
  this.disciplinas.push(novaDisciplina);
  return novaDisciplina;
};

Historico.prototype.adicionarNovaDisciplinaAprovada = function(semestreReferente, notas, componenteCurricular){
  var auxArray=this.disciplinas;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if(auxArray[i].componenteCurricular.nome==componenteCurricular.nome && auxArray[i].situacao=='aproveitado' || auxArray[i].situacao=='certificado' || auxArray[i].situacao=='aprovado' || auxArray[i].situacao=='cursando' && auxArray[i]==semestreReferente){
        return null;
      }
    }
  }
  var novaDisciplina=new Disciplina('aprovada', semestreReferente, notas, componenteCurricular);
  this.disciplinas.push(novaDisciplina);
  return novaDisciplina;
};

module.exports = Historico;
