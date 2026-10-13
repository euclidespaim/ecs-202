# O Mercado Cyberpunk (Comércio e Recursos)

Esse exercício conecta a lógica do objeto com o conceito de "loja" e recursos (dinheiro). É um clássico de jogos de RPG e muito fácil de entender.

**Objetivo:** Usar métodos para subtrair valores de uma propriedade (dinheiro) e somar em outra (inventário), atualizando múltiplos elementos na tela de uma vez.

## O que você deve fazer

1. A tela mostra seu saldo de "Criptomoedas" e quantos "Chips de Memória" você possui. Há um botão para comprar um chip (Custa 50).
2. Crie o objeto `carteira` com as propriedades: `saldo` (iniciando em 200) e `chips` (iniciando em 0).
3. Crie o método `comprarChip`.
4. Dentro do método, verifique: `if (this.saldo >= 50)`.
5. Se tiver dinheiro suficiente: diminua 50 do saldo, aumente 1 no número de chips e atualize os dois textos na tela.
6. Se não tiver dinheiro: mostre um `alert()` dizendo "Saldo insuficiente!".
7. Conecte o clique do botão "Comprar" a este método.
