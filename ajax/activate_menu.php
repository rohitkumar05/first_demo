<?php
require_once('../common_files/database_queries.php');
$dbQueries = new DbQueries;

$status = $dbQueries->menuStatus($_REQUEST['id']);
$response['status'] =$status;
echo json_encode($response);
?>