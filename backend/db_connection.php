<?php

try {
  $con = new PDO("mysql:host=localhost; dbname=zone", "root", "");
  $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (\PDOException $e) {
  die("Connectio faild" . $e->getMessage());
}
