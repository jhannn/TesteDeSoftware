## Fluxo do trabalho
1. Fork no projeto https://github.com/software-teste/ac
2. Clona o projeto forkado no computador
3. projetar o código com testes 1;
4. git add e commit  -m "incluído o projeto com testes"
5. desenvolver o código que resolva o teste
6. git add e commit  -m "desenvolvido o código"
7. refatorar o código
8. git add e commit  -m "refatorado do código"
9. projetar o código com testes 2;
10. git add commit  -m "incluído o projeto com testes"
11. desenvolver o código que resolva o teste
12. git add e commit  -m "desenvolvido o código"
13. refatorar o código
14. git add e commit  -m "refatorado do código"
15. git push

## Descrição do projeto

O projeto é um subsistema de inscrição de alunos requerendo o aproveitamento e certificação de conhecimento de disciplinas do curso de TADS.

### __Regras gerais__

1. O aluno só pode __TER__ aproveitado e/ou certificado até o limite de 50% da carga-horária do curso.
2. Só pode se inscrever em disciplinas que o aluno não tenha sido reprovado

**Observação**

O curso de TADS tem 2160 horas/aula de disciplinas o que permite ao aluno ter até 1.080 horas/aula aproveitadas e/ou certificadas.


### __Regras para certificação de conhecimento em disciplinas__

1. Só pode se inscrever em no máximo 4 disicplinas por semestre.
2. O coordenador do curso nomeia uma banca de 3 professores para confeccionar a avaliação.
3. A banca tem um prazo de 1 semana para confeccionar a avaliação e fazer o upload.
4. A banca tem um prazo de 1 semana para notificar o aluno da data da avaliação.
5. O resultado da avaliação será publicado após 1 semana da aplicação da avaliação.


### __Regras para aproveitamento em disciplinas__

1. O requerimento deve ter digitalizado: histórico acadêmico e programa de cada disciplina cursada.
2. A relação entre disciplina requerida em TADS e já cursada deve ser de uma para uma..várias (1->1..\*).
3. Para cada disciplina do curso de TADS requerida, deverá informar para o ano, nome, carga-horária em horas, e ementa para cada disciplina.
4. Caso a relação de disciplinas seja uma para várias (1..\*), o sistema cálcula média ponderada da carga-horária e da nota.
5. O coordenador atribui 1 professor por disciplina para fazer a análise (__deferir__ ou __indeferir__) do aproveitamento.


## Avaliação

A avaliação é individual contudo é permitido discussão do coletivo.
Isso implica em que: as dúvidas podem e devem ser discutidas contudo os códigos gerados serão obrigatoriamente individuais.

Neste sentido, o professor irá usar o **forked github** de cada aluno para o resultado da avaliação.

### O que implementar

Considerando:

- Todo o projeto será em [NodeJS](https://nodejs.org) ou [TypeScript](https://www.typescriptlang.org) e suas bibliotecas;
- O sistema será com API no protocolo Rest Web Service;
- A autenticação não será desenvolvida no momento, contudo é necessário a identificação do aluno requerente.

Implemente:

1. O serviço de inscrição de certificação de conhecimento de disciplina.
2. O serviço de inscrição em aproveitamento de disciplina, sem considerar os uploads de documentos.

__Observação__

Vocês podem fazer mock da persistência usando ou não bibliotecas.

### Pontucação

1. Não seguir o fluxo de trabalho corresponde a entregar avaliação em branco.
2. Não fazer os comandos do git implica em não ter usado o fluxo, por indireção será aplicado a regra 1, ou seja, zerado a avaliação.
3. A refatoração não é um passo obrigatório, então os passos 7, 8, 13 e 14 são facultativos.
4. Entregar a avaliação funcionando seguindo o fluxo de trabalho terá nota 60 pontos.
5. Deixar o código legível seguindo o paradigma __Orientado a Objetos__ terá acréscimo de 40 pontos na nota.
