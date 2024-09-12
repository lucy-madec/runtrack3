<?php
// Database connection
$dsn = 'mysql:host=localhost;dbname=utilisateurs;charset=utf8';
$username = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query to retrieve all users
    $stmt = $pdo->query('SELECT * FROM utilisateurs');
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Sends response in JSON format
    echo json_encode($users);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}