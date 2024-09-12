<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $prenom =$_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    
    // Check if the email already exists
    $stmt = $pdo->prepare('SELECT * FROM utilisateurs WHERE email = ?');
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        // Handles previously used email error
        exit('Email déjà pris');
    }

    // Inserts user in database
    $stmt = $pdo->prepare('INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)');
    $stmt->execute([$nom, $prenom, $email, $password]);

    // Redirects user to login page
    header('Location: connexion.php');
    exit();
}