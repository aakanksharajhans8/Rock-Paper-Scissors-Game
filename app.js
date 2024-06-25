let items = document.querySelectorAll(".item");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let userScore=0;
let compScore=0;

items.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

let userWin = false;
function playGame(userChoice){
    let compChoice = compMove();

    if(userChoice == compChoice){
        draw();
    }
    else{
        if(userChoice == "rock"){
            userWin = (compChoice == "paper")?false:true;
        }
        else if(userChoice == "paper"){
            userWin = (compChoice == "scissors")?false:true;
        }
        else if(userChoice == "scissors"){
            userWin = (compChoice == "rock")?false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
}

function compMove(){
    let options = ["rock" , "paper" , "scissors"];
    let randIdx = Math.floor(3*Math.random());
    return options[randIdx];
}

function draw(){
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin , userChoice, compChoice){
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}