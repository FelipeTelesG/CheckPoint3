// Na teoria funciona, na minha prática também, e na sua? será que funciona?


/*
1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
Crie um construtor para ele e importe-o como o módulo aluno.

2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

let Curso = require('./module/curso');

// Adicionar Alunos

Curso.adicionarAluno('Felipe Teles', 1, [10, 9, 9]);
Curso.adicionarAluno('Rafael Varela', 3, [6, 10, 5]);
Curso.adicionarAluno('Guilherme Vieira', 0, [10, 10, 10]);
Curso.adicionarAluno('Diego Junio', 1, [10, 7, 6]);
Curso.adicionarAluno('Henrique Valela', 0, [8, 8, 8]);
Curso.adicionarAluno('Professor Marcos Santana', 1, [10, 9, 8]);

// Média dos Alunos

Curso.mediaNotaAlunos(Curso.estudantes);

// Adicionar Falta

Curso.adicionarFalta(Curso.estudantes, 'Professor Marcos Santana');