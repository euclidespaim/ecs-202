class CartaoTransporte {
  #saldo = 0;

  constructor(dono, tarifa) {
    this.dono = dono;
    this.tarifa = tarifa;
  }

  get saldo() {
    return this.#saldo;
  }

  get extrato() {
    return this.dono + ": R$ " + this.#saldo.toFixed(2);
  }

  recarregar(valor) {
    if (valor <= 0) {
      console.log("Recarga inválida: " + valor + ". Informe um valor maior que zero.");
    } else {
      this.#saldo = this.#saldo + valor;
      console.log("Recarga de R$ " + valor.toFixed(2) + ". " + this.extrato);
    }
  }

  passar() {
    if (this.#saldo < this.tarifa) {
      console.log("Saldo insuficiente para " + this.dono + ". Faltam R$ " + (this.tarifa - this.#saldo).toFixed(2) + ".");
    } else {
      this.#saldo = this.#saldo - this.tarifa;
      console.log("Catraca liberada. " + this.extrato);
    }
  }
}

const ana = new CartaoTransporte("Ana", 5.5);

console.log(ana.saldo);
ana.passar();
ana.recarregar(10);
ana.passar();
ana.recarregar(-5);
ana.saldo = 1000;
console.log(ana.saldo);
ana.tarifa = 0.01;
ana.passar();
console.log(ana.extrato);

// console.log(ana.#saldo);
