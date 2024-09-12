document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filterButton");
    const resultsList = document.getElementById("results");

    // Action when “Filter” button is clicked
    filterButton.addEventListener("click", function () {
        const typeInput = document.getElementById("type").value;

        // Fetch to retrieve the JSON file
        fetch('pokemon.json')
            .then(response => response.json())
            .then(data => {
                // Filtering Pokémon by criteria
                const filteredPokemons = data.filter(pokemon => {
                    const matchestype = typeInput ? pokemon.type.includes(typeInput) : true;
                    return matchestype;
                });

                // Results display
                displayResults(filteredPokemons);
            })
            .catch(error => console.error("Error fetching JSON data:", error));
    });

    // Function to display results in the page
    function displayResults(pokemons) {
        resultsList.innerHTML = ''; // Empty previous results
        if (pokemons.length === 0) {
            resultsList.innerHTML = '<li>Aucun Pokémon trouvé</li>';
        } else {
            pokemons.forEach(pokemon => {
                const listItem = document.createElement("li");

                const pokemonNames = `
                    Français : ${pokemon.name.french},
                    Anglais : ${pokemon.name.english},
                    Japonais : ${pokemon.name.japanese},
                    Chinois : ${pokemon.name.chinese}
                `;

                listItem.textContent = `ID : ${pokemon.id}, Noms : ${pokemonNames}, Type : ${pokemon.type.join(", ")}`;
                resultsList.appendChild(listItem);
            });
        }
    }
});