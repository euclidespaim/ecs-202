console.log("--- CONTROLE DO AR CONDICIONADO ---\n");

const arCondicionado = {
    // 1. A variável "privada" (O underline é um acordo de cavalheiros 
    // para não mexer direto)

    _temperatura: 24,

    // 2. O Getter: Como o mundo de fora LÊ o valor
    get temperatura() {
        return this._temperatura;
    },

    // 3. O Setter: Como o mundo de fora ALTERA o valor (com 
    // inteligência)

    set temperatura(novoValor) {
        if (novoValor < 16) {
            console.log("❌ ERRO: O ar não gela abaixo de 16°C!");
        } 
        else if (novoValor > 30) {
            console.log("❌ ERRO: O ar não aquece acima de 30°C!");
        } 
        else {
            this._temperatura = novoValor;
            console.log(`✅ Temperatura ajustada para ${this._temperatura}°C.`);
        }
    }
};

// Testando como se fosse uma variável comum (Usando o sinal de =)
arCondicionado.temperatura = 12; // Dispara o erro de mínimo
arCondicionado.temperatura = 35; // Dispara o erro de máximo
arCondicionado.temperatura = 22; // Sucesso! Altera o _temperatura