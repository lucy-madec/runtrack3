// Initialise the counter at 0
let compteur = 0;

// Function to increase the counter at each click
function addone() {
    // Increase the counter
    compteur++;

    // Update the content of the element <p> with the id "compteur"
    document.getElementById("compteur").textContent = compteur;
}

// Add an event listener at the button to call the function addone() at the click
document.getElementById("button").addEventListener("click", addone);