alert('OLA MARIA, BEM VINDA AO NOSSO SITE');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == ""){ 
    nomeUsuario = prompt('qual é seu nome');
}

if(nomeUsuario == null) {
    anterior.textContent = 'NATHALIA';
} else{
    anterior.textContent = nomeUsuario;
}


