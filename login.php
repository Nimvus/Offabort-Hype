<?php
// Database connection
$conn = new mysqli("localhost", "username", "password", "database");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$pass')";
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<?php
// login.php
session_start();
// Replace with your database connection details
$conn = new mysqli("localhost", "db_user", "db_password", "db_name");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($user = $result->fetch_assoc()) {
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $username;
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid password"]);
        }
    }
    $stmt->close();
}
?>