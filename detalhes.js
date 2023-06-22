window.onload = () => {
    lerInfos()
}

let divDetalhes = document.getElementById('detalhes')
let btvoltar = document.getElementById('voltar')

btvoltar.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})


function lerInfos(){
    divDetalhes.innerHTML = `
    <div id="geral">
        
    <div id="card">
    <img src="${localStorage.getItem('@Imagem')}">
        <h1 id="nome">${localStorage.getItem('@Nome')}</h1>
        <h2>${localStorage.getItem('@Posicao')}</h2>
    </div>
        <div id="div-informacoes">
            <h1 id="titulo_detalhes">Botafogo</h1>
            <p>${localStorage.getItem('@Descricao')}</p>
            <span class="informacoes">
                <strong>Nome completo: </strong> 
                <span> ${localStorage.getItem('@Nome')} </span>
            </span>
    
            <span class="informacoes">
                <strong>Altura: </strong> 
                <span> ${localStorage.getItem('@Altura')} </span>
            </span>

            <span class="informacoes">
                <strong>Nascimento: </strong> 
                <span> ${localStorage.getItem('@Nascimento')} 
                </span>
            </span>
        </div>
    </div>
    
    `;
}

const button = document.getElementById('voltar');

button.addEventListener('mouseover', function() {
  button.classList.add('botaoAnimado');
});

button.addEventListener('mouseout', function() {
  button.classList.remove('botaoAnimado');
});