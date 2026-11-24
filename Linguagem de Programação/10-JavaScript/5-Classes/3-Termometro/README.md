# Exercício: O Termômetro

**Conteúdo:** Classes em JavaScript, com getters e setters — Turma 202

## Objetivo

Usar getters e setters dentro de uma classe, juntando o que vimos em objetos com o que vimos em classes.

## O que fazer

1. Crie a classe `Termometro`. O `constructor(celsius)` guarda o valor em `this._celsius`.
2. Crie o `get celsius()`, que apenas retorna `this._celsius`.
3. Crie o `set celsius(valor)` com estas regras:
   - Se `valor` for **menor que -50** ou **maior que 60**, imprima `Temperatura inválida: X. Use um valor entre -50 e 60.` e não altere nada.
   - Caso contrário, grave o valor em `this._celsius` e imprima `Temperatura ajustada para X °C.`
4. Crie o `get fahrenheit()`, que calcula e retorna a temperatura em Fahrenheit. A fórmula é: `celsius * 9 / 5 + 32`.
   - Repare: o objeto não guarda nenhum `_fahrenheit`. O valor é calculado na hora, a partir de `_celsius`.
5. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
const t = new Termometro(20);

console.log(t.celsius);      // ?
console.log(t.fahrenheit);   // ?
t.celsius = 35;              // ?
console.log(t.fahrenheit);   // ?
t.celsius = 100;             // ?
console.log(t.celsius);      // ?
```

## Pergunta

Rode `t._celsius = 999;` e depois `console.log(t.celsius)`. O setter conseguiu barrar o valor? O que isso mostra sobre o `_` no começo do nome? (Nos slides, vimos o `#` para resolver isso.)
