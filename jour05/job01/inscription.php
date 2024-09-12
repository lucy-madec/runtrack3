<?php
// Start session for error handling
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Inscription</h1>
    <form id="signupForm" action="register.php" method="post">
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required>
        <span id="prenomError"></span>

        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        <span id="nomError"></span>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
        <span id="emailError"></span>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
        <span id="passwordError"></span>

        <label for="confirmPassword">Confirmer le mot de passe :</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
        <span id="confirmPasswordError"></span>

        <button type="submit">S'inscrire</button>
    </form>
    <a href="index.php">Retour à l'accueil</a>
</body>
</html>