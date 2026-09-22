const caixaArquivo = document.getElementById('caixa-arquivo');
const nomeArquivo = document.getElementById('nome-arquivo')
const icone = document.getElementById('icone')

caixaArquivo.addEventListener('click', function(){
    caixaArquivo.style.borderColor = "blue";
})

caixaArquivo.addEventListener('dblclick', function(){
    caixaArquivo.style.backgroundColor = 'green';
    caixaArquivo.style.borderColor = "green";

    icone.textContent = '🔓';
    nomeArquivo.textContent = 'Acesso Liberado!!';
    nomeArquivo.style.color = 'blue';

});