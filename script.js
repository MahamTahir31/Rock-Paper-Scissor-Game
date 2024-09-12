let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const messsage = document.querySelector("#message")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}
const drawGame = () => {
    messsage.innerText = "Game Draw"
    messsage.style.backgroundColor = "blue"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        messsage.innerText = `You won! ${userChoice} beat ${compChoice}`;
        messsage.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore
        messsage.innerText = `You Lose! ${compChoice} beat ${userChoice}`
        messsage.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice()

    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true; 
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
        
    })
})