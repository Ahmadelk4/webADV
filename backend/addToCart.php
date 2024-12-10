<?php

header("Access-Control-Allow-Origin: http://localhost:5174"); // Allow your frontend origin
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST requests
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers
header("Access-Control-Allow-Credentials: true"); // Allow cookies if needed

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Respond to preflight request
  http_response_code(200);
  exit();
}

require_once "db_connection.php"; // Include the DB connection file

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
  // Extract the product details from the JSON data
  $db_prod_name = $data['db_prod_name'];
  $db_size = $data['db_size'];
  $db_amount = $data['db_amount'];
  $db_prod_main_image = $data['db_prod_main_image'];
  $db_color = $data['db_color'];
  $db_price = $data['db_price'];

  try {
    // Prepare and execute the insert query
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
