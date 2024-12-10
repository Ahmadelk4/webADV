<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require "db_connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email = htmlspecialchars($data["email"]);
  $password = $data["password"];

  try {
    // Prepare and execute the statement
    $stmt = $con->prepare("SELECT db_id, PWD FROM Users WHERE db_email = :email");
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    // Fetch user record
    $user = $stmt->fetch();

    // Verify password and handle login
    if ($user && password_verify($password, $user["PWD"])) {
      $_SESSION["user_id"] = $user["db_id"]; // Store user ID in session
      echo json_encode(["success" => true, "message" => "Login successful."]);
    } else {
      echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }
  } catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Login failed: " . $e->getMessage()]);
  }
}
