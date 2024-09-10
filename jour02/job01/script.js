// Fonction to collect and display the content of the quotation
function quotation() {
    // Collect the content of the element with the id "citation"
    let textQuotation = document.getElementById("citation").textContent;

    // Display the content in the console
    console.log(textQuotation);
}

// Display an event listener at the button to call the function quotation() at click
document.getElementById("button").addEventListener("click", quotation);