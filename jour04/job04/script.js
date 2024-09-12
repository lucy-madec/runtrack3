document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("updateButton");
    const userTableBody = document.querySelector("#userTable tbody");

    // User table update function
    function updateUserTable(users) {
        userTableBody.innerHTML = ''; // Empty the table before updating

        users.forEach(user => {
            const row = document.createElement('tr');

            // Creating cells for each column
            const idCell = document.createElement('td');
            idCell.textContent = user.id;
            row.appendChild(idCell);

            const nomCell = document.createElement('td');
            nomCell.textContent = user.nom;
            row.appendChild(nomCell);

            const prenomCell = document.createElement('td');
            prenomCell.textContent = user.prenom;
            row.appendChild(prenomCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            userTableBody.appendChild(row);
        });
    }

    // Clicking on the button retrieves users via Fetch
    updateButton.addEventListener("click", function () {
        fetch('users.php')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Erreur :', data.error);
                } else {
                    updateUserTable(data); // Updates the table with users
                }
            })
            .catch(error => console.error('Erreur Fetch :', error));
    });
});