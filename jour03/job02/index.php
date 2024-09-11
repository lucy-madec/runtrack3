<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 02 - Mélange d'images</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js" defer></script>
</head>

<body>
    <button id="shuffleButton">Mélanger les images</button>
    <div id="imageContainer">
        <!-- Placeholder for images -->
        <div class="image-wrapper" data-index="0"><img src="images/arc1.png" alt="Image 1"></div>
        <div class="image-wrapper" data-index="1"><img src="images/arc2.png" alt="Image 2"></div>
        <div class="image-wrapper" data-index="2"><img src="images/arc3.png" alt="Image 3"></div>
        <div class="image-wrapper" data-index="3"><img src="images/arc4.png" alt="Image 4"></div>
        <div class="image-wrapper" data-index="4"><img src="images/arc5.png" alt="Image 5"></div>
        <div class="image-wrapper" data-index="5"><img src="images/arc6.png" alt="Image 6"></div>
    </div>
    <button id="checkOrderButton">Vérifier l'ordre</button>
    <div id="resultMessage"></div>
</body>

</html>