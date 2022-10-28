<?php

$mysqlDsn = 'mysql:host=localhost;dbname=addstructure';

try {
    $pdo = new PDO($mysqlDsn, username: 'root', password: 'root');
} catch (PDOException $PDOException) {
    echo 'Impossible de se connecter à la base de données';
}

$query = $pdo->prepare("INSERT INTO user (email, Password) VAlUES (?, ?)");
