# 🌡️ Exemplo Didático: Getters e Setters em JavaScript

Este material apresenta o conceito de **Getters (`get`)** e **Setters (`set`)** utilizando a metáfora de um **Ar Condicionado Inteligente**.

---

## 🎯 Por que usar Getters e Setters?

Até agora, alterávamos as propriedades de um objeto diretamente:
```javascript
objeto.propriedade = 100;
```

O problema dessa abordagem é que **não existe validação**. O usuário pode colocar um valor absurdo (como uma temperatura de -50°C ou 500°C) e o objeto aceitará sem questionar.

Os **Getters e Setters** funcionam como "porteiros" do objeto:
* **`get` (Getter):** Controla como o valor é **lido** de fora.
* **`set` (Setter):** Intercepta e **valida** a alteração antes de salvar o valor real.

---

## 🛠️ A Convenção do Underline (`_`)

Em JavaScript, quando usamos `get` e `set`, precisamos diferenciar o nome oficial do método da variável real que guarda o dado. 

Por convenção da comunidade, usamos um **underline (`_`)** no início do nome da propriedade interna:
* `_temperatura`: A propriedade "privada" (o valor real guardado na memória).
* `temperatura`: O nome público usado no `get` e no `set`.

---

## 💻 Código de Exemplo: Ar Condicionado Inteligente

Crie um arquivo chamado `ar_condicionado.js` e execute com o Node.js:

```javascript
console.log("--- CONTROLE DO AR CONDICIONADO ---\n");

const arCondicionado = {
    // 1. A variável interna (o underline indica que não deve ser alterada diretamente)
    _temperatura: 24,

    // 2. GETTER: Como o mundo externo LÊ o valor
    get temperatura() {
        return this._temperatura;
    },

    // 3. SETTER: Como o mundo externo ALTERA o valor (com validação)
    set temperatura(novoValor) {
        if (novoValor < 16) {
            console.log("❌ ERRO: O ar não gela abaixo de 16°C!");
        } 
        else if (novoValor > 30) {
            console.log("❌ ERRO: O ar não aquece acima de 30°C!");
        } 
        else {
            this._temperatura = novoValor;
            console.log(`✅ Temperatura ajustada com sucesso para ${this._temperatura}°C.`);
        }
    }
};

// --- TESTANDO O OBJETO ---

// Leitura usando o GETTER (sem parênteses!)
console.log(`Temperatura atual: ${arCondicionado.temperatura}°C\n`);

// Tentativa 1: Valor abaixo do mínimo (Dispara o erro do SETTER)
arCondicionado.temperatura = 12;

// Tentativa 2: Valor acima do máximo (Dispara o erro do SETTER)
arCondicionado.temperatura = 35;

// Tentativa 3: Valor válido (Atualiza a propriedade _temperatura)
arCondicionado.temperatura = 22;

// Leitura final para confirmar a alteração
console.log(`\nTemperatura final no painel: ${arCondicionado.temperatura}°C`);
```

---

## 🖥️ Saída Esperada no Terminal

```text
--- CONTROLE DO AR CONDICIONADO ---

Temperatura atual: 24°C

❌ ERRO: O ar não gela abaixo de 16°C!
❌ ERRO: O ar não aquece acima de 30°C!
✅ Temperatura ajustada com sucesso para 22°C.

Temperatura final no painel: 22°C
```

---

## 📌 Principais Pontos para Destacar na Aula

1. **Sem Parênteses:** Note que para ler ou alterar o valor **não usamos parênteses `()`**, mesmo o `get` e o `set` sendo declarados como funções. Usamos a sintaxe de atribuição normal (`=`):
   - ✅ `arCondicionado.temperatura = 22;`
   - ❌ `arCondicionado.temperatura(22);` *(Geraria um erro de sintaxe)*
2. **Proteção de Dados:** Se a validação do `set` falhar, a variável `_temperatura` mantém o seu valor original intacto.