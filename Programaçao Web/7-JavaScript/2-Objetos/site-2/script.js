const jogador = {
    nome: "Turma 202",
    nivel: 1,

    subirNivel() {
        this.nivel++;
        nomeTela.textContent = this.nome;
        valorNivel.textContent = this.nivel;
    }
}

const valorNivel = document.getElementById('valor-nivel');
const btnXP = document.getElementById('btn-xp');
const nomeTela = document.getElementById('nome-tela');

btnXP.addEventListener('click', function(){
    jogador.subirNivel();
})