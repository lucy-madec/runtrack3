<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
        // Redirects to login page with error message
        header('Location: connexion.php?error=true');
        exit();
    }
}