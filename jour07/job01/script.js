function validatePasswords(event) {
    event.preventDefault(); // Prevents form from being sent

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var messageDiv = document.getElementById("message");

    if (password !== confirmPassword) {
        messageDiv.innerHTML = "<span style='color: red;'>Les mots de passe ne correspondent pas.</span>";
    } else {
        messageDiv.innerHTML = "<span style='color: green;'>Inscription réussie !</span>";
    }
}