
<?php


$session_lifetime = 60 * 60;

function startSession($userId, $username)
{
  global $session_lifetime;
  $_SESSION['user_id'] = $userId;
  $_SESSION['username'] = $username;
  $_SESSION['expiry_time'] = time() + $session_lifetime;
  session_regenerate_id(true);
}

function checkSession()
{
  global $session_lifetime;
  if (isset($_SESSION['expiry_time']) && time() > $_SESSION['expiry_time']) {
    endSession();
    http_response_code(401); // Set the HTTP response to Unauthorized.
    echo json_encode(["message" => "Session expired"]); // Send a JSON response.
    exit();
  } elseif (isset($_SESSION['username'])) {
    // Extend session expiry time.
    $_SESSION['expiry_time'] = time() + $session_lifetime;
    return true; // Session is active.
  } else {
    http_response_code(401); // Set the HTTP response to Unauthorized.
    echo json_encode(["message" => "Not logged in"]);
    exit();
  }
}


function endSession()
{
  session_unset();
  session_destroy();
}
?>