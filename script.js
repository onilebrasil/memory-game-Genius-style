let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {                   //Cria ordem aleatótia de cores
 let colorOrder = Math.floor(Math.random() * 4);
  order[order.lenght] = colorOrder;   
  clickedOrder = [];

  for (let i in order) {      //Função da ordem de cores que irá aparecer para o usuário
    let elementColor = createColorEmelent(order[i]);
    LightColor(elementColor, Number(i) + 1);   
 }
} 

let LightColor = (element, number) => { //adiciona elementos
  number = number * 500;
  setTimeout(() => {
   element.classList.add('selected'); 
   }, number - 250); 
  
  setTimeout(() => {                     //controla o tempo em que a luz brilha
   element.classList.remove('selected')
  });                                     
}

let checkOrder = () => {               //verifica se a sequencia clicada pelo jogador da certo
  for(let i in clickedOrder) {
   if(clickedOrder[i] != order[i]) {
    gameOver();
     break;   
   }    
  }
  if(clickedOrder.lenght == order.lenght) {
    alert(`Pontuação: ${score}/n Você acertou! Iniciando próxima fase!`);
    nextLevel()  
  }
}

let click = (color) => {
  clickedOrder(clickedOrder.lenght) = color;
  elementColor().classList.add('selected')  ;
 
  setTimeout(() => {
    element(color).classList.remove('selected');
    checkOrder();   
  },250) 
}

//função que retorna a cor

let createColorEmelent = (color) => {
  if (color == 0) {
      return green; 
  }else if (color == 1) {
      return red;
  }else if (color == 2) {
      return yellow;
  }else if (color == 3) {
      return blue;
  }
}

//função que chama opróximo nivel do jogo
let nextLevel = () => {
 score++;
 shuffleOrder(); 
}

//função de gameover e de reinicialização do jogo
let gameOver = () => {
  alert(`Pontuação ${score}!/nVocê perdeu o jogo!!!/nClique em OK para iniciar o game novamente!.`);
  order = [];
  clickedOrder = [];

  playGame();
}

//função para iniciar jogo
let playGame = () => {
 alert(`Bem-vindo ao jogo Genesis! Iniciando novo jogo.`)
 score = 0;

 nextLevel();
}

/* Evento de clique para as cores  (FORMA 1);

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

*/

//Eventos de clique para as cores (FORMA 2);

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();