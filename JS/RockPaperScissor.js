let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");


let choices = document.querySelectorAll(".box");
let gencompChoice = () => {
    let num = Math.floor(Math.random()*3);
    return value(num);
}

const drawGame = () => {
    msg.innerText = "Game Was Draw! Play Again"
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        msg.innerText = ` You Win!  ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("comp-score").innerText = compScore;
    }
    else {
        msg.innerText = ` You Lose!  ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
        compScore++;
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("comp-score").innerText = compScore;
    }
    if (userScore === 10) {
        setTimeout(function() {
            alert("You Wins!");
        }, 100); 
        userScore = 0;
        compScore = 0;
        setTimeout(function() {
            document.getElementById("user-score").innerText = userScore;
            document.getElementById("comp-score").innerText = compScore;
            }, 200);
    }

    else if(compScore===10) {
        setTimeout(function() {
            alert("Computer Wins!");
        }, 100); 
        userScore = 0;
        compScore = 0;
        setTimeout(function() {
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("comp-score").innerText = compScore;
        }, 200);
    }
};

let playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    let compChoice = gencompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice===compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if(userChoice=== "rock") {
            userwin = compChoice==="scissor" ? true : false;
        } else if(userChoice=== "paper") {
            userwin = compChoice==="rock" ? true : false;
        } else {
            userwin = compChoice==="paper" ? true : false;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
   })
});


function value(num) {
    switch(num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}