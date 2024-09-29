let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update player and computer choices
    document.getElementById('playerChoice').textContent = playerChoice;
    document.getElementById('computerChoice').textContent = computerChoice;

    // Determine the result
    let result;
    if (playerChoice === computerChoice) {
        result = 'Draw';
        document.getElementById('gameResult').className = 'draw';

        // Trigger the draw animation
        triggerDrawAnimation();
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = 'You Win!';
        playerScore++;
        document.getElementById('gameResult').className = 'winner';

        // Trigger the confetti blast on win
        celebrateWin();
    } else {
        result = 'You Lose!';
        computerScore++;
        document.getElementById('gameResult').className = 'loser';

        // Show loss emoji
        showLossEmoji();
    }

    // Update result and scores
    document.getElementById('gameResult').textContent = result;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// Function to trigger confetti on win
function celebrateWin() {
    var end = Date.now() + 2 * 1000;  // Confetti duration: 2 seconds

    // Create random confetti bursts
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Function to show loss emoji
function showLossEmoji() {
    const lossEmoji = document.createElement('div');
    lossEmoji.innerHTML = '😢';  // You can replace this with any loss emoji
    lossEmoji.style.fontSize = '100px';
    lossEmoji.style.position = 'absolute';
    lossEmoji.style.left = '50%';
    lossEmoji.style.top = '50%';
    lossEmoji.style.transform = 'translate(-50%, -50%)';
    lossEmoji.style.zIndex = '1000';
    lossEmoji.classList.add('fadeOut');

    document.body.appendChild(lossEmoji);

    // Remove emoji after the animation ends (3 seconds)
    setTimeout(() => {
        document.body.removeChild(lossEmoji);
    }, 3000);
}

// Function to trigger draw animation
function triggerDrawAnimation() {
    const drawMessage = document.createElement('div');
    drawMessage.innerHTML = '🤝 Draw!';  // Draw message with emoji
    drawMessage.style.fontSize = '80px';
    drawMessage.style.position = 'absolute';
    drawMessage.style.left = '50%';
    drawMessage.style.top = '50%';
    drawMessage.style.transform = 'translate(-50%, -50%)';
    drawMessage.style.zIndex = '1000';
    drawMessage.classList.add('spinAnimation');  // Add a CSS class for animation

    document.body.appendChild(drawMessage);

    // Remove the draw message after animation (3 seconds)
    setTimeout(() => {
        document.body.removeChild(drawMessage);
    }, 3000);
}
