<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


require_once 'db_connection.php';

try {
  $query = $con->prepare("SELECT 
                                db_id AS id, 
                                db_prod_name AS name, 
                                db_size AS size, 
                                db_amount AS quantity, 
                                db_prod_main_image AS image, 
                                db_color AS color, 
                                db_price AS price 
                            FROM Cart");
  $query->execute();
  $cartItems = $query->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($cartItems);
} catch (PDOException $e) {
  echo json_encode(["error" => "Error fetching cart data: " . $e->getMessage()]);
}
