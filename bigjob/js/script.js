// Check if a user already exists in localStorage
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Save a new user
function saveUser(email, password) {
    const users = getUsers();
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
}

// Check if an email is already taken
function isEmailTaken(email) {
    const users = getUsers();
    return users.some(user => user.email === email);
}

// Signup
document.getElementById("signup-btn").addEventListener("click", function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!email.endsWith("@laplateforme.io")) {
        alert("Veuillez utiliser une adresse email de La Plateforme_");
        return;
    }
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return;
    }
    if (isEmailTaken(email)) {
        alert("Cet email est déjà utilisé");
        return;
    }

    saveUser(email, password);
    alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    document.getElementById("signup-form").reset();
});

// Login
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Connexion réussie !");
        window.location.href = "dashboard.html";
    } else {
        alert("Email ou mot de passe incorrect");
    }
});