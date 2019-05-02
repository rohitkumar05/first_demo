<?php
session_start();

require_once('./common_files/common_function.php');
$commonFunction = new CommonFunction;
$commonFunction->redrectToLogin();
//move this code to common function file
if (isset($_GET) && $_GET['logout'] == 'true') {
    $commonFunction = new CommonFunction;
    $commonFunction->userLogout();
}
?>

<?php include_once('./partials/header.php'); ?>

DASHBOARD HERE I am <?php echo $_SESSION['user']['first_name'] . " ". $_SESSION['user']['last_name'];?>!!

<a href='dashboard.php?logout=true'>Logout</a>

<?php include_once('./partials/footer.php');?>