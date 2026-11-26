# Exercício: O Cartão do Ônibus

**Conteúdo:** Classes em JavaScript, com campo privado — Turma 202

## Objetivo

Usar um campo privado de verdade (`#`) e ver a diferença entre uma propriedade que qualquer um altera de fora e uma que só os métodos da classe conseguem mudar.

## O que fazer

1. Crie a classe `CartaoTransporte`. Ela começa com o campo privado `#saldo = 0;`, escrito **antes** do `constructor`.
2. O `constructor(dono, tarifa)` guarda `this.dono` e `this.tarifa`. Repare que essas duas, sem `#`, são públicas.
3. Crie o `get saldo()`, que apenas retorna `this.#saldo`. A classe **não tem** `set saldo` — de propósito.
4. Crie o `get extrato()`, que retorna o nome do dono e o saldo com duas casas, assim: `Ana: R$ 4.50`.
   - Dica: `this.#saldo.toFixed(2)` devolve o número com duas casas.
5. Crie o método `recarregar(valor)`:
   - se `valor` for menor ou igual a zero, imprima `Recarga inválida: -5. Informe um valor maior que zero.` e não altere nada;
   - senão, some o valor ao `#saldo` e imprima `Recarga de R$ 10.00. Ana: R$ 10.00`
   - Dica: o getter é usado **sem** parênteses — `this.extrato`, não `this.extrato()`.
6. Crie o método `passar()`:
   - se o `#saldo` for menor que `this.tarifa`, imprima `Saldo insuficiente para Ana. Faltam R$ 5.50.` (a diferença entre a tarifa e o saldo);
   - senão, desconte a tarifa do `#saldo` e imprima `Catraca liberada. Ana: R$ 4.50`
7. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
const ana = new CartaoTransporte("Ana", 5.5);

console.log(ana.saldo);      // ?
ana.passar();                // ?
ana.recarregar(10);          // ?
ana.passar();                // ?
ana.recarregar(-5);          // ?
ana.saldo = 1000;            // ?
console.log(ana.saldo);      // ?
ana.tarifa = 0.01;           // ?
ana.passar();                // ?
console.log(ana.extrato);    // ?

// Deixe esta última linha comentada por enquanto:
// console.log(ana.#saldo);
```

## Pergunta

As linhas `ana.saldo = 1000` e `ana.tarifa = 0.01` parecem iguais, mas só uma funcionou. Qual, e por quê? Depois tire o comentário da última linha: por que o arquivo **inteiro** para de rodar, e não só aquela linha?
