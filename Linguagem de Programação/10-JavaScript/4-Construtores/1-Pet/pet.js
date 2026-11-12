function Pet(nome, especie, idade){
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
} 


const rex = new Pet("Rex", "cachorro", 3);
const mimi = new Pet("Mimi", "gato", 5);
const nemo = new Pet("Nemo", "peixe", 1)

console.log(rex.nome);       
console.log(mimi.especie);   
console.log(nemo.idade + 1); 
console.table(rex);          