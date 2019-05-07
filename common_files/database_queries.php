<?php
session_start();
require_once('db_connect.php');
class DbQueries extends DbConnect
{
    public function saveUser($userData, $encrypted_password) {
        $sql="insert into users(first_name,last_name,email,password,gender,address,phone_number,
        zip_code,city,state,country)
        values('".$userData['first_name']."','".$userData['last_name']."',
        '".$userData['email']."','$encrypted_password','".$userData['gender']."',
        '".$userData['address']."','".$userData['phone_number']."','".$userData['zip_code']."',
        '".$userData['city']."','".$userData['state']."','".$userData['country']."')";

        if ($this->conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $this->conn->error;
        }

        $this->conn->close();

    }


    public function login_user($data, $commfun) {
        $encyypted_password = $commfun->encrypt_our_password($data['password']);

        $sql = "SELECT * FROM users WHERE email = '".$data['email']."' AND password = '".$encyypted_password."'";

        $result=mysqli_query($this->conn,$sql);
        $rows = mysqli_fetch_array($result);
        return $rows;
    }

    public function fetch_users(){
        $sql = "SELECT * FROM users ";
        $result=mysqli_query($this->conn, $sql);
        return $result;

    } 

    public function restaurant_listing(){
        $sql = "SELECT * FROM restaurants ";
        $result=mysqli_query($this->conn, $sql);
        return $result;
    }

    public function getUser($id){
        $dog = "SELECT * FROM users WHERE id = '".$id."'"; 
        $result = mysqli_query($this->conn,$dog);
        $row = mysqli_fetch_array($result);
        //echo "<pre>"; print_r($row); die;
        return $row;
    }
    public function getRestaurant($id){ 
        $rest = "SELECT * FROM restaurants WHERE id = '".$id."'";
       
        $result2 = mysqli_query($this->conn,$rest);
        
        $row = mysqli_fetch_array($result2);
       
        return $row; 
        
    }

    public function saveEdit($abc){
        $sql = "UPDATE users SET first_name='".$abc['first_name']."',last_name='".$abc['last_name']."',
        gender='".$abc['gender']."',address='".$abc['address']."',phone_number='".$abc['phone_number']."',zip_code='".$abc['zip_code']."',
        city='".$abc['city']."',state='".$abc['state']."',country='".$abc['country']."'  WHERE id=". $abc['id'];

         if ($this->conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $this->conn->error;
        }
        $this->conn->close();
    }
    
    public function editRestaurant($done){
        $sql = "UPDATE restaurants SET name='".$done['name']."',phone_number='".$done['phone_number']."',address='".$done['address']."',city='".$done['city']."',zip_code='".$done['zip_code']."',state='".$done['country']."' WHERE id=". $done['id'];
        //echo "<pre>"; print_r($sql); die;
        if ($this->conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $this->conn->error;
        }
        $this->conn->close();
    }
    

    public function deleteData($id){
        $sky = "DELETE FROM users WHERE id = '".$id."'";
        //echo "<pre>"; print_r($sky); die;
        $result1 = mysqli_query($this->conn,$sky);
        // echo "<pre>"; print_r($sky); die;
     }

    public function deleteRestaurant($id){
        $rose ="DELETE FROM restaurants WHERE id = '".$id."'";
        $result2 = mysqli_query($this->conn,$rose);

    }

     public function restaurantAdd($restaurantData){
        //  die("hgfgasdgha");
         //echo '<pre>'; print_r($restaurantData);die;

         $user_id = $_SESSION['user']['id'];
         $sql= "Insert into restaurants(user_id, name, address, phone_number, city, zip_code, state, country) values ($user_id, '".$restaurantData['name']."', '".$restaurantData['address']."', '".$restaurantData['phone_number']."', '".$restaurantData['city']."', '".$restaurantData['zip_code']."', '".$restaurantData['state']."', '".$restaurantData['country']."')";
         if ($this->conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $this->conn->error;
        }

        $this->conn->close();

    }
    
}    
