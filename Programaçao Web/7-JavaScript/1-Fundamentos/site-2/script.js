// Importando o módulo para podermos fazer perguntas (o equivalente ao input)
const prompt = require('prompt-sync')();

console.log("--- CADASTRO DE TRIPULANTE ---");

// Usamos o prompt() no lugar do input()
const nome = prompt("Qual é o seu nome de usuário? ");
const barco = prompt("Qual o nome da sua embarcação? ");

// A mágica da crase (`) e do cifrão com chaves (${})
console.log(`\nBem-vindo a bordo, comandante ${nome}!`);
console.log(`A embarcação ${barco} está pronta para navegar por Itajaí.`);
