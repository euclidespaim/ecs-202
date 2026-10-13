# O Monitoramento do Servidor (Métodos e Funções)

**Objetivo:** Criar métodos que tomam decisões com base nas propriedades do próprio objeto (usando `this`) e aprender que um método pode chamar uma função que está fora do objeto.

## O que você deve fazer

1. Crie um arquivo JS ou use o Console.
2. Fora de qualquer objeto, crie uma função chamada `dispararAlerta(mensagem)`. Ela deve imprimir no console o texto `"🚨 [ALERTA CRÍTICO]: "` seguido da mensagem recebida.
3. Crie um objeto chamado `servidorCentral`.
4. Adicione três propriedades: `ip` (iniciando em `"192.168.0.100"`), `status` (iniciando em `"online"`) e `temperatura` (iniciando em 85).
5. Crie o primeiro método chamado `verificarSistema()`. Dentro dele, use um `if/else`:
   - Se `this.temperatura` for maior que 80, **chame a função** `dispararAlerta("Temperatura acima de 80 ºC")` e mude o `this.status` para `"offline"`.
   - Caso contrário, imprima `"Temperatura estável"`.
6. Crie o segundo método chamado `imprimirRelatorio()`, que imprime o `ip` e o `status` do servidor.
7. Fora do objeto, teste a rotina do servidor:

   ```js
   servidorCentral.imprimirRelatorio();
   servidorCentral.verificarSistema();
   servidorCentral.imprimirRelatorio();
   ```

   Compare o `status` antes e depois da verificação.
8. Mude a `temperatura` para 70 e rode de novo. Qual mensagem aparece agora?
