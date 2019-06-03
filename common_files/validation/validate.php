<?php
include_once('common_files/db_connect.php');

   class Validations extends DbConnect {
      
      private function validateEmail($mail) {
         
         $sql = "SELECT * FROM users WHERE email = '".$mail."'";
         $result=mysqli_query($this->conn,$sql);
         $rows = mysqli_num_rows($result);
         if ($rows > 0) {
           return true;  
         } else {
           return false;
         }
      }
      
      public function validate_user_form($data) {

         $errors = [];
         if (empty($data['first_name'])) {
            $errors['first_name'] = "Please enter First Name" ;
         }
         if (empty($data['last_name'])) {
            $errors['last_name'] = "Please enter Last Name" ;
         }

         if (empty($data['email'])) {
            $errors['email'] = "Please enter Email" ;
         } else {
            if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $errors['email'] = "Please enter valid Email" ;
             }
             if ($this->validateEmail($data['email'])) {
               $errors['email'] = "Email Already exists" ;
             }
         }

        

         if (empty($data['password'])) {
            $errors['password'] = "Please enter password" ;
         }

         if (empty($data['confirm_password'])) {
            $errors['confirm_password'] = "Please enter confirm password" ;
         }

         if (!empty($data['password']) && !empty($data['confirm_password'])) {
            if (strcmp($data['password'], $data['confirm_password']) != 0) {
                $errors['password'] = "Password and confirm password do not match" ;
            }
         }

         

         if (empty($data['gender'])) {
            $errors['gender'] = "Please enter gender" ;
         }
         if (empty($data['address'])) {
            $errors['address'] = "Please enter address" ;
         }
         if (empty($data['phone_number'])) {
            $errors['phone_number'] = "Please enter phone number" ;
         }
         if (empty($data['zip_code'])) {
            $errors['zip_code'] = "Please enter zip code" ;
         }

         if (empty($data['city'])) {
            $errors['city'] = "Please enter city" ;
         }

         if (empty($data['state'])) {
            $errors['state'] = "Please enter state" ;
         }

         if (empty($data['country'])) {
            $errors['country'] = "Please enter state" ;
         }
         return $errors;
      }

      public function validate_login_form($data) {
         $errors = [];
         if (empty($data['email'])) {
            $errors['email'] = "Please Enter Email";
         }

         if (empty($data['password'])) {
            $errors['password'] = "Please Enter Password";
         }
         return $errors;
      }


      public function validate_edit_form($data){
         $errors = [];
         if (empty($data['first_name'])) {
            $errors['first_name'] = "Please enter First Name" ;
         }
         if (empty($data['last_name'])) {
            $errors['last_name'] = "Please enter Last Name" ;
         }
         if (empty($data['gender'])) {
            $errors['gender'] = "Please enter gender" ;
         }
         if (empty($data['address'])) {
            $errors['address'] = "Please enter address" ;
         }
         if (empty($data['phone_number'])) {
            $errors['phone_number'] = "Please enter phone number" ;
         }
         if (empty($data['zip_code'])) {
            $errors['zip_code'] = "Please enter zip code" ;
         }

         if (empty($data['city'])) {
            $errors['city'] = "Please enter city" ;
         }

         if (empty($data['state'])) {
            $errors['state'] = "Please enter state" ;
         }

         if (empty($data['country'])) {
            $errors['country'] = "Please enter state" ;
         }
         return $errors;
      }


      public function resetValidatePassword($data, $commanFunction){
         // echo "<pre>"; print_r($commanFunction); die;
         $errors = [];
         if (empty($data['current_password'])){
             $errors['current_password'] = "ENTER CURRENT PASSWORD" ;
         } 
         if (empty($data['new_password'])) {
            $errors['new_password'] = "Please enter confirm password" ;
         }
         if (empty($data['retype_password'])) {
            $errors['retype_password'] = "Please enter confirm password" ;
         }

         if (!empty($data['new_password']) && !empty($data['retype_password'])) {
            if (strcmp($data['new_password'], $data['retype_password']) != 0) {
                $errors['retype_password'] = "Password and confirm password do not match" ;
            }

            $encryptedPassword = $commanFunction->encrypt_our_password($data['current_password']);
            
            if (!$this->validatePassword($encryptedPassword)) {
               $errors['current_password']= "Current password is wrong. Please try again.";
            }

      

          
         
         }
         //echo "<pre>"; print_r($errors); die;
         return $errors;
      }


      private function validatePassword($encryptedPassword) {
         $sql = "Select * from users where email = '". $_SESSION['user']['email']. "' and password = '".$encryptedPassword."'";
         $result=mysqli_query($this->conn,$sql);
         $rows = mysqli_num_rows($result);
         if ($rows > 0) {
           return true;  
         } else {
           return false;
         }
      }
 }
      
?>