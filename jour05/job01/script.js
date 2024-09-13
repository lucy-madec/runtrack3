document.addEventListener("DOMContentLoaded", () => {
    // Registration
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            // Prevent form submission for client-side validation
            event.preventDefault();
            validateSignupForm();
        });
    }

    // Connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // Prevent form submission for client-side validation
            event.preventDefault();
            validateLoginForm();
        });
    }
});

function validateSignupForm() {
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Clear previous errors
    clearErrors();

    if (prenom === '') {
        showError('prenomError', 'Prénom requis');
        isValid = false;
    }

    if (nom === '') {
        showError('nomError', 'Nom requis');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Email invalide');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Mot de passe trop court');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Les mots de passe ne correspondent pas');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('signupForm').submit();
    }
}

function validateLoginForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // Clear previous errors
    clearErrors();

    if (!validateEmail(email)) {
        showError('emailError', 'Email invalide');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Mot de passe trop court');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('loginForm').submit();
    }
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.color = 'red';
    }
}

function clearErrors() {
    const errors = document.querySelectorAll('span[id$="Error"]');
    errors.forEach(error => {
        error.textContent = '';
    });
}