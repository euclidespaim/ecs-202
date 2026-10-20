# Avaliação 3 - JavaScript

**Objetivo:** Nesta avaliação, você deverá aplicar os conceitos de JavaScript para resolver uma questão lógica e manipular os elementos de uma página web. Você receberá um arquivo HTML/CSS já estruturado e deverá criar o arquivo `script.js` para que a página reaja às instruções conforme as orientações a seguir.

## (5,0) Questão 1 - A Rota de Entregas

Crie um script que simule um caminhão fazendo entregas na região do Vale do Itajaí. A cada parada, uma quantidade de caixas é descarregada. O sistema deve monitorar a carga e mandar o motorista voltar ao Centro de Distribuição (CD) se o baú ficar muito vazio, para não gastar combustível à toa.

### O que você deve fazer

1. **O Objeto:** Crie um objeto chamado `caminhao` com as propriedades: `motorista` ("Roberto"), `cargaRestante` (100) e `limiteRetorno` (20). Mostre uma mensagem inicial com o nome do motorista.
2. **O Laço:** Crie um laço `for` que conte de 1 até 4 para simular as 4 paradas programadas da rota.
3. **A Matemática Dinâmica:** O número de caixas entregues é maior a cada parada. Calcule as caixas descarregadas multiplicando o contador do laço por 10 (Parada 1 = 10 caixas, Parada 2 = 20 caixas, etc.). Depois, subtraia esse valor da `cargaRestante` do caminhão.
4. **A Condicional (`if/else`):**
   - Se a `cargaRestante` for menor ou igual ao `limiteRetorno` (20): Imprima um alerta avisando para retornar ao CD e use o comando `break` para encerrar a rota.
   - Caso contrário, imprima o número da parada concluída e quantas caixas ainda restam no baú.

## (5,0) Questão 2 - Painel de Arrefecimento

**Objetivo:** Criar um sistema de controle térmico separando rigorosamente a regra de negócio (Objeto) da manipulação visual (Eventos do DOM).

**Regra de Ouro para a Prova:** É expressamente **PROIBIDO** usar qualquer comando de manipulação de tela (como `document.getElementById`, `style` ou `textContent`) dentro do seu objeto. O objeto deve apenas calcular os dados e retornar a resposta.

### O que você deve fazer

1. O HTML possui um mostrador de temperatura e dois botões: "Simular Carga (+15°C)" e "Ativar Ventoinhas (-15°C)".
2. **Crie o Objeto `sensorTermico`:**
   - Adicione a propriedade `temperatura` iniciando em 40.
   - Adicione a propriedade `limiteCritico` com o valor 70.
   - Crie um método chamado `alterarTemperatura(valor)`. Esse método deve somar o valor recebido à temperatura atual (Dica: para diminuir, basta passar um valor negativo no evento).
   - O método deve verificar: se a nova temperatura for maior ou igual ao `limiteCritico`, ele deve retornar a palavra `"CRÍTICO"`. Caso contrário, deve retornar `"ESTÁVEL"`.
3. **Crie a Interface (Fora do Objeto):**
   - Selecione os dois botões e os elementos de texto da tela.
   - No evento do botão de Carga, chame `sensorTermico.alterarTemperatura(15)`.
   - No evento do botão de Ventoinhas, chame `sensorTermico.alterarTemperatura(-15)`.
   - Guarde a resposta do método em uma variável. Atualize o número da temperatura na tela e mude a cor do painel: se a resposta for `"CRÍTICO"`, deixe o texto vermelho. Se for `"ESTÁVEL"`, deixe verde.
