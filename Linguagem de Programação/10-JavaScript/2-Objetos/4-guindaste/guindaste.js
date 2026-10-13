const guindaste = {
    operador: "Carlos",
    cargaAcumulada: 0,
    limiteSeguranca: 50
}

consolole.log("Operador: ", guindaste.operador)

for (let volta = 1; volta <= 4; volta++){
    
    let pesoContainer = volta * 15;

    guindaste.cargaAcumulada = guindaste.cargaAcumulada + pesoContainer;

    if (guindaste.cargaAcumulada > guindaste.limiteSeguranca){
        console.log("🚨 ALERTA: Sobrecarga detectada! ", guindaste.cargaAcumulada)
        break;
    } else {
        console.log("✅ Contêiner", volta, "içado. Carga atual:", guindaste.cargaAcumulada, "toneladas.")
    }

}