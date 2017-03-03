var professor = {
  'matricula': '75847',
  'nome': 'Minora'
};

var componenteCurricularTeste = {
  'nome':'Teste de software', 
  'cargaHoraria': 80
};

var componenteCurricularJogos = {
  'nome':'Jogos', 
  'cargaHoraria': 80
};

var curso = {
  'nome': 'Tads',
  'cargaHoraria': 2160,
  'componenteCurriculares':[]
};

var disciplina = {
  'situacao': 'Cursando',
  'semestreRefente': 5,
  'notas': [7.1, 3],
  'componenteCurricular': componenteCurricularTeste
};

var historico = {
  'disciplinas': [disciplina]
};

var aluno = {
  'nome': 'Mario Silva',
  'matricula': '2012310404008',
  'historico': historico,
  'curso': curso
};

var requerimento = {
  'aluno': aluno,
  'componenteCurricular': componenteCurricularTeste,
  'semestreReferencia': 5,
  'data': new Date(),
  'tipo': 'certificacao'
};

var secretaria = {
  'curso':curso,
  'requeremintos': [],
  'alunos':[],
  'professores': []
};

module.exports.aluno = aluno;
module.exports.componenteCurricularTeste = componenteCurricularTeste;
module.exports.componenteCurricularJogos = componenteCurricularJogos;
module.exports.curso = curso;
module.exports.disciplina = disciplina;
module.exports.historico = historico;
module.exports.requerimento = requerimento;
module.exports.secretaria = secretaria;
module.exports.professor = professor;