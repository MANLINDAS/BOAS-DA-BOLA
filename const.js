const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');





for (let x = 0; x < botoes.length; x++) {
    botoes[x].onclick = function () {
        for (let y = 0; y < botoes.length; y++) {
            botoes[y].classList.remove('ativo');
            textos[y].classList.remove('ativa');
        }
        botoes[x].classList.add('ativo');
        textos[x].classList.add('ativa');
    }
}

const contadores = document.querySelectorAll('.contador');

let tempoAtual = new Date();
let tempoObjetivo1 = new Date('2034-04-26T00:00:00')
let tempoobjetivo2 = new Date('2029-07-22T00:00:00');
let tempoobjetivos3 = new Date('2026-04-27T00:00:00');
let tempoobjetivo4 = new Date('2890-12-15T00:00:00');

let tempos = [tempoObjetivo1, tempoobjetivo2, tempoobjetivos3, tempoobjetivo4]

for( let i=0; i < contadores.length; i++){
    contadores[i].textContent = calculatempo(tempos[i]);
}
function calculatempo(tempoObjetivo){
    let tempoFinal = tempoObjetivo - tempoAtual;


let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}