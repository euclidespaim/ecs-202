const caminhao = {
    motorista: "Roberto",
    cargaRestante: 100,
    limiteRetorno: 20
}

console.log("Motorista: " + caminhao.motorista)

for (let parada = 1; parada <= 4; parada++) {
    let caixas = parada * 10;
    caminhao.cargaRestante -= caixas;

    if (caminhao.cargaRestante <= caminhao.limiteRetorno) {
        console.log("🚨 ALERTA: restam só " + caminhao.cargaRestante + " caixas. Retorne ao CD!")
        break;
    } else {
        console.log("✅ Parada " + parada + " concluída. Restam " + caminhao.cargaRestante + " caixas no baú.")
    }
}
