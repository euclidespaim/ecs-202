const pessoa = {
    nome: "Ana",
    dataNasc : 2010,
    anoAtual : 2026,

    idade(){
        return this.anoAtual - this.dataNasc;
    }
};

console.log(pessoa.idade())
