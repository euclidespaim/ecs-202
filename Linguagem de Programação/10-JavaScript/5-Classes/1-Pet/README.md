# Exercício: Reescrevendo o Pet

**Conteúdo:** Classes em JavaScript — Turma 202

## Objetivo

Ver que uma classe é outra forma de escrever a função construtora, com uma sintaxe mais organizada.

## O que fazer

1. Num arquivo novo, reescreva o Pet do exercício "A Fábrica de Pets" usando `class`. O que antes ficava no corpo da função agora vai dentro do `constructor(nome, especie, idade)`.
2. Adicione à classe o método `apresentar()`, que retorna um texto assim: `Oi, eu sou Rex! Espécie: cachorro, idade: 3.`
   - Dica: na classe, o método fica fora do `constructor` e é escrito sem a palavra `function`.
3. Crie os mesmos três pets (`rex`, `mimi` e `nemo`) com `new`.
4. Teste com o código abaixo e, **antes de rodar**, anote o que você acha que vai aparecer em cada linha:

```javascript
console.log(rex.apresentar());          // ?
console.log(mimi.apresentar());         // ?
console.log(typeof Pet);                // ?
const bob = Pet("Bob", "cachorro", 2);  // ?
```

## Pergunta

Na função construtora, esquecer o `new` dava `undefined` sem nenhum aviso. E na classe, o que aconteceu? Qual dos dois comportamentos ajuda mais a encontrar o erro?
