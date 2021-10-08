let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; /* 32 p cada quadradinho */
let snake = [];
snake[0] = {
    x: 8 * box, /*  dando tamanho para snake */
    y: 8 * box  

}
let direction = "right";

function criarBG() { /* desenhar e definir cor */
    context.fillStyle = "lightgrenn";
    context.fillRect(0, 0, 16 * box, 16 * box); /* retangulo, onde vai acontecer o jogo */
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "grenn"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    snake.pop();
    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);/* ms para iniciar o jogo */
