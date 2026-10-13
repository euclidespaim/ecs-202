# Monitoramento de Servidor (Terminal)

**Objetivo:** Criar um objeto que gerencia seus próprios dados, mas que precisa invocar uma função externa para lidar com situações de emergência.

## O que você deve fazer

1. Crie um novo arquivo chamado `servidor.js`.
2. No topo do arquivo, **fora de qualquer objeto**, crie uma função nomeada chamada `dispararAlerta(mensagem)`. Essa função deve apenas receber uma mensagem e imprimi-la no console no seguinte formato: `"🚨 [ALERTA CRÍTICO]: " + mensagem`.
3. Logo abaixo, crie um objeto chamado `servidorCentral`.
4. Adicione três propriedades a ele: `ip` (texto, ex: "192.168.0.100"), `status` (texto, iniciando como "Online"), e `temperatura` (número, coloque `85` para forçar um erro inicial).
5. Adicione um **método** chamado `verificarSistema`. Dentro dele, faça um `if/else`:
   - Se a `this.temperatura` for maior que 80, o método deve invocar a sua função externa `dispararAlerta`, passando um aviso de superaquecimento. Em seguida, deve mudar o `this.status` do servidor para "Offline".
   - Se a temperatura estiver abaixo ou igual a 80, apenas imprima "✅ Temperatura estável."
6. Adicione um segundo **método** chamado `imprimirRelatorio`, que mostra no console o IP e o Status atual do servidor.
7. **No final do arquivo**, chame o método `servidorCentral.verificarSistema()` e depois `servidorCentral.imprimirRelatorio()`.
8. Abra o terminal e rode: `node servidor.js`.
