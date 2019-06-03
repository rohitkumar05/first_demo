<?php
require_once('../common_files/database_queries.php');
$dbQueries = new DbQueries;

$address = $dbQueries->addressAdd($_REQUEST['id']);
$response['status'] = false;
if (!empty($address)) {
    $response['address'] = $address;
$response['status'] = true;
}

echo json_encode($response);
?>