<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include('db_connection.php');


$sql = "SELECT 
            db_id, 
            db_prod_name, 
            db_prod_detail, 
            db_prod_main_image,
            db_category, 
            db_price, 
            db_discount
        FROM Products
        GROUP BY db_prod_name 
       ORDER BY db_created_at DESC
        ";

try {
  $stmt = $con->prepare($sql);

  $stmt->execute();

  $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

  if ($products) {
    echo json_encode($products);
  } else {
    echo json_encode([]);
  }
} catch (PDOException $e) {
  echo json_encode(['error' => 'Failed to fetch products: ' . $e->getMessage()]);
}

$con = null;
