/**
 * PROBLEMATIZAÇÃO 3: Motor de Regras de Checkout de E-Commerce
 * CONCEITOS: Operadores Lógicos (&&, ||, !), Atribuição Simplificada (+=, -=), Expressões Booleans.
 * 
 * CENÁRIO:
 * Uma loja online precisa calcular o valor final do carrinho de um cliente aplicando
 * as seguintes regras de negócio:
 * 1. FRETE GRÁTIS: Concedido se o valor da compra for >= R$ 250,00 OU se o cliente for Cliente VIP.
 * 2. DESCONTO PROMOCIONAL: 15% de desconto se o pagamento for via "pix" E o cupom for "QUERO15".
 * 
 * EXECUÇÃO: node problema3_ecommerce.js
 */

// ENTRADAS (Carrinho do Cliente)
const cliente = "Lucas Mendes";
const valorCarrinho = 220.0;
const eClienteVip = false;
const formaPagamento = "pix"; // "pix", "cartao", "boleto"
const cupomAplicado = "QUERO15";
const valorFretePadrao = 25.0;

// REGRAS DE NEGÓCIO COM OPERADORES LÓGICOS

// Regra 1: Frete Grátis (Operador || OR)
const temFreteGratis = (valorCarrinho >= 250.0) || (eClienteVip === true);
const custoFreteFinal = temFreteGratis ? 0.0 : valorFretePadrao;

// Regra 2: Desconto Pix + Cupom (Operador && AND)
const temDescontoEspecial = (formaPagamento === "pix") && (cupomAplicado === "QUERO15");
const percentualDesconto = temDescontoEspecial ? 0.15 : 0.0;
const valorDesconto = valorCarrinho * percentualDesconto;

// Processamento do Total Final
const valorFinalComDesconto = valorCarrinho - valorDesconto;
const valorTotalGeral = valorFinalComDesconto + custoFreteFinal;

// SAÍDA FORMATADA NO TERMINAL
console.log("==================================================");
console.log(` 🛒 CHECKOUT E-COMMERCE | Cliente: ${cliente}`);
console.log("==================================================");
console.log(` Valor dos Produtos:    R$ ${valorCarrinho.toFixed(2)}`);
console.log(` Cliente VIP:           ${eClienteVip ? "SIM" : "NÃO"}`);
console.log(` Forma de Pagamento:    ${formaPagamento.toUpperCase()}`);
console.log(` Cupom Utilizado:       ${cupomAplicado}`);
console.log("--------------------------------------------------");
console.log(` 🚚 Frete Grátis?       ${temFreteGratis ? "✅ SIM (R$ 0.00)" : `❌ NÃO (+ R$ ${valorFretePadrao.toFixed(2)})`}`);
console.log(` 🏷️ Desconto Aplicado:  ${temDescontoEspecial ? `✅ SIM (- R$ ${valorDesconto.toFixed(2)} / 15%)` : "❌ NÃO (R$ 0.00)"}`);
console.log("--------------------------------------------------");
console.log(` 💰 VALOR TOTAL A PAGAR: R$ ${valorTotalGeral.toFixed(2)}`);
console.log("==================================================");
