// Function to update the color of the footer based on the pourcent of scroll
function updateFooterColor() {  
    // Collect the total height of the page and the visible height
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    // Calculate current scroll position
    let scrollTop = document.documentElement.scrollTop;

    // Calculate pourcent scroll
    let scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    // Calculate the new values of color (from green to red)
    let red = Math.min(255, Math.floor(scrollPercentage * 2.55));
    let green = Math.max(0, 128 - Math.floor(scrollPercentage * 1.28));

    // Update the color of the footer
    let footer = document.getElementById("footer");
    footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
}

// Add the event of scroll to update footer
window.addEventListener("scroll", updateFooterColor);