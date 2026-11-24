class Termometro {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(valor) {
    if (valor < -50 || valor > 60) {
      console.log("Temperatura inválida: " + valor + ". Use um valor entre -50 e 60.");
    } else {
      this.#celsius = valor;
      console.log("Temperatura ajustada para " + valor + " °C.");
    }
  }

  get fahrenheit() {
    return this.#celsius * 9 / 5 + 32;
  }
}

const t = new Termometro(20);

console.log(t.celsius);
console.log(t.fahrenheit);
t.celsius = 35;
console.log(t.fahrenheit);
t.celsius = 100;
console.log(t.celsius);