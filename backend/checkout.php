<?php
require_once 'db_connection.php';

header("Content-Type: application/json");


$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['cartItems'])) {
  echo json_encode(["success" => false, "message" => "No items found in cart."]);
  exit;
}

$cartItems = $data['cartItems'];
$errors = [];
$successCount = 0;

foreach ($cartItems as $item) {
  try {

    $stmt = $db->prepare("INSERT INTO orders (product_id, name, price, quantity, total_price) 
                              VALUES (:product_id, :name, :price, :quantity, :total_price)");
    $stmt->execute([
      ":product_id" => $item['id'],
      ":name" => $item['name'],
      ":price" => $item['price'],
      ":quantity" => $item['quantity'],
      ":total_price" => $item['quantity'] * $item['price']
    ]);

    $successCount++;
  } catch (PDOException $e) {

    $errors[] = [
      "product_id" => $item['id'],
      "error" => $e->getMessage()
    ];
  }
}


if ($successCount > 0) {
  $response = [
    "success" => true,
    "message" => "Order processed successfully for $successCount items.",
    "errors" => $errors
  ];
} else {
  $response = [
    "success" => false,
    "message" => "Failed to process the order.",
    "errors" => $errors
  ];
}

echo json_encode($response);
