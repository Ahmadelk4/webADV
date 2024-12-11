<?php

session_start();
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require "db_connection.php";

include 'sessionManger.php';

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email = htmlspecialchars($data["email"]);
  $password = $data["password"];

  try {

    $stmt = $con->prepare("SELECT db_username, db_id, PWD FROM Users WHERE db_email = :email");
    $stmt->bindParam(":email", $email);
    $stmt->execute();


    $user = $stmt->fetch();


    if ($user && password_verify($password, $user["PWD"])) {
      startSession($user["db_id"], $user["db_username"]);

      echo json_encode(["success" => true, "userType" => $user["db_username"], "message" => "Welcome back" . $_SESSION['username']]);
    } else {
      echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }
  } catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Login failed: " . $e->getMessage()]);
  }
}
