alert('OLA MARIA, BEM VINDA AO NOSSO SITE');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == ""){ 
    nomeUsuario = prompt('qual é seu nome');
}

if(nomeUsuario == null) {
    anterior.textContent = 'Nathalia';
} else{
    anterior.textContent = nomeUsuario;
}


