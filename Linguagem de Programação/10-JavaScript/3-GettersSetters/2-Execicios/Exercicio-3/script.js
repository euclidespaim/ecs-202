const celular = {
    _volume: 50,

    get volume() {
        return this._volume;
    },

    set volume(novo) {
        if (typeof novo !== "number" || Number.isNaN(novo)) {
            console.log("ERRO: o volume precisa ser um número.");
            return;
        }

        if (novo < 0) {
            this._volume = 0;
            console.log("🔇 Volume no mínimo (0).");
        } else if (novo > 100) {
            this._volume = 100;
            console.log("🔊 Volume no máximo (100).");
        } else {
            this._volume = novo;
            console.log(`Volume: ${this._volume}`);
        }
    }
};

celular.volume += 20;    
celular.volume += 50;    
celular.volume -= 30;    
celular.volume = -10;    
celular.volume = "alto"; 
console.log("Volume final:", celular.volume);
