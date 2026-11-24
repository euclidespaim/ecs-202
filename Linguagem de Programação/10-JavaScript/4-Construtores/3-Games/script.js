function Jogador(nome) {
    this.nome = nome;
    this.pontos = 0;

    this.marcar = function(qtd) {
        this.pontos = this.pontos + qtd;
        console.log(this.nome, "marcou ", qtd, " pontos. Total: ", this.pontos);
    };
}

const ana = new Jogador("Ana")
const beto = new Jogador("Beto")
const andre = new Jogador("André")

ana.marcar(3)
andre.marcar(5)

console.table(ana)
console.table(beto)
console.table(andre)