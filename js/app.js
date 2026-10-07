const amigos = [];
const campoNome = document.getElementById('nome-amigo');
const listaAmigosTela = document.getElementById('lista-amigos');
const listaSorteioTela = document.getElementById('lista-sorteio');

function adicionar() {
    let nome = campoNome.value.trim();
    if (nome === '') {
        alert('⚠️ Por favor, digite um nome válido antes de adicionar!');
        return;
    }
    amigos.push(nome);
    campoNome.value = '';
    listaAmigosTela.textContent = amigos.join(', ');
     campoNome.value = '';
     campoNome.focus();
}
function sortear() { 
    
    if (amigos.length < 3) {
        alert('⚠️ Adicione pelo menos 3 amigos para realizar o sorteio!'); 
        return;
    } 

   
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 
    listaSorteioTela.innerHTML = `🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`; 
}

function reiniciar(evento) {
 
  if (evento) {
    evento.preventDefault();
  }

  
  amigos.length = 0; 

  
  listaAmigosTela.textContent = '';
  listaSorteioTela.innerHTML = '';
  campoNome.value = '';

  
  campoNome.focus();
}
