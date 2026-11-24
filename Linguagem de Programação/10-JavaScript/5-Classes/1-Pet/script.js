class Pet {
    constructor(nome, especie, idade){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    apresentar(){
        return "Oi, eu sou" + this.nome + "!" + 
        "Espécie: " + this.especie + "," + 
        "idade:" + this.idade + "."
    }
}

const rex = new Pet("Rex", "cachorro", 3);
const mimi = new Pet("Mimi", "gato", 9);
const nemo = new Pet("Nemo", "peixe", 1);

console.log(rex.apresentar());       
console.log(mimi.apresentar());      
console.log(typeof Pet);             

// const bob = Pet("Bob", "cachorro", 2);
