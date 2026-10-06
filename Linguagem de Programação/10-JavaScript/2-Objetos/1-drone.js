const drone = {
    modelo: "RX5500",
    bateria: 110,
    cameraLigada: false,

    ativarCamera() {
        this.cameraLigada = true;
        console.log("Câmera do drone " + this.modelo + " " + this.cameraLigada + "!")
    }
}

drone.ativarCamera()