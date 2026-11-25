/**
 * Exemplo 2: Tabuada Dinâmica com Laço de Repetição 'for'
 * Execução no Terminal: node exercicio2_tabuada.js
 */

const numero = 7;

console.log("==========================================");
console.log(` 🔢 TABUADA DO NÚMERO: ${numero}`);
console.log("==========================================");

// Laço 'for': inicializador; condição de parada; incremento
for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  // Interpolação de Strings (Template Literals)
  console.log(`  ${numero}  x  ${i < 10 ? ' ' + i : i}  =  ${resultado < 10 ? ' ' + resultado : resultado}`);
}

console.log("==========================================");
