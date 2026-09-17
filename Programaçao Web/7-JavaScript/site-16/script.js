const dadoSensivel = document.getElementById('dado-sensivel');
const alerta = document.getElementById('alerta-seguranca');


function alertaSeguranca(evento){
    evento.preventDefault();

    alerta.style.display = 'block';
    alerta.textContent = '⚠️ ALERTA: Tentativa de recorte bloqueada!';

}

dadoSensivel.addEventListener('copy', alertaSeguranca);


dadoSensivel.addEventListener('cut', alertaSeguranca);


dadoSensivel.addEventListener('paste', alertaSeguranca)