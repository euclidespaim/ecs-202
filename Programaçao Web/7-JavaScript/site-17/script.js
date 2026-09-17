const corpoDaPagina = document.body;

const icone = document.getElementById('icone');
const mensagem = document.getElementById('mensagem');

function dispararAlarme() {
    corpoDaPagina.style.backgroundColor = "#7f1d1d";
    icone.textContent = '🚨';
    mensagem.textContent = 'TENTATIVA DE FUGA DETECTADA!';
    mensagem.style.color = '#fca5a5';

}
function normalizarSistema() {
    corpoDaPagina.style.backgroundColor = "#0f172a";
    icone.textContent = '👁️';
    mensagem.textContent = 'Monitorando atividade...';
    mensagem.style.color = '#94a3b8';
}

window.addEventListener('blur', dispararAlarme);
document.addEventListener('mouseleave', dispararAlarme);
window.addEventListener('focus', normalizarSistema);
document.addEventListener('mouseenter', normalizarSistema);
