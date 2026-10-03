<?php
// Start the session to manage flash messages or user state
session_start();

// Database configuration setup
$host    = 'localhost';
$db      = 'your_database_name';
$user    = 'your_username';
$pass    = 'your_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Initialize error and success arrays
$errors = [];
$success = "";

// Process the form submission
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['register'])) {
    
    // Sanitize and collect input data
    $username = trim($_POST['username'] ?? '');
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $password_confirm = $_POST['password_confirm'] ?? '';

    // 1. Server-side validation
    if (empty($username)) {
        $errors[] = "Username is required.";
    } elseif (strlen($username) < 3 || strlen($username) > 50) {
        $errors[] = "Username must be between 3 and 50 characters.";
    }

    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    if (empty($password)) {
        $errors[] = "Password is required.";
    } elseif (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters long.";
    }

    if ($password !== $password_confirm) {
        $errors[] = "Passwords do not match.";
    }

    // 2. Check for existing unique data if no validation errors found
    if (empty($errors)) {
        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $stmt->execute([$username, $email]);
        if ($stmt->fetch()) {
            $errors[] = "Username or Email is already registered.";
        }
    }

    // 3. Insert user record into the database
    if (empty($errors)) {
        // Securely hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        
        if ($stmt->execute([$username, $email, $hashed_password])) {
            $success = "Registration successful! You can now log in.";
            // Reset input values after success
            $username = $email = "";
        } else {
            $errors[] = "Something went wrong. Please try again.";
        }
    }
}
?>
