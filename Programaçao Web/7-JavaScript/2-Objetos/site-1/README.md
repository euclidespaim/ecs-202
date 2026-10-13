# O Cofre Digital (Conectando Objetos ao DOM)

**Objetivo:** Usar um Objeto para guardar as regras de segurança e interagir com botões na tela.

## O que você deve fazer

1. O HTML possui um `<input>` para digitar a senha e um botão "Desbloquear". Há também uma `div` de status.
2. No JS, crie um objeto chamado `cofre`. Ele deve ter a propriedade `senhaCorreta` (ex: "7788") e `tentativasErradas` (iniciando em 0).
3. Dentro do objeto `cofre`, crie um método chamado `testarAcesso(senhaDigitada)`.
4. Nesse método, use um `if/else`: se a senha digitada for igual a `this.senhaCorreta`, retorne a palavra "Aberto". Se for errada, aumente `this.tentativasErradas` em 1 e retorne "Erro".
5. Fora do objeto, adicione um evento de clique no botão da tela. Quando clicado, pegue o valor do input e passe para o método `cofre.testarAcesso()`. Mude o texto da tela dependendo da resposta.
