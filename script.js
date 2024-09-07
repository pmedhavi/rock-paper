
const options=["rock","paper","scissors"];
function getComputerChoice(){
    const choice=options[Math.floor(Math.random()*options.length)];
     return(choice);
}
function getHumanChoice(){
    const userInput=prompt("Enter rock,paper,or scissor").toLowerCase();
    if(options.includes(userInput)){
        return userInput;
    }
    else{
        console.log("Invalid choice");
        return getHumanChoice();
    }
}
let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        console.log("It's a tie!");
    }
    else if((humanChoice==="rock"&&computerChoice==="scissor")||
            (humanChoice==="scissor"&&computerChoice==="paper")||
            (humanChoice==="paper"&&computerChoice==="rock")){
                console.log("you win")
                humanScore++;
            }
    else{
        console.log("you lose");
        computerScore++;
    }
}
function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log("Game over");
    if(humanScore>computerScore){
        console.log("you win");
    }
    else if(computerScore>humanScore){
        console.log("you lose dumbfuck");
    }
    else{
        console.log("wow, nobody wins mf");
    }
}


playGame();