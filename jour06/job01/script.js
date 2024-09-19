document.getElementById("orderButterfly").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Merci pour votre commande de papillon !");
});

// Table of quotes from the film Blade Runner
const quotes = [
    "I've seen things you people wouldn't believe...",
    "All those moments will be lost in time, ike tears in rain.",
    "The light that burns twice as bright burns half as long.",
    "More human that human is our motto.",
    "It's too bad she won't live! But then again, who does?",
    "Wake up! Time to die!"
];

// Function for choosing a random quote
function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Add an event listener to the "Rebooter le Monde" button
document.querySelector(".btn-danger").addEventListener("click", function (event) {
    event.preventDefault();
    const jumbotron = document.getElementById("jumbotron"); // Prevents all default button actions
    
    // Modify jumbotron content with random quotation
    jumbotron.innerHTML = `
        <h1 class="fw-light text-start">Blade Runner :</h1>
        <p class="mt-3 text-start">${randomQuote()}</p>
    `;
});