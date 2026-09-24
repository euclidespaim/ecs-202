/**
 * Exemplo 3: Classificador de Paridade (Par/Ímpar) e Sinal (Positivo/Negativo/Zero)
 * Execução no Terminal: node exercicio3_paridade.js
 */

const numero = -14;

console.log("==========================================");
console.log(` 🔍 ANÁLISE DO NÚMERO: ${numero}`);
console.log("==========================================");

// 1. Verificação de Paridade usando Operador Resto (%)
const ePar = (numero % 2 === 0);
const paridadeStr = ePar ? "PAR" : "ÍMPAR";

// 2. Verificação de Sinal
let sinalStr = "";
if (numero > 0) {
  sinalStr = "POSITIVO";
} else if (numero < 0) {
  sinalStr = "NEGATIVO";
} else {
  sinalStr = "ZERO (NEUTRO)";
}

// Saída formatada
console.log(`• Paridade: ${paridadeStr}`);
console.log(`• Sinal:    ${sinalStr}`);
console.log("==========================================");
