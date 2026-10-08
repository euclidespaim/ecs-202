const navio = {
    capacidadeMaxima: 500,
    cargaAtual: 0,

    embarcar(peso){
        if (this.cargaAtual + peso > this.capacidadeMaxima) {
            return "OPERAÇÃO NEGADA: O navio não suporta esse peso. Limite excedido!"
        } else {
            this.cargaAtual += peso
            return "SUCESSO: Carga embarcada. Total atual: " + this.cargaAtual + " toneladas."
        }
    },

    desembarcar(peso){
        if (peso > this.cargaAtual){
            return "ERRO: Você está tentando desembarcar mais carga do que o navio possui!"
        } else {
            this.cargaAtual -= peso
            return "SUCESSO: Carga removida. Total atual:" + this.cargaAtual + " toneladas."
        }
    }
}

console.log(navio.embarcar(300)); 
console.log(navio.embarcar(300));   
console.log(navio.desembarcar(400));
console.log(navio.desembarcar(100));