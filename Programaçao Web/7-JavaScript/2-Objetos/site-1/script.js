const cofre = {
    senhaCorreta: "7788",
    tentativasErradas: 0,

    testarAcesso(senhaDigitada){
        if (senhaDigitada === this.senhaCorreta){
            return "Aberto!";
        } else {
            this.tentativasErradas++;
            return "Erro!" + this.tentativasErradas;
        }
    }
}

const inputSenha = document.getElementById('input-senha')
const btnAbrir = document.getElementById('btn-abrir');
const visor = document.getElementById('visor');


btnAbrir.addEventListener('click', function() {
    let senhaDigitada = inputSenha.value;

    visor.textContent = cofre.testarAcesso(senhaDigitada);
})