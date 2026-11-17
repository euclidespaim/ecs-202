# Exercício: O Herói e o Dano

**Conteúdo:** Construtores em JavaScript — Turma 202

## Objetivo

Fazer um método chamar outro método do mesmo objeto com `this`, e travar um valor para ele não passar do limite.

## O que fazer

1. Crie a função construtora `Heroi(nome)`. Guarde o nome com `this` e comece a vida cheia: `this.vida = 100`.
2. Crie o método `mostrarStatus()`, que imprime uma mensagem como `Link está com 70 de vida.`
3. Crie o método `levarDano(dano)`, que:
   - tira o dano da vida;
   - se a vida ficar em 0 ou menos, trave em 0 (`this.vida = 0`) e imprima `Link foi derrotado!`;
   - no fim, chame `this.mostrarStatus()` para mostrar como o herói ficou.
4. Crie dois heróis: `link` e `zelda`.
5. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
link.levarDano(30);    // ?
zelda.levarDano(50);   // ?
link.levarDano(80);    // ?
zelda.mostrarStatus(); // ?
```

## Pergunta

Dentro de `levarDano`, por que a chamada precisa ser `this.mostrarStatus()` e não só `mostrarStatus()`?
