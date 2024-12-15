<?php
session_start();




header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_connection.php';

try {

  if (isset($_GET['productName']) && !empty($_GET['productName'])) {
    $productName = $_GET['productName'];


    $stmt = $con->prepare("SELECT * FROM Products WHERE db_prod_name = :productName");
    $stmt->bindParam(':productName', $productName, PDO::PARAM_STR);
    $stmt->execute();
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);


    if (empty($products)) {
      echo json_encode(['error' => true, 'message' => 'No products found for the given name.']);
      exit;
    }


    $groupedProducts = [];

    foreach ($products as $product) {
      $color = $product['db_color'];


      if (!isset($groupedProducts[$productName])) {
        $groupedProducts[$productName] = [
          'name' => $product['db_prod_name'],
          'colors' => []
        ];
      }

      if (!isset($groupedProducts[$productName]['colors'][$color])) {
        $groupedProducts[$productName]['colors'][$color] = [
          'color' => $color,
          'mainImage' => $product['db_prod_main_image'],
          'thumbnails' => [
            $product['db_prod_thum1_image'],
            $product['db_prod_thum2_image'],
            $product['db_prod_thum3_image']
          ],
          'sizes' => []
        ];
      }

      $groupedProducts[$productName]['colors'][$color]['sizes'][] = [
        'size' => $product['db_size'],
        'price' => $product['db_price'],
        'discount' => $product['db_discount'],
        'detail' => $product['db_prod_detail'],
        'mainImage' => $product['db_prod_main_image'],
        'thumbnails' => [
          $product['db_prod_thum1_image'],
          $product['db_prod_thum2_image'],
          $product['db_prod_thum3_image']
        ]
      ];
    }

    echo json_encode(array_values($groupedProducts[$productName]['colors']));
  } else {
    echo json_encode(['error' => true, 'message' => 'Product name is required.']);
  }
} catch (PDOException $e) {
  echo json_encode([
    'error' => true,
    'message' => 'Failed to fetch products: ' . $e->getMessage()
  ]);
}
