# O Perfil do Jogador (Subindo de Nível)

**Objetivo:** Usar um Objeto para guardar as informações de um personagem e criar um método simples que aumenta o nível e atualiza o número direto na tela.

## O que você deve fazer

1. A interface já tem um cartão de jogador com o nível atual (que começa no 1) e um botão "Ganhar XP".
2. No seu JavaScript, crie um objeto chamado `jogador`.
3. Adicione duas propriedades a ele: `nome` (escolha um nome legal) e `nivel` (iniciando em 1).
4. Adicione um **método** chamado `subirNivel`.
5. Dentro do método, faça duas coisas:
   - Aumente o nível do jogador em 1 (lembre-se de usar `this.nivel = this.nivel + 1`).
   - Selecione o elemento da tela onde o nível aparece e mude o `.textContent` dele para mostrar o novo valor de `this.nivel`.
6. Fora do objeto, selecione o botão "Ganhar XP" e adicione um evento de **`click`**.
7. Dentro do evento de clique, chame o método: `jogador.subirNivel()`.
8. Atualize o nome do avatar usando a id fornecida no HTML.
