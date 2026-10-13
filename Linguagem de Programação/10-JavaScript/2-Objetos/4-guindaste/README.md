# O Guindaste Portuário

Crie um script que simule o descarregamento de um navio usando um guindaste. O sistema deve calcular o acúmulo de peso a cada contêiner içado e abortar a operação se a capacidade máxima for ultrapassada.

## O que você deve fazer

1. **O Objeto:** Crie um objeto chamado `guindaste` com as propriedades: `operador` ("Carlos"), `cargaAcumulada` (0) e `limiteSeguranca` (50). *Mostre uma mensagem inicial com o nome do operador.*
2. **O Laço:** Crie um laço `for` que conte de **1 até 4** para simular o içamento de 4 contêineres.
3. **A Matemática Dinâmica:** Calcule o peso do contêiner atual multiplicando o contador do laço por **15** (Volta 1 = 15t, Volta 2 = 30t, etc.). Depois, **some** esse valor à `cargaAcumulada` do guindaste.
4. **A Condicional (`if/else`):**
   - **SE** a `cargaAcumulada` for maior que o `limiteSeguranca` (50): Imprima um alerta de sobrecarga e use o comando `break` para parar.
   - **SENÃO:** Imprima o número do contêiner içado e a carga acumulada.
