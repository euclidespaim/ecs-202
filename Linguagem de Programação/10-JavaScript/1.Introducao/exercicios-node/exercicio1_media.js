/**
 * Exemplo 1: Cálculo de Média Escolar e Situação do Aluno
 * Execução no Terminal: node exercicio1_media.js
 */

// Entrada de Dados (Variáveis)
const nomeAluno = "Carlos Silva";
const nota1 = 8.5;
const nota2 = 6.0;
const nota3 = 7.5;

// Processamento: Cálculo da Média Aritmética
const media = (nota1 + nota2 + nota3) / 3;

// Saída de Dados no Terminal
console.log("==========================================");
console.log(` 📋 RELATÓRIO ESCOLAR DE: ${nomeAluno}`);
console.log("==========================================");
console.log(`Notas: [ ${nota1.toFixed(1)} | ${nota2.toFixed(1)} | ${nota3.toFixed(1)} ]`);
console.log(`Média Final: ${media.toFixed(2)}`);

// Tomada de Decisão (Estrutura Condicional)
if (media >= 7.0) {
  console.log("Situação: ✅ APROVADO");
} else if (media >= 5.0) {
  console.log("Situação: ⚠️ RECUPERAÇÃO");
} else {
  console.log("Situação: ❌ REPROVADO");
}
console.log("==========================================");
