<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


require "db_connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $username = htmlspecialchars($data["username"]);
  $email = htmlspecialchars($data["email"]);
  $phone = htmlspecialchars($data["phone"]);
  $password = password_hash($data["password"], PASSWORD_BCRYPT);

  try {
    $stmt = $con->prepare("INSERT INTO users (db_username, db_email, db_phone, PWD) VALUES (:username, :email, :phone, :password)");
    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":phone", $phone);
    $stmt->bindParam(":password", $password);

    if ($stmt->execute()) {
      echo json_encode(["success" => true, "message" => "Signup successful."]);
    } else {
      echo json_encode(["success" => false, "message" => "Signup failed."]);
    }
  } catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Signup failed: " . $e->getMessage()]);
  }
}
