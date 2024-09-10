// Konami code sequence
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
];

// Store the current input sequence
let inputSequence = [];

// Function to check if the input sequence matches the Konami code
function checkKonamiCode() {
    if (inputSequence.join(',') === konamiCode.join(',')) {
        // Apply the styling if Konami code is entered
        document.body.style.backgroundColor = '#0062FF';
        document.body.style.color = 'white';
        document.querySelector('link[rel="stylesheet"]').href = 'style.css';
        document.body.innerHTML += '<h1>Konami Code Activated ! </h1>';
    }
}

// Event listener for key presses
document.addEventListener('keydown', (event) => {
    // Add the pressed key to the input sequence
    inputSequence.push(event.key);

    // Keep only the last N inputs where N is the length of the Konami code
    if (inputSequence.length > konamiCode.length) {
        inputSequence.shift();
    }

    // Check if the current sequence matches the Konami code
    checkKonamiCode();
});