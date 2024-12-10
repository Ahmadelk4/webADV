<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

require 'db_connection.php';

try {
  $data = json_decode(file_get_contents("php://input"), true);

  if (!$data) {
    throw new Exception("Invalid input data");
  }

  $stmt = $con->prepare("INSERT INTO Products (
        db_prod_name, db_prod_detail, db_size, db_amount, db_prod_main_image, 
        db_prod_thum1_image, db_prod_thum2_image, db_prod_thum3_image, db_color, 
        db_category, db_price, db_discount, db_created_at
    ) VALUES (
        :name, :description, :sizes, :stock, :main_image, 
        :thum1, :thum2, :thum3, :color, :category, :price, :discount, NOW()
    )");

  $stmt->execute([
    ':name' => $data['name'],
    ':description' => $data['description'],
    ':sizes' => $data['sizes'],
    ':stock' => $data['stock'],
    ':main_image' => $data['main_image'],
    ':thum1' => $data['thum1'],
    ':thum2' => $data['thum2'],
    ':thum3' => $data['thum3'],
    ':color' => $data['color'],
    ':category' => $data['category'],
    ':price' => $data['price'],
    ':discount' => $data['discount']
  ]);

  echo json_encode(['status' => 'success', 'message' => 'Product added successfully']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
