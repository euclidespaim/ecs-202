# Exercício: A Transferência

**Conteúdo:** Construtores em JavaScript — Turma 202

## Objetivo

Fazer um método receber outro objeto como argumento e mexer nos dois ao mesmo tempo.

## O que fazer

1. Crie a função construtora `Conta(dono, saldo)` e guarde os dois valores com `this`.
2. Crie o método `mostrar()`, que imprime uma linha como `Ana tem R$ 70`.
3. Crie o método `transferir(destino, valor)`. Atenção: o `destino` é outra conta, não um número.
   - Se `valor` for maior que `this.saldo`, imprima que o saldo é insuficiente e não mexa em nada.
   - Senão, tire o valor de `this.saldo` e some o mesmo valor em `destino.saldo`.
   - No fim, chame `this.mostrar()` e depois `destino.mostrar()`, para ver como ficaram as duas contas.
4. Crie duas contas: `ana`, com 100, e `beto`, com 50.
5. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
ana.transferir(beto, 30);   // ?
beto.transferir(ana, 200);  // ?
```

## Pergunta

Dentro de `transferir`, quem é o `this` e quem é o `destino`? E o que mudaria se a primeira linha do teste fosse `beto.transferir(ana, 30)`?
