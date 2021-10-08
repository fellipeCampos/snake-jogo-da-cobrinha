let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; /* 32 p cada quadradinho */

function criarBG() { /* desenhar e definir cor */
    context.fillStyle = "lightgrenn";
    context.fillRect(0, 0, 16 * box, 16 * box); /* retangulo, onde vai acontecer o jogo */
}

criarBG()

