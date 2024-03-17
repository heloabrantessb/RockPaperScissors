
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length)
    console.log(options[choice])
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "Draw!!"
    }else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return (`you lose! ${computerChoice} beats ${playerChoice}`)
        }else if(computerChoice == "scissors"){
            return (`you win! ${playerChoice} beats ${computerChoice}`)
        }
    }else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return (`you win! ${playerChoice} beats ${computerChoice}`)
        }else if(computerChoice == "scissors"){
            return (`you lose! ${computerChoice} beats ${playerChoice}`)
        }
    }else{
        if(computerChoice == "paper"){
            return (`you win! ${playerChoice} beats ${computerChoice}`)
        }else if(computerChoice == "rock"){
            return (`you lose! ${computerChoice} beats ${playerChoice}`)
        }
    }
}

function playGame(){
    let playerPoints = 0
    let computerPoints = 0
    let roundsPlayed = 0

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt(`Enter your choice:   Rounds already played: ${roundsPlayed}`)
        let computerChoice = getComputerChoice()

        let result = playRound(playerChoice, computerChoice)

        if(result === (`you win! ${playerChoice} beats ${computerChoice}`)){
            playerPoints++
            roundsPlayed++
        }else if(result === (`you lose! ${computerChoice} beats ${playerChoice}`)){
            computerPoints++
            roundsPlayed++
        }else{
            roundsPlayed++
        }
    }
}

playGame()