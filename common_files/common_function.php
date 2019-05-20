<?php
class CommonFunction {


    public function encrypt_our_password($password) {
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

    public function countryList() {
        $countries = ["India", "Japan", "United States of America", "South Korean", "Germany", "China", 
        "England", "Canada", "Sweden", "Kerala", "Australia", "Russia", "Finland"];
        return $countries;
    }

    public function stateList(){
        $states =["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
        "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Maharashtra"];
        return $states;
    }
    public function itemList(){
        $categories =["Veg","Non-Veg","Fast-Food"];
        return $categories;
    }
    public function statusList(){
        $status =["Active","Inactive"];
        return $status;
    }


    public function fileUpload($target_file, $img){
        // die($target_file);
        if (move_uploaded_file($img["image"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $img["image"]["tmp_name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }

    }
    public function imageUpload($target_file,$img){
        if (move_uploaded_file($img["image"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $img["image"]["tmp_name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }


    }
}

?>
