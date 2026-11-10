const personagem = {
    nome: "Cyber Ninja",
    _hp: 100,

    get hp() {
        return this._hp;
    },

    set hp(novoHp) {
        if (typeof novoHp !== "number" || Number.isNaN(novoHp)) {
            console.log("ERRO: o HP precisa ser um número.");
            return;
        }

        if (novoHp <= 0) {
            this._hp = 0;
            console.log(`💀 ${this.nome}: GAME OVER`);
        } else if (novoHp >= 100) {
            this._hp = 100;
            console.log("💚 Vida máxima atingida (100).");
        } else {
            this._hp = novoHp;
            console.log(`HP atualizado para ${this._hp}`);
        }
    }
};

personagem.hp -= 30;     // HP atualizado para 70
personagem.hp += 50;     // 💚 Vida máxima atingida (100).   (70 + 50 = 120)
personagem.hp -= 55;     // HP atualizado para 45
personagem.hp -= 100;    // 💀 Cyber Ninja: GAME OVER        (45 - 100 = -55)
personagem.hp = "cura";  // ERRO: o HP precisa ser um número.
console.log("HP final:", personagem.hp); // HP final: 0