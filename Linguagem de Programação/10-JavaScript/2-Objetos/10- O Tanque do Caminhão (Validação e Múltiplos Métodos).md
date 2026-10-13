# 10- O Tanque do Caminhão (Validação e Múltiplos Métodos)

**Objetivo:** Praticar a proteção dos dados do objeto, usando métodos que verificam as regras **antes** de alterar as propriedades com o `this`. Desta vez, um dos métodos precisa fazer um cálculo antes de decidir se a operação pode acontecer.

## O que você deve fazer

1. Crie um arquivo JS ou use o Console.
2. Crie um objeto chamado `caminhao`.
3. Adicione duas propriedades: `capacidadeTanque` (iniciando em 200) e `combustivelAtual` (iniciando em 50).
4. Crie o primeiro método chamado `abastecer(litros)`.
5. Dentro de `abastecer()`, use um `if/else` para validar **antes** de somar:
   - Se `this.combustivelAtual + litros` for maior que `this.capacidadeTanque`, **não altere o combustível** e retorne: `"ABASTECIMENTO NEGADO: O tanque vai transbordar! Cabem apenas X litros."` (X é o espaço livre no tanque: a capacidade menos o combustível atual).
   - Caso contrário, some os litros ao `this.combustivelAtual` e retorne: `"SUCESSO: Tanque abastecido. Combustível atual: X litros."`
6. Crie o segundo método chamado `viajar(km)`.
7. Dentro de `viajar()`, **primeiro calcule** quanto combustível a viagem vai gastar. O caminhão consome **2 litros por quilômetro**, então crie a variável `litrosNecessarios = km * 2`. Depois valide:
   - Se `litrosNecessarios` for maior que `this.combustivelAtual`, **não altere o combustível** e retorne: `"VIAGEM CANCELADA: Combustível insuficiente para X km."`
   - Caso contrário, subtraia os `litrosNecessarios` do `this.combustivelAtual` e retorne: `"SUCESSO: Viagem de X km concluída. Combustível restante: Y litros."`
8. Fora do objeto, simule a rotina do caminhão usando `console.log`:

   ```js
   console.log(caminhao.viajar(10));
   console.log(caminhao.viajar(20));
   console.log(caminhao.abastecer(100));
   console.log(caminhao.abastecer(100));
   console.log(caminhao.viajar(20));
   ```
