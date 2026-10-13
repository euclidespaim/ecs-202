const caminhao = {
    capacidadeTanque: 200,
    combustivelAtual: 50,

    abastecer(litros){
        if (this.combustivelAtual + litros > this.capacidadeTanque){
            return "ABASTECIMENTO NEGADO: O tanque vai transbordar! Cabem apenas " + (this.capacidadeTanque - this.combustivelAtual) + " litros."
        } else {
            this.combustivelAtual += litros;
            return "SUCESSO: Tanque abastecido. Combustível atual: " + this.combustivelAtual + " litros."
        }
    },

    viajar(km) {
        let litrosNecessarios = km * 2
        if (litrosNecessarios > this.combustivelAtual){
            return "VIAGEM CANCELADA: Combustível insuficiente para " + km + " km."
        } else {
            this.combustivelAtual -= litrosNecessarios
            return "SUCESSO: Viagem de " + km + " km concluída. Combustível restante: " + this.combustivelAtual + " litros."
        }
    }
} 

console.log(caminhao.viajar(10));
console.log(caminhao.viajar(20));
console.log(caminhao.abastecer(100));
console.log(caminhao.abastecer(100));
console.log(caminhao.viajar(20));