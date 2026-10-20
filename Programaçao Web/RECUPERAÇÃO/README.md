# Recuperação - JavaScript

**Objetivo:** Nesta recuperação, cada questão vale como avaliação de uma disciplina. Você receberá um arquivo HTML/CSS já estruturado e deverá escrever o código nos arquivos `questao01.js` e `questao02.js`, conforme as orientações a seguir.

| Questão | Disciplina | Arquivo | Valor |
|---|---|---|---|
| 1 - Radar de Velocidade | Programação Web/App | `questao01.js` (abra o `index.html` no navegador) | 10,0 |
| 2 - A Barragem na Enchente | Linguagem de Programação | `questao02.js` (rode com `node questao02.js`) | 10,0 |

## (10,0) Questão 1 - Radar de Velocidade · Programação Web/App

**Objetivo:** Criar um radar de velocidade separando rigorosamente a regra de negócio (Objeto) da manipulação visual (Eventos do DOM).

**Regra de Ouro para a Prova:** É expressamente **PROIBIDO** usar qualquer comando de manipulação de tela (como `document.getElementById`, `style` ou `textContent`) dentro do seu objeto. O objeto deve apenas calcular os dados e retornar a resposta.

### O que você deve fazer

1. O HTML possui um mostrador de velocidade, um texto de status e dois botões: "Acelerar (+10 km/h)" e "Frear (-10 km/h)".
2. **Crie o Objeto `radar`:**
   - Adicione a propriedade `velocidade` iniciando em 40.
   - Adicione a propriedade `limite` com o valor 60.
   - Crie um método chamado `alterarVelocidade(valor)`. Esse método deve somar o valor recebido à velocidade atual (Dica: para frear, basta passar um valor negativo no evento).
   - Se a velocidade ficar **negativa**, o método deve colocá-la de volta em `0` (o carro está parado; não existe velocidade abaixo de zero).
   - O método deve verificar: se a nova velocidade for **maior que** o `limite`, ele deve retornar `"ACIMA DO LIMITE"`. Caso contrário, deve retornar `"DENTRO DO LIMITE"`.
3. **Crie a Interface (Fora do Objeto):**
   - Selecione os dois botões e os elementos de texto da tela.
   - No evento do botão Acelerar, chame `radar.alterarVelocidade(10)`.
   - No evento do botão Frear, chame `radar.alterarVelocidade(-10)`.
   - Guarde a resposta do método em uma variável. Atualize a velocidade na tela, escreva a resposta no texto de status e mude a cor dos dois: se a resposta for `"ACIMA DO LIMITE"`, deixe vermelho. Se for `"DENTRO DO LIMITE"`, deixe verde.

Para testar, abra o `index.html` no navegador (ou com o Live Server).

## (10,0) Questão 2 - A Barragem na Enchente · Linguagem de Programação

Crie um script que simule o nível de uma barragem de contenção do Vale do Itajaí durante uma chuva forte. A cada hora de chuva, o nível do reservatório sobe. O sistema deve monitorar o nível e acionar a Defesa Civil se a barragem chegar ao nível de alerta.

### O que você deve fazer

1. **O Objeto:** Crie um objeto chamado `barragem` com as propriedades: `nome` ("Barragem Oeste"), `nivelAtual` (40) e `nivelAlerta` (80). Mostre uma mensagem inicial com o nome da barragem e o nível atual.
2. **O Laço:** Crie um laço `for` que conte de 1 até 5 para simular 5 horas de chuva.
3. **A Matemática Dinâmica:** A chuva fica mais forte a cada hora. Calcule quanto o nível sobe multiplicando o contador do laço por 5 (Hora 1 = 5%, Hora 2 = 10%, etc.). Depois, **some** esse valor ao `nivelAtual` da barragem.
4. **A Condicional (`if/else`):**
   - Se o `nivelAtual` for **maior ou igual** ao `nivelAlerta` (80): Imprima um alerta avisando para acionar a Defesa Civil e use o comando `break` para encerrar o monitoramento.
   - Caso contrário, imprima a hora concluída e o nível atual da barragem.

Para testar, rode no terminal: `node questao02.js`
