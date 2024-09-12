<?php
session_start();
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Search user by email
    $stmt = $pdo->prepare('SELECT * FROM utilisateurs WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    // Checks if the user exists and if the password is correct
    if ($user && password_verify($password, $user['password'])) {
        // Stores user information in session
        $_SESSION['prenom'] = $user['prenom'];
        $_SESSION['nom'] = $user['nom'];
        $_SESSION['email'] = $user['email'];

        // Redirects to home page
        header('Location: index.php');
        exit();
    } else {
        // If authentication fails, displays an error message
        echo 'Erreur de connexion. Veuillez vérifier vos identifiants.';
    }
}