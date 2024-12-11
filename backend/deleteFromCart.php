<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
include('sessionManger.php');

include('db_connection.php');


$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['id'])) {
  $id = $data['id'];

  try {

    $sql = "DELETE FROM cart WHERE db_id = :id";
    $stmt = $con->prepare($sql);


    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
      echo json_encode(['success' => true, 'message' => 'Product deleted successfully']);
    } else {
      echo json_encode(['success' => false, 'message' => 'Failed to delete product']);
    }
  } catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
  }
} else {
  echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
