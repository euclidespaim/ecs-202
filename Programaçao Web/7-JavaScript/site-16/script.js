const dadoSensivel = document.getElementById('dado-sensivel');
const alerta = document.getElementById('alerta-seguranca');

dadoSensivel.addEventListener('copy', function (evento) {

    // Bloqueia a ação nativa de copiar
    evento.preventDefault();

    // Revela o alerta de segurança
    alerta.style.display = 'block';
});


dadoSensivel.addEventListener('cut', function (evento) {
    evento.preventDefault();
    alerta.style.display = 'block';
    alerta.textContent = '⚠️ ALERTA: Tentativa de recorte bloqueada!';
});
