# Exercício: O Placar na Tela

**Conteúdo:** Construtores em JavaScript, agora com DOM — Turma 202

## Objetivo

Ver na tela o que o exercício anterior mostrou no console: três objetos criados pela mesma função construtora, cada um com a sua própria pontuação.

## O que fazer

O `index.html` e o `style.css` já estão prontos. Você escreve só o JavaScript, no arquivo `script.js`.

Os ids da tela são `nome-ana`, `pontos-ana` e `botao-ana`, e o mesmo padrão para `beto` e `carla`.

1. Crie a função construtora `Jogador(nome, id)`. Guarde o nome com `this`, comece `this.pontos = 0` e guarde também o `id`, que diz qual card da tela é desse jogador.
2. Crie o método `atualizarTela()`, que escreve o nome e os pontos no card do jogador.
   - Monte o id do elemento juntando o pedaço fixo com o do objeto: `"pontos-" + this.id`.
3. Crie o método `marcar()`, que soma 1 ponto e, no fim, chama `this.atualizarTela()`.
4. Crie os três jogadores com `new`: `ana`, `beto` e `carla`. Chame `atualizarTela()` de cada um, para os nomes aparecerem na tela.
5. Ligue cada botão ao seu jogador. **Antes de clicar**, anote o que você espera ver depois de 3 cliques no botão da Ana e 1 no do Beto.

```javascript
document.getElementById("botao-ana").addEventListener("click", function () {
  ana.marcar();
});
```

## Pergunta

Os três cards vieram da mesma função `Jogador`. O que, dentro de cada objeto, faz o clique do botão da Ana mexer só no card dela?
