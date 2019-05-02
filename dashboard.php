<?php
session_start();

if (empty($_SESSION)) {
    header('Location: http://localhost/first_demo/login.php');
}

//move this code to common function file
if (isset($_GET) && $_GET['logout'] == 'true') {
    if (isset($_SESSION) && $_SESSION['login'] == true) {
        session_destroy();
        header('Location: http://localhost/first_demo/login.php');
    } else {
        die('I am already out');
    }
    
}

?>

<?php include_once('./partials/header.php'); ?>

DASHBOARD HERE I am <?php echo $_SESSION['user']['first_name'] . " ". $_SESSION['user']['last_name'];?>!!

<a href='dashboard.php?logout=true'>Logout</a>

<?php include_once('./partials/footer.php');?>