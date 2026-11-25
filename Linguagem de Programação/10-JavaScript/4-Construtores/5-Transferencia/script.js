function Conta(dono, saldo) {
    this.dono = dono;
    this.saldo = saldo;

    this.mostrar = function(){
        console.log(this.dono + " tem R$ " + this.saldo)
    }

    this.transferir = function(destino, valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente " + this.saldo + "!")
        } else {
            this.saldo -= valor;
            destino.saldo += valor;
            console.log(this.dono + " transferiu R$ " + valor + " para " + destino.dono)
        }

        this.mostrar()
        destino.mostrar()
    }
}

const ana = new Conta("Ana", 100);
const beto = new Conta("Beto", 50);

ana.transferir(beto, 30);   // 
beto.transferir(ana, 200);  // 
