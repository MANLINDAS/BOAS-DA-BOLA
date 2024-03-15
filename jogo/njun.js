let numeroSecreto=8;

let chute = ''; 

while(chute == ''){
    chute = prompt( 'escolha um numero de 0 a 10')
}  
if(numeroSecreto == chute) {
        alert('acertou gatinha');
        console.log('parabens');
    } else{
        alert('errou, que pena')
        console.log('infelizmente você errou');
    }