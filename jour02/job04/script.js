// Keystroke capture function
function keylogger(event) {
    // Get the element textarea
    let textarea = document.getElementById("keylogger");

    // Check whether the key pressed is a letter (a-z or A-Z) 
    if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
        // If the focus is on the textarea, add two times the letter
        if (document.activeElement === textarea) {
            textarea.value += event.key + event.key;
        } else {
            // Else, add the letter once
            textarea.value += event.key;
        }
    }
}

// Add an event listener to capture every keystroke
document.addEventListener("keypress", keylogger);