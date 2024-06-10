let playerScore = 0;
let computerScore = 0;

function playTheGame(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let results = document.getElementById('results');
    let playerScoreText = document.getElementById('playerScore');
    let computerScoreText = document.getElementById('computerScore');
    
    if (playerChoice === computerChoice) {
        results.innerHTML = `Player: ${playerChoice} | Computer: ${computerChoice} | Results: It's a tie!`;
    } else if (
        (playerChoice === choices[0] && computerChoice === choices[2]) || 
        (playerChoice === choices[1] && computerChoice === choices[0]) || 
        (playerChoice === choices[2] && computerChoice === choices[1])
    ) {
        results.innerHTML = `Player: ${playerChoice} | Computer: ${computerChoice} | Results: Player Wins!`;
        playerScore++;
        playerScoreText.innerHTML = playerScore;
    } else {
        results.innerHTML = `Player: ${playerChoice} | Computer: ${computerChoice} | Results: Computer Wins!`;
        computerScore++;
        computerScoreText.innerHTML = computerScore;
    }
}