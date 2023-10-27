/*
1) faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua media e sua classificacao conforme a tabela abaixo

Media = (nota1 + nota2 + nota3) / 3;

Classificacao:
-Media menor que 5, reprovacao;
-Media entre 5 e 7, recuperacao;
-Media acima de 7, passou de semestre;
*/
const nota1 = 6;
const nota2 = 5;
const nota3 = 8;

const Media = (nota1 + nota2 + nota3) / 3;

if (Media < 5) {
const Media = (nota1 + nota2 + nota3) / 3;
  console.log(`Reprovado, sua nota foi ${Media.toFixed(2)}`);
} else if (Media >= 5 && Media <= 7) {
  console.log(`Recuperação, sua nota foi ${Media.toFixed(2)}`);
} else {
  console.log(`Passou de semestre, sua nota foi ${Media.toFixed(2)}`);
}
