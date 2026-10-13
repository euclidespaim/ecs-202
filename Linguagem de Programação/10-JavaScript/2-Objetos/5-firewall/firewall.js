const firewall = {
    nivelAmeaca: 0,
    status: "Seguro",

    analisarTrafego(pacotesMaliciosos){
        this.nivelAmeaca += pacotesMaliciosos;

        if (this.nivelAmeaca >= 100){
            this.status = "Bloqueio total!"
            return "ALERTA VERMELHO: Conexões cortadas!"
        
        } else {
            return "Rede estável. Ameaça em "+ this.nivelAmeaca + "%"
        }
    }
}

console.log(firewall.analisarTrafego(40)); 
console.log(firewall.analisarTrafego(70));