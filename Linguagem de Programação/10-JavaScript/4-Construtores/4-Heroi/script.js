function Heroi(nome) {
  this.nome = nome;
  this.vida = 100;

  this.mostrarStatus = function () {
    console.log(this.nome + " está com " + this.vida + " de vida.");
  };

  this.levarDano = function (dano) {
    this.vida = this.vida - dano;

    if (this.vida <= 0) {
      this.vida = 0;
      console.log(this.nome + " foi derrotado!");
    }

    this.mostrarStatus();
  };
}

const link = new Heroi("Link");
const zelda = new Heroi("Zelda");

link.levarDano(30);
zelda.levarDano(50);
link.levarDano(80);
zelda.mostrarStatus();