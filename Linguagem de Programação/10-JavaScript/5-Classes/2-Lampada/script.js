class Lampada {
    constructor(comodo){
        this.comodo = comodo;
        this.ligada = false;
    }

    ligar(){
        if(this.ligada){
            console.log("A luz da " + this.comodo + " já está ligada.");
        } else {
            this.ligada = true;
            console.log("A luz da " + this.comodo + " ligada!");
        }
    }

    desligar(){
        if(!this.ligada){
            console.log("A luz da " + this.comodo + " já está desligada.");
        }else{
            this.ligada = false;
            console.log("A luz da " + this.comodo + " desligada.");
        }
    }
    alternar(){
        if(this.ligada){
            this.desligar()
        }else{
            this.ligar()
        }
    }
}

const sala = new Lampada("sala");
const cozinha = new Lampada("cozinha");

sala.ligar();
sala.ligar();
cozinha.alternar();
cozinha.alternar();
cozinha.desligar();
console.log(sala.ligada, cozinha.ligada);