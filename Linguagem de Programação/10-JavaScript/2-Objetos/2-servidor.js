dispararAlerta = function(mensagem) {

    console.log("🚨 [ALERTA CRÍTICO]: " + mensagem)
}

const servidorCentral = {
    ip: "192.168.0.100",
    status: "online",
    temperatura: 85,

    verficarSistema() {
        if (this.temperatura > 80) {
            dispararAlerta("Temperatura acima de 80 ºC")
            this.status = "offline"
        } else {
            console.log("Temperatura estável")
        }
    },
    imprimirRelatorio(){
        console.log(this.ip)
        console.log(this.status)
    }
}
// servidorCentral.verficarSistema()
// servidorCentral.imprimirRelatorio()