# O Sistema de Firewall (Revisão de Lógica e Objetos)

**Objetivo:** Trabalhar apenas com regras de negócio na memória. O aluno deve manipular propriedades usando `this`, criar lógicas condicionais e `return`, testando tudo no console sem mexer na tela.

## O que você deve fazer

1. Crie um arquivo JS vazio (ou use a aba Console).
2. Crie um objeto chamado `firewall`.
3. Adicione duas propriedades: `nivelAmeaca` (iniciando em `0`) e `status` (iniciando em `"Seguro"`).
4. Crie um método chamado `analisarTrafego(pacotesMaliciosos)`. Esse método recebe um número.
5. Dentro do método, some o número recebido ao `this.nivelAmeaca`.
6. Use um `if/else` para avaliar o novo nível de ameaça:
   - Se a ameaça chegar a `100` ou mais, mude o `this.status` para `"Bloqueio Total"` e **retorne** a string `"ALERTA VERMELHO: Conexões cortadas!"`.
   - Se for menor que 100, apenas **retorne** `"Rede estável. Ameaça em X%"` (substitua o X pelo nível atual).
7. Fora do objeto, simule ataques usando o `console.log`:

   ```js
   console.log(firewall.analisarTrafego(40));
   console.log(firewall.analisarTrafego(70));
   ```
