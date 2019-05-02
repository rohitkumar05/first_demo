<?php
class CommonFunction {


    public function encrypt_our_password($password) {
        // echo "I m here";die;
        return hash('sha256', $password);
    }


    public function checkSession(){
        if (empty($_SESSION)) {
            return false;
        } else {
            return true;
        }
    }
    
    public function userLogout(){
        if (isset($_SESSION) && $_SESSION['login'] == true) {
            session_destroy();
            header('Location: http://localhost/first_demo/login.php');
        } else {
            die('I am already out');
        }
        
        
    }
    
    public function redrectToLogin(){ 

        if (empty($_SESSION)) {
         header('Location: http://localhost/first_demo/login.php');
        }
            
    }
}

?>
