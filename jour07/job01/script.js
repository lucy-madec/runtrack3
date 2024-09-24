function validateForm(event) {
    event.preventDefault(); // Prevents form from being sent

    // Retrieve field values
    var firstname = document.querySelector("input[placeholder='Prénom']").value;
    var lastname = document.querySelector("input[placeholder='Nom de famille']").value;
    var address = document.querySelector("input[placeholder='Adresse']").value;
    var email = document.querySelector("input[placeholder='Email']").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var messageDiv = document.getElementById("message");

    // Check that all fields are filled in
    if (!firstname || !lastname || !address || !email || !password || !confirmPassword) {
        messageDiv.innerHTML = "<span style='color: red;'>Tous les champs doivent être remplis.</span>";
        return;
    }

    // Check that passwords match
    if (password !== confirmPassword) {
        messageDiv.innerHTML = "<span style='color: red;'>Les mots de passe ne correspondent pas.</span>";
        return;
    }

    // If everything is correct
    messageDiv.innerHTML = "<span style='color: green;'>Formulaire validé avec succès !</span>";
}
