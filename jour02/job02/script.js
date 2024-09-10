// Variable to check the statut of the article
let articleVisible = false;

// Function to dislplay or hide the article
function showhide() {
    // Check if the article already exists
    let article = document.getElementById("article");

    if (!article) {
        // If the article doesn't exist, create it et add it to the page
        article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
        articleVisible = true;
    } else {
        // If the article exists already, delete it
        article.remove();
        articleVisible = false;
    }
}

// Add an event listener at the button to call the function showhide() at click
document.getElementById("button").addEventListener("click", showhide);