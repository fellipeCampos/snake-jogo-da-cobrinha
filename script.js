let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; /* 32 p cada quadradinho */
let snake = [];
snake[0] = {
    x: 8 * box, /*  dando tamanho para snake */
    y: 8 * box  

}
function criarBG() { /* desenhar e definir cor */
    context.fillStyle = "lightgrenn";
    context.fillRect(0, 0, 16 * box, 16 * box); /* retangulo, onde vai acontecer o jogo */
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "red"
        context.fillRect(snake[i].y, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();

