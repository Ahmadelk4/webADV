<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

  http_response_code(200);
  exit();
}

require_once "db_connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {

  $db_prod_name = $data['db_prod_name'];
  $db_size = $data['db_size'];
  $db_amount = $data['db_amount'];
  $db_prod_main_image = $data['db_prod_main_image'];
  $db_color = $data['db_color'];
  $db_price = $data['db_price'];

  try {

    $stmt = $con->prepare(
      "INSERT INTO cart (db_prod_name, db_size, db_amount, db_prod_main_image, db_color, db_price) 
       VALUES (:db_prod_name, :db_size, :db_amount, :db_prod_main_image, :db_color, :db_price)"
    );

    $stmt->bindParam(':db_prod_name', $db_prod_name);
    $stmt->bindParam(':db_size', $db_size);
    $stmt->bindParam(':db_amount', $db_amount);
    $stmt->bindParam(':db_prod_main_image', $db_prod_main_image);
    $stmt->bindParam(':db_color', $db_color);
    $stmt->bindParam(':db_price', $db_price);

    if ($stmt->execute()) {
      echo json_encode(["message" => "Product added to cart successfully."]);
    } else {
      http_response_code(500);
      echo json_encode(["message" => "Failed to add product to cart."]);
    }
  } catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Database error: " . $e->getMessage()]);
  }
} else {
  http_response_code(400);
  echo json_encode(["message" => "Invalid input."]);
}
