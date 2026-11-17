# Exercício: Placar de Jogadores

**Conteúdo:** Construtores em JavaScript — Turma 202

## Objetivo

Perceber que cada objeto criado com `new` guarda os seus próprios valores, mesmo vindo da mesma função construtora.

## O que fazer

1. Crie a função construtora `Jogador(nome)`. Guarde o nome com `this` e comece os pontos em zero: `this.pontos = 0`.
   - Os pontos não vêm por parâmetro: todo jogador começa zerado.
2. Crie o método `marcar(qtd)`, que:
   - soma `qtd` aos pontos do jogador;
   - imprime uma mensagem como `Ana marcou 3 pontos. Total: 3`.
3. Crie dois jogadores: `ana` e `beto`.
4. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
ana.marcar(3);             // ?
beto.marcar(2);            // ?
ana.marcar(5);             // ?
console.log(ana.pontos);   // ?
console.log(beto.pontos);  // ?
```

## Pergunta

Os dois jogadores vieram da mesma função `Jogador`. Por que os pontos da Ana não se misturaram com os do Beto?
