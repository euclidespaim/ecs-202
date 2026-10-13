# O Gerenciador de Bateria (Barra de Progresso)

**Objetivo:** Usar métodos de um objeto para diminuir ou restaurar um valor, refletindo essa mudança diretamente no tamanho de uma barra no CSS.

## O que você deve fazer

1. A interface possui uma "Barra de Energia" verde e dois botões: "Escanear (-20%)" e "Conectar na Tomada".
2. No seu JavaScript, crie um objeto chamado `sistema`.
3. Adicione a propriedade `energia` iniciando com o valor `100`.
4. Crie um método chamado `consumir`. Dentro dele:
   - Diminua a energia em 20 (`this.energia = this.energia - 20`).
   - Selecione a barra de energia na tela e mude a largura dela (`style.width`) para o valor da energia concatenado com o símbolo de porcentagem (`this.energia + "%"`).
5. Crie um segundo método chamado `recarregar`. Ele deve devolver o valor de `this.energia` para `100` e atualizar a largura da barra para `"100%"`.
6. Fora do objeto, conecte o evento de clique do botão "Escanear (-20%)" ao método `sistema.consumir()` e o botão "Conectar na Tomada" ao método `sistema.recarregar()`.
