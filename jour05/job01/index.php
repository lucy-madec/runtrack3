<?php session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <?php if (isset($_SESSION['prenom'])): ?>
        <p>Bonjour <?php echo htmlspecialchars($_SESSION['prenom']); ?> !</p>
    <?php else: ?>
        <a href="inscription.php">Inscription</a>
        <a href="connexion.php">Connexion</a>
    <?php endif; ?>
</body>

</html>