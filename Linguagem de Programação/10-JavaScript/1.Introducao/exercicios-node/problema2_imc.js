/**
 * PROBLEMATIZAÇÃO 2: Triagem de Avaliação Física em Academia
 * CONCEITOS: Operadores de Comparação Rígida (===, <, >), Estruturas Condicionais (if / else if / else).
 * 
 * CENÁRIO:
 * Uma academia de ginástica automatizou a avaliação inicial dos alunos.
 * O sistema calcula o IMC (Massa / Altura²) e emite uma recomendação de treino
 * personalizada baseada na faixa de classificação de saúde.
 * 
 * EXECUÇÃO: node problema2_imc.js
 */

// ENTRADAS (Dados do Aluno)
const nomeAluno = "Mariana Oliveira";
const pesoKg = 68.5;
const alturaMetros = 1.65;

// PROCESSAMENTO (IMC = Peso / Altura²)
const imc = pesoKg / (alturaMetros * alturaMetros);

// SAÍDA E ESTRUTURA CONDICIONAL
console.log("==================================================");
console.log(` 🏋️ AVALIAÇÃO FÍSICA E TRIAGEM | Aluno: ${nomeAluno}`);
console.log("==================================================");
console.log(` Peso: ${pesoKg} kg | Altura: ${alturaMetros} m`);
console.log(` IMC Calculado: ${imc.toFixed(2)} kg/m²`);
console.log("--------------------------------------------------");

// Tomada de Decisão com Múltiplas Condições
if (imc < 18.5) {
  console.log(" Classificação: ⚠️ Abaixo do Peso");
  console.log(" Recomendação:  Foco em hipertrofia e acompanhamento nutricional.");
} else if (imc >= 18.5 && imc < 25.0) {
  console.log(" Classificação: ✅ Peso Normal (Ideal)");
  console.log(" Recomendação:  Manutenção com exercícios resistidos e aeróbicos.");
} else if (imc >= 25.0 && imc < 30.0) {
  console.log(" Classificação: ⚠️ Sobrepeso");
  console.log(" Recomendação:  Treino aeróbico de alta intensidade e reeducação alimentar.");
} else {
  console.log(" Classificação: 🚨 Obesidade");
  console.log(" Recomendação:  Acompanhamento médico, aeróbico moderado e baixo impacto.");
}
console.log("==================================================");
