<?php
// Start of session
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <h1>Connexion</h1>

    <?php if (isset($_GET['error'])): ?>
        <p style="color: red;">Erreur de connexion. Veuillez vérifier vos identifiants.</p>
    <?php endif; ?>
    
    <!-- Verification of success after registration -->
    <?php if(isset($_GET['success'])): ?>
        <p style="color: green;">Inscription réussie. Vous pouvez maintenant vous connecter.</p>
    <?php endif; ?>

    <!-- Login form -->
    <form id="loginForm" action="login.php" method="post">
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
        <span id="emailError"></span>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
        <span id="passwordError"></span>

        <button type="submit">Se connecter</button>
    </form>
    <a href="index.php">Retour à l'accueil</a>
</body>

</html>