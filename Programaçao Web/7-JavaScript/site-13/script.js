const formulario = document.getElementById('form-cadastro');
const inputFoto = document.getElementById('input-foto');
const inputNome = document.getElementById('input-nome');
const inputSetor = document.getElementById('input-setor');

const fotoCracha = document.getElementById('foto-cracha');
const nomeCracha = document.getElementById('nome-cracha');
const setorCracha = document.getElementById('setor-cracha');

formulario.addEventListener('submit', function (evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    nomeCracha.textContent = inputNome.value;
    setorCracha.textContent = inputSetor.value;

    fotoCracha.src = inputFoto.value;

    inputFoto.value = "";
    inputNome.value = "";
});
