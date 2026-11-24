# Exercício: A Lâmpada Inteligente

**Conteúdo:** Classes em JavaScript — Turma 202

## Objetivo

Criar uma classe com métodos que mudam o estado do objeto (ligada ou desligada).

## O que fazer

1. Crie a classe `Lampada`. O `constructor(comodo)` guarda o cômodo e começa com a luz apagada: `this.ligada = false`.
2. Crie o método `ligar()`:
   - se a luz já estiver ligada, imprima `A luz da sala já está ligada.`;
   - senão, mude `ligada` para `true` e imprima `Luz da sala ligada.`
   - No lugar de "sala", use o cômodo da lâmpada (`this.comodo`).
3. Crie o método `desligar()`, com a lógica contrária: avisa se a luz já estiver desligada; senão, desliga e imprime `Luz da sala desligada.`
4. Crie o método `alternar()`: se a luz estiver ligada, chama `this.desligar()`; se estiver desligada, chama `this.ligar()`.
5. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
const sala = new Lampada("sala");
const cozinha = new Lampada("cozinha");

sala.ligar();          // ?
sala.ligar();          // ?
cozinha.alternar();    // ?
cozinha.alternar();    // ?
cozinha.desligar();    // ?
console.log(sala.ligada, cozinha.ligada);  // ?
```

## Pergunta

Dentro de `alternar()`, por que precisamos escrever `this.ligar()` e não apenas `ligar()`?
