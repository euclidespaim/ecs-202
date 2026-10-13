# A Fechadura Eletrônica (Trabalhando com Booleanos)

**Objetivo:** Usar uma propriedade booleana dentro de um objeto para alternar entre dois visuais diferentes na tela (Aberto/Fechado). Mostrar como o Objeto pode funcionar como um "interruptor".

## O que você deve fazer

1. A interface possui um ícone de cadeado e um botão "Acionar Trava".
2. No seu JavaScript, crie um objeto chamado `porta`.
3. Adicione a propriedade `trancada` iniciando com o valor `true` (verdadeiro).
4. Crie um método chamado `alternarTrava`.
5. Dentro do método, use um `if/else` olhando para o próprio objeto (`if (this.trancada === true)`):
   - Se estiver trancada: mude `this.trancada` para `false`, mude o texto do cadeado da tela para `🔓` e a cor de fundo do painel (`style.backgroundColor`) para verde.
   - Senão (se estiver aberta): mude `this.trancada` para `true`, mude o texto para `🔒` e a cor de fundo do painel para vermelho.
6. Fora do objeto, adicione o evento de clique no botão para disparar `porta.alternarTrava()`.
