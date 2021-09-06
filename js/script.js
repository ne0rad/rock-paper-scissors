function rng(max) {
    return Math.floor(Math.random() * max);
}

function generateSign() {
    let sign = rng(3);
    let cpuImg = document.getElementById("cpu-img");
    switch (sign) {
        case 0:
            sign = "rock";
            break;
        case 1:
            sign = "paper";
            break
        case 2:
            sign = "scissors";
            break;
        default:
            break;
    }
    cpuImg.src = "images/" + sign + ".png";
    return sign;
}

function reset() {
    let myScore = document.getElementById("my-score");
    let cpuScore = document.getElementById("cpu-score");

    myScore.innerHTML = 0;
    cpuScore.innerHTML = 0;

    document.getElementById("reset").hidden = true;
    document.getElementById("cpu-img").hidden = false;
    document.getElementById("cpu-img").src = "images/cpu.png";
    document.getElementById("result").innerHTML = "Choose your weapon!";
    document.getElementById("result").style = "color: black";
}

function game(sign) {
    let myScore = document.getElementById("my-score");
    let cpuScore = document.getElementById("cpu-score");
    let resultBox = document.getElementById("result");
    let cpuImg = document.getElementById("cpu-img");

    let myScoreInt = parseInt(myScore.innerHTML);
    let cpuScoreInt = parseInt(cpuScore.innerHTML);

    if (cpuScoreInt > 4 || myScoreInt > 4) return;

    const VICTORY_MSG = "You win";
    const LOSS_MSG = "You lose";
    const DRAW_MSG = "It's a tie";

    let result;
    let cpuSign = generateSign();
    switch (sign) {
        case "rock":
            if (cpuSign === "rock") result = 0;
            else if (cpuSign === "paper") result = -1;
            else result = 1;
            break;

        case "paper":
            if (cpuSign === "rock") result = 1;
            else if (cpuSign === "paper") result = 0;
            else result = -1;
            break;

        case "scissors":
            if (cpuSign === "rock") result = -1;
            else if (cpuSign === "paper") result = 1;
            else result = 0;
            break;

        default:
            break;
    }
    if (result === -1) {
        cpuScore.innerHTML = cpuScoreInt + 1;
        resultBox.style = "color: red";
        if (cpuScoreInt + 1 > 4) {
            resultBox.innerHTML = "CPU WINS THE GAME!";
            cpuImg.hidden = true;
            document.getElementById("reset").hidden = false;
            return
        }
        resultBox.innerHTML = LOSS_MSG;
    }
    else if (result === 0) {
        resultBox.innerHTML = DRAW_MSG;
        resultBox.style = "color: black";
    }
    else if (result === 1) {
        myScore.innerHTML = myScoreInt + 1
        resultBox.style = "color: green";
        if (myScoreInt + 1 > 4) {
            resultBox.innerHTML = "YOU WIN THE GAME!";
            cpuImg.hidden = true;
            document.getElementById("reset").hidden = false;
            return
        }
        resultBox.innerHTML = VICTORY_MSG;
    }
}

