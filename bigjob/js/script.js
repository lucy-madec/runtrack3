document.getElementById("login-btn").addEventListener("click", function () {
    const emailInput = document.getElementById("email").ariaValueMax;
    const passwordInput = document.getElementById("password").value;

    // Checks if the email address contains the required domain
    if (!emailInput.endsWith("@laplateforme.io")) {
        alert("Veuillez utiliser une adresse email valide de La Plateforme_ (@laplateforme.io)");
        return;
    }

    // Validation
    if (emailInput && passwordInput) {
        alert("Connexion réussie !");
        // Redirects or loads the main page
        window.location.href = "dashboard.html";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
})