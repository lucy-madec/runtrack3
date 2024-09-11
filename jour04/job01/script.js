document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const paragraph = document.getElementById('expression');

    button.addEventListener('click', () => {
        // Using Fetch to retrieve the contents of the expression.txt file
        fetch('expression.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du fichier');
                }
                return response.text(); // Recovers file contents as text
            })
            .then(data => {
                // Inserts content into paragraph
                paragraph.textContent = data;
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    });
});