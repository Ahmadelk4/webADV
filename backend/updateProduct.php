<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = json_decode(file_get_contents("php://input"), true);

  if (!$input || !isset($input['productId'])) {
    echo json_encode(["error" => "Missing product ID or invalid data"]);
    http_response_code(400);
    exit();
  }

  $productId = $input['productId'];
  $fields = array_filter($input, fn($key) => $key !== 'productId', ARRAY_FILTER_USE_KEY);

  $updates = [];
  foreach ($fields as $field => $value) {
    $updates[] = "`$field` = '" . addslashes($value) . "'";
  }

  $query = "UPDATE products SET " . implode(", ", $updates) . " WHERE id = " . intval($productId);


  echo json_encode(["success" => true, "message" => "Product updated successfully"]);
  http_response_code(200);
} else {
  echo json_encode(["error" => "Invalid request method"]);
  http_response_code(405);
}
