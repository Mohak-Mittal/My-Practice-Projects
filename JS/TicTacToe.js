let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = false;
let winningPattern = [
    ["0", "1", "2"],
    ["0", "3", "6"],
    ["0", "4", "8"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["2", "4", "6"],
    ["3", "4", "5"],
    ["6", "7", "8"]
];



boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}






const checkwinner = () => {
    for (let pattern of winningPattern) {
        let box1 = document.getElementById(pattern[0]).innerText;
        let box2 = document.getElementById(pattern[1]).innerText;
        let box3 = document.getElementById(pattern[2]).innerText;
        // if(box1==="X" && box2==="X" && box3==="X") {
        //     console.log('player1 win');
        // } else if(box1==="O" && box2==="O" && box3==="O") {
        //     console.log('player2 win');
        // }


        // Alternate version
        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                showWinner(box1);
                disableBoxes();
            }
        }
    }
}


const resetGame = () => {
    playerO = false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);