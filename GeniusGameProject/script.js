let order = [];
let clickedOrder = [];
let score = 0;

// 0 -> Verde | 1 --> Vermelho | 2 --> Amarelo | 3 --> Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//ascende a próxima luz(cor)
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    setTimeout(() => {
        element.classList.remove('selected')
    }, 250);

    }, number -250);
}

//confere se os botões clicados são os mesmos que os gerados
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        setTimeout(nextLevel(), 1000);
    }
}

//função para receber o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 50);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if(color == 1) {
        return red;
    }
    else if(color == 2) {
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
}

//função de próximo nível
let nextLevel = () => {
    score++;

    setTimeout(shuffleOrder(), 1000);
}

//Game Over function

let lose = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo"\nClique em OK para iniciar um novo jogo`);
    order =[];
    clickedOrder = [];

    playGame();
}

//função que inicia o jogo
let playGame = () => {
    score = 0;
    shuffleOrder();
}

let startGame = () => {
    alert('Bem Vindo ao Gênesis! Iniciando novo Jogo...')
    score = 0;
    
    shuffleOrder();
}

//eventos de clique do jogador
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

startGame();