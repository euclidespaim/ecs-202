/**
 * Exemplo 1: Cálculo de Média Escolar e Situação do Aluno
 * Execução no Terminal: node exercicio1_media.js
 */


//Entrada de Dados(Variáveis)
const nomeAluno = "Aluno Fictício";
const nota1 = 10.0;
const nota2 = 7.0;
const nota3 = 1.0;

//Provcessamento de Dados
const media = (nota1 + nota2 + nota3) /3

//Saída de Dados
console.log("=================")
console.log(`RELATÓRIO ESCOLAR DE: ${nomeAluno}`)
console.log("=================")
console.log(`Notas: ${nota1} | ${nota3} | ${nota3}`)
console.log(`Média Final: ${media.toFixed(2)}`)

//Tomada de Decisão ("Hoisting")
if (media >= 7.0) {
    console.log("Situação: APROVADO")
} else if (media >= 5) {
    console.log("Situação RECUPERAÇÃO")
} else {
    console.log("Situação REPROVADO")
}

