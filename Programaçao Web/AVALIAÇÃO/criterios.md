# Critérios de correção - Avaliação 3 (JavaScript)

Proposta de pontuação por item, seguindo os passos do enunciado. Cada questão vale 5,0.

## Questão 1 - A Rota de Entregas (5,0)

| Item | Pontos |
|---|---|
| Objeto `caminhao` com `motorista` ("Roberto"), `cargaRestante` (100) e `limiteRetorno` (20) | 1,0 |
| Mensagem inicial com o nome do motorista, lido do objeto | 0,5 |
| Laço `for` contando de 1 até 4 | 1,0 |
| Caixas = contador × 10, subtraídas de `cargaRestante` (alterando a propriedade do objeto) | 1,0 |
| `if` com `cargaRestante <= limiteRetorno`: alerta de retorno ao CD + `break` | 1,0 |
| `else`: imprime a parada concluída e as caixas restantes | 0,5 |

Saída esperada: paradas 1 a 3 com 90, 70 e 40 caixas; na parada 4 a carga chega a 0 e dispara o alerta.

## Questão 2 - Painel de Arrefecimento (5,0)

| Item | Pontos |
|---|---|
| Objeto `sensorTermico` com `temperatura` (40) e `limiteCritico` (70) | 0,5 |
| Método `alterarTemperatura(valor)` soma o valor à temperatura usando `this` | 0,75 |
| Retorna `"CRÍTICO"` quando `temperatura >= limiteCritico`, senão `"ESTÁVEL"` | 0,75 |
| Regra de Ouro: nenhum comando de tela (`document`, `style`, `textContent`) dentro do objeto | 1,0 |
| Seleciona os elementos e liga os dois botões chamando o método com `15` e `-15` | 1,0 |
| Guarda a resposta numa variável, atualiza a temperatura na tela e muda a cor (vermelho/verde) | 1,0 |

Comportamento esperado: 40 → 55 (ESTÁVEL, verde) → 70 (CRÍTICO, vermelho); voltando, 55 fica verde de novo.

## Observações

- Item feito de forma diferente, mas que produz o resultado pedido, conta inteiro.
- Erro que impede o código de rodar (sintaxe, nome errado) desconta só no item em que aparece; os demais itens são avaliados pelo que está escrito.
