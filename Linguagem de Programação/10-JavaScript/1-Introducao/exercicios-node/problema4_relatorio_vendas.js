/**
 * PROBLEMATIZAÇÃO 4: Auditoria de Vendas Semanal da Loja
 * CONCEITOS: Laços de Repetição (for), Arrays, Acumuladores, Variáveis de Maior/Menor Valor.
 * 
 * CENÁRIO:
 * Um pequeno comerciante anotou o faturamento de sua loja de Segunda a Domingo.
 * Ele precisa de um script em Node.js que percorra o histórico da semana e calcule:
 * 1. O faturamento total da semana.
 * 2. A média diária de vendas.
 * 3. O maior valor de vendas registrado em um único dia.
 * 4. Quantos dias tiveram faturamento acima da meta diária estabelecida (R$ 600,00).
 * 
 * EXECUÇÃO: node problema4_relatorio_vendas.js
 */

// ENTRADAS (Vendas de Segunda a Domingo)
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const vendasDiarias = [450.0, 720.0, 580.0, 910.0, 650.0, 1150.0, 380.0];
const metaDiaria = 600.0;

// VARIAVEIS ACUMULADORAS E DE MONITORAMENTO
let faturamentoTotal = 0;
let maiorVenda = vendasDiarias[0];
let diaMaiorVenda = diasSemana[0];
let diasAcimaDaMeta = 0;

// PROCESSAMENTO COM LAÇO 'FOR'
console.log("==================================================");
console.log(" 📊 AUDITORIA DE VENDAS DA SEMANA");
console.log("==================================================");

for (let i = 0; i < vendasDiarias.length; i++) {
  const valorDia = vendasDiarias[i];
  const diaNome = diasSemana[i];

  // 1. Acumular total
  faturamentoTotal += valorDia;

  // 2. Verificar maior venda
  if (valorDia > maiorVenda) {
    maiorVenda = valorDia;
    diaMaiorVenda = diaNome;
  }

  // 3. Contar dias acima da meta
  if (valorDia >= metaDiaria) {
    diasAcimaDaMeta++;
    console.log(` • ${diaNome.padEnd(8)}: R$ ${valorDia.toFixed(2)} [🎯 META ATINGIDA]`);
  } else {
    console.log(` • ${diaNome.padEnd(8)}: R$ ${valorDia.toFixed(2)} [  abaixo da meta ]`);
  }
}

// CÁLCULOS FINAIS
const mediaDiaria = faturamentoTotal / vendasDiarias.length;

// SAÍDA DOS RESULTADOS NO TERMINAL
console.log("--------------------------------------------------");
console.log(` 💰 Faturamento Total:   R$ ${faturamentoTotal.toFixed(2)}`);
console.log(` 📈 Média Diária:        R$ ${mediaDiaria.toFixed(2)}`);
console.log(` 🏆 Recorde de Vendas:   R$ ${maiorVenda.toFixed(2)} (${diaMaiorVenda})`);
console.log(` 🎯 Dias Acima da Meta:  ${diasAcimaDaMeta} de 7 dias`);
console.log("==================================================");
