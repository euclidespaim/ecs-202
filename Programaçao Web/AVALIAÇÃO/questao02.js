const sensorTermico = {
    temperatura: 40,
    limiteCritico: 70,

    alteraTemperartura(valor){
        this.temperatura += valor;

        if (this.temperatura >= this.limiteCritico){
            return "CRÍTICO!";
        } else {
            return "ESTÁVEL!";
        }
    }
}

const valorTemp = document.getElementById('valor-temp');
const statusTxt = document.getElementById('status-txt');
const btnVento = document.getElementById('btn-vento');
const btnCarga = document.getElementById('btn-carga');

function atualizarTela(resposta) {
    valorTemp.textContent = sensorTermico.temperatura + "°C"
    statusTxt.textContent = resposta;

    if (resposta === "CRÍTICO!"){
        valorTemp.style.color = 'red';
        statusTxt.style.color = 'red';
    } else {
        valorTemp.style.color = 'green';
        statusTxt.style.color = 'green';
    }
}

btnCarga.addEventListener('click', function(){
    let resposta = sensorTermico.alteraTemperartura(15);
    atualizarTela(resposta);
})

btnVento.addEventListener('click', function(){
    let resposta = sensorTermico.alteraTemperartura(-15);
    atualizarTela(resposta);
})