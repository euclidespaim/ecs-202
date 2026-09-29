const porta = {
    trancada : true,

    alternarTrava(){
        if(this.trancada === true){
            this.trancada = false;
            iconeCadeado.textContent = "🔓";
            painel.style.backgroundColor = "green";
        } else {
            this.trancada = true;
            iconeCadeado.textContent = "🔒";
            painel.style.backgroundColor = "red";
        }
    }
}

const painel = document.querySelector('.painel');
const iconeCadeado = document.getElementById('icone-cadeado');
const btnTrava = document.getElementById('btn-trava');

btnTrava.addEventListener('click', function(){
    porta.alternarTrava();
})

