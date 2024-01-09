let MOLE;
let BOMB;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setBomb, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setBomb
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (MOLE) {
        MOLE.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.jpeg";

    let num = getRandomTile();
    if (BOMB && BOMB.id == num) {
        return;
    }
    MOLE = document.getElementById(num);
    MOLE.appendChild(mole);
}

function setBomb() {
    if (gameOver) {
        return;
    }
    if (BOMB) {
        BOMB.innerHTML = "";
    }
    let Bomb = document.createElement("img");
   Bomb.src = "./bomb.png";

    let num = getRandomTile();
    if (MOLE && MOLE.id == num) {
        return;
    }
    BOMB = document.getElementById(num);
    BOMB.appendChild(Bomb);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == MOLE) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == BOMB) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}