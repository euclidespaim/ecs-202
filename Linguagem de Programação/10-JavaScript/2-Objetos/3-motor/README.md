# Exercício de Revisão: Simulador de Estresse de Motor

**Objetivo:** Revisar o uso de **Objetos** (para guardar dados), laço de repetição **`for`** (para simular a passagem do tempo) e **`if/else`** (para tomada de decisão).

## 📖 O Cenário

Você foi contratado como desenvolvedor. A sua primeira tarefa é criar um script que simule o teste de estresse de um novo motor. O teste dura exatamente **5 horas**. O sistema deve monitorar **se** a temperatura ultrapassou o limite de segurança para evitar que o equipamento funda.

## 🛠️ O que você deve fazer (Passo a Passo)

1. **Criar o Objeto:** Faça a variável `motor` com as propriedades `modelo` ("Yamaha V6"), `tempAtual` (50) e `tempMaxima` (85). Imprima a mensagem de início mostrando o **modelo** do motor e o **limite** de segurança.
2. **Montar o Laço (`for`):** Configure a repetição para contar de 1 até 5.
3. **Aumentar a Temperatura:** No começo de cada volta do laço, some 10 na propriedade `tempAtual`.
4. **Fazer o Teste (`if/else`):**
   - **SE a `tempAtual`** atingir ou passar de 85 (a temperatura máxima): Imprima o alerta crítico e use o `break` para parar o teste.
   - **SENÃO:** Imprima a mensagem de que o funcionamento está normal.
