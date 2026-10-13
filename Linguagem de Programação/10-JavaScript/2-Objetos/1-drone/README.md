# O Drone de Varredura (Console)

**Objetivo:** Compreender a sintaxe de um Objeto (`{ chave: valor }`), acessar propriedades com a notação de ponto (`.`) e criar uma ação (método) usando a palavra mágica `this`.

## O que você deve fazer

1. Crie uma variável `const drone` e inicie um objeto usando chaves `{ }`.
2. Adicione três **propriedades** a ele: `modelo` (texto), `bateria` (número iniciando em 100) e `cameraLigada` (booleano iniciando em false). Lembre-se de usar dois pontos (`:`) em vez de igual, e separar os itens com vírgula (`,`).
3. Adicione um **método** (uma função dentro do objeto) chamado `ativarCamera`.
4. Dentro desse método, mude o valor de `cameraLigada` para `true` e imprima no console: "Câmera do drone [modelo_aqui] ativada!". **Regra de Ouro:** Para o drone enxergar suas próprias propriedades, você deve usar a palavra `this` (ex: `this.bateria`).
5. Fora do objeto, chame o método usando `drone.ativarCamera()`.
