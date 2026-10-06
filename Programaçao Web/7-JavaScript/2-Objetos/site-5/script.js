const carteira = {
    saldo: 200,
    chips: 0,

    comprarChip(){
        if (this.saldo >= 50){
            this.saldo -= 50;
            this.chips++;
            telaSaldo.textContent = this.saldo;
            telaChips.textContent = this.chips;
        } else {
            alert('Saldo insuficiente!');
        }
    }
}

const telaSaldo = document.getElementById('tela-saldo');
const telaChips = document.getElementById('tela-chips');
const btnComprar = document.getElementById('btn-comprar');


btnComprar.addEventListener('click', function(){
    carteira.comprarChip();

})