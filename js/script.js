function rng(max) {
    return Math.floor(Math.random() * max);
  }

function generateSign() {
    let sign = rng(3);
    let text = document.getElementsByTagName("h2")[0];
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
    text.innerHTML = "Computer plays: " + sign;
    return sign;
}

function game(sign) {
    const VICTORY_MSG = "Congo rats, you've won!";
    const LOSS_MSG = "Too bad, you've lost...";
    const DRAW_MSG = "It's a Draw";
    let resultBox = document.getElementById("result");
    let result;
    let cpuSign = generateSign();
    switch (sign) {
        case "rock":
            if(cpuSign === "rock") result = 0;
            else if(cpuSign === "paper") result = -1;
            else result = 1;
            break;
        
        case "paper":
            if(cpuSign === "rock") result = 1;
            else if(cpuSign === "paper") result = 0;
            else result = -1;
            break;
        
        case "scissors":
            if(cpuSign === "rock") result = -1;
            else if(cpuSign === "paper") result = 1;
            else result = 0;
            break;

        default:
            break;
    }
    if(result === -1) resultBox.innerHTML = LOSS_MSG;
    else if(result === 0) resultBox.innerHTML = DRAW_MSG;
    else if(result === 1) resultBox.innerHTML = VICTORY_MSG;
}

