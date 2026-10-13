# O Controle de Carga do Navio (Validação e Múltiplos Métodos)

**Objetivo:** Aprender a proteger os dados do objeto. O aluno criará métodos que verificam regras matemáticas **antes** de alterar as propriedades com o `this`, evitando que o sistema entre em um estado inválido (como ter peso negativo ou ultrapassar o limite).

## O que você deve fazer

1. Crie um arquivo JS ou use o Console.
2. Crie um objeto chamado `navio`.
3. Adicione duas propriedades: `capacidadeMaxima` (iniciando em 500) e `cargaAtual` (iniciando em 0).
4. Crie o primeiro método chamado `embarcar(peso)`.
5. Dentro de `embarcar()`, use um `if/else` para validar a matemática **antes** de somar:
   - Se `this.cargaAtual + peso` for maior que `this.capacidadeMaxima`, **não altere a carga** e retorne: `"OPERAÇÃO NEGADA: O navio não suporta esse peso. Limite excedido!"`.
   - Caso contrário (se couber), some o peso à `this.cargaAtual` e retorne: `"SUCESSO: Carga embarcada. Total atual: X toneladas."`.
6. Crie o segundo método chamado `desembarcar(peso)`.
7. Dentro de `desembarcar()`, faça a validação inversa:
   - Se o peso que está tentando tirar for maior que a `this.cargaAtual` (ou seja, resultaria em carga negativa), retorne: `"ERRO: Você está tentando desembarcar mais carga do que o navio possui!"`.
   - Caso contrário, subtraia o peso da `this.cargaAtual` e retorne: `"SUCESSO: Carga removida. Total atual: X toneladas."`.
8. Fora do objeto, simule a rotina do porto usando `console.log`:

   ```js
   console.log(navio.embarcar(300));
   console.log(navio.embarcar(300));
   console.log(navio.desembarcar(400));
   console.log(navio.desembarcar(100));
   ```
