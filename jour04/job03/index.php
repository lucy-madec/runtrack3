<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Filtre Pokémon</title>
    <script src="script.js" defer></script>
</head>

<body>
    <h1>Filtrer les Pokémon</h1>
    <form id="filterForm">
        <label for="id">ID :</label>
        <input type="text" id="id" name="id"><br><br>

        <label for="name">Nom :</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="type">Type :</label>
        <select name="type" id="type">
            <option value="">Tous</option>
            <option value="Grass">Plante</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Bug">Insecte</option>
            <option value="Normal">Normal</option>
            <option value="Flying">Vol</option>
            <option value="Electric">Électrik</option>
            <option value="Ice">Glace</option>
            <option value="Fighting">Combat</option>
            <option value="Poison">Poison</option>
            <option value="Ground">Sol</option>
            <option value="Rock">Roche</option>
            <option value="Ghost">Spectre</option>
            <option value="Psychic">Psy</option>
            <option value="Dragon">Dragon</option>
            <option value="Steel">Acier</option>
            <option value="Dark">Ténèbres</option>
            <option value="Fairy">Fée</option>
        </select><br><br>

        <input type="button" id="filterButton" value="Filter">
    </form>

    <h2>Résultats :</h2>
    <ul id="results"></ul>
</body>

</html>