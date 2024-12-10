<?php
// Allow CORS and specify the frontend origin
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Include database connection
include('db_connection.php');

// php://input is a special PHP stream that allows you to read raw POST data from the request body.
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['id'])) {
  $id = $data['id'];

  try {
    // Prepare the SQL statement
    $sql = "DELETE FROM Products WHERE db_id = :id";
    $stmt = $con->prepare($sql);

    // Bind the parameter and execute
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
