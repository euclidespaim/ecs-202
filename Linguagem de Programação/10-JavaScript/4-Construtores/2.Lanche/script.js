function Lanche(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  this.descricao = function () {
    const precoFormatado = this.preco.toFixed(2).replace(".", ",");
    return `${this.nome} - R$ ${precoFormatado}`;
  };
}

const cardapio = [
  new Lanche("X-Burger", 18.5),
  new Lanche("X-Salada", 20),
  new Lanche("Misto Quente", 9.9),
];

for (const lanche of cardapio) {
  console.log(lanche.descricao());
}
console.log(cardapio[1].preco);
console.log(cardapio.length);