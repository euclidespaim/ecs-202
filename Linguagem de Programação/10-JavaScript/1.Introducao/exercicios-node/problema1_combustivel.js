/**
 * PROBLEMATIZAÇÃO 1: Gestão de Frota e Custo de Viagem
 * CONCEITOS: Variáveis, Tipos de Dados, Operadores Aritméticos (+, -, *, /).
 * 
 * CENÁRIO:
 * Um motorista de aplicativo de entregas precisa avaliar a rentabilidade de uma rota.
 * Ele precisa calcular:
 * 1. O consumo médio do veículo (km por litro).
 * 2. O custo total gasto em combustível na viagem.
 * 3. O custo por quilômetro rodado.
 * 
 * EXECUÇÃO: node problema1_combustivel.js
 */

// ENTREDAS (Dados da viagem)
const nomeMotorista = "Roberto Alves";
const distanciaKm = 450.0;     // Distância total em quilômetros
const litrosGastos = 37.5;     // Total de litros consumidos
const precoPorLitro = 5.89;    // Preço da gasolina por litro

// PROCESSAMENTO (Cálculos)
const consumoMedio = distanciaKm / litrosGastos;         // km/l
const custoTotalCombustivel = litrosGastos * precoPorLitro; // R$
const custoPorKm = custoTotalCombustivel / distanciaKm;    // R$/km

// SAÍDA FORMATADA NO TERMINAL
console.log("==================================================");
console.log(` 🚚 RELATÓRIO DE CUSTO DE VIAGEM | Motorista: ${nomeMotorista}`);
console.log("==================================================");
console.log(` Distância Percorrida: ${distanciaKm.toFixed(1)} km`);
console.log(` Combustível Consumido: ${litrosGastos.toFixed(1)} L`);
console.log(` Preço do Litro:       R$ ${precoPorLitro.toFixed(2)}`);
console.log("--------------------------------------------------");
console.log(` 📊 RESULTADOS:`);
console.log(` • Consumo Médio:      ${consumoMedio.toFixed(2)} km/L`);
console.log(` • Custo Total:        R$ ${custoTotalCombustivel.toFixed(2)}`);
console.log(` • Custo por Km:       R$ ${custoPorKm.toFixed(2)} / km`);
console.log("==================================================");
