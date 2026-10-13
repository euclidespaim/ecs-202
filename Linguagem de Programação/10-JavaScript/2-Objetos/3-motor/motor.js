const motor = {
    modelo: "Yamaha V6", 
    tempAtual: 50,
    tempMaxima: 95
}

console.log("Motor modelo: ", motor.modelo, " | temperatura limite: ", motor.tempMaxima, ".")


for (let i = 1; i <= 5; i++){
    motor.tempAtual += 10;

    if (motor.tempAtual > motor.tempMaxima){
        console.log("Alerta crítico!")
        break
    } else {
        console.log("Funcionamento normal!")
    }
}