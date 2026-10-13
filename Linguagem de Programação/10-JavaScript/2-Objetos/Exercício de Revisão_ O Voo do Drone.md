# Exercício de Revisão: O Voo do Drone

Crie um script que simule o gasto de bateria de um drone durante um voo de 5 quilômetros. A cada quilômetro, a bateria diminui, e o sistema deve abortar o voo se a carga chegar ao nível crítico.

## O que fazer

1. **O Drone (Objeto):** Crie um objeto chamado `drone` com as propriedades:
   - `modelo: "Mavic Pro"`
   - `bateriaAtual: 100`
   - `bateriaMinima: 30`
   - *Mostre uma mensagem inicial com o modelo e a bateria atual.*
2. **O Voo (Laço `for`):** Crie um laço que conte de **1 até 5** para simular os quilômetros percorridos.
3. **O Consumo (Matemática):** No início de cada volta do laço, **subtraia 20** da `bateriaAtual` do drone.
4. **A Segurança (Condicional `if/else`):**
   - **SE** a bateria chegar em 30 ou menos: Imprima um alerta de emergência e use o `break` para parar o voo.
   - **SENÃO:** Imprima que o quilômetro foi concluído e mostre a bateria restante.
