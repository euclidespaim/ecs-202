const sistema = {
    energia: 100,

    consumir(){
        this.energia -= 20;
        barraEnergia.style.width = this.energia + "%";
    },

    recarregar(){
        this.energia = 100;
        barraEnergia.style.width = this.energia + "%";
    }
}


const barraEnergia = document.getElementById('barra-energia');
const btnCarga = document.getElementById('btn-carga');
const btnUsar = document.getElementById('btn-usar');

btnUsar.addEventListener('click', function(){
    sistema.consumir();
})

btnCarga.addEventListener('click', function(){
    sistema.recarregar();
})


