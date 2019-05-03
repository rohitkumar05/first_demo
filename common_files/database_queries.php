<?php
require_once('db_connect.php');
class DbQueries extends DbConnect
{
    public function saveUser($userData, $encrypted_password) {
        $sql="insert into users(first_name,last_name,email,password,gender,address,phone_number,zip_code,city,state,country)
        values('".$userData['first_name']."','".$userData['last_name']."','".$userData['email']."','$encrypted_password','".$userData['gender']."','".$userData['address']."','".$userData['phone_number']."','".$userData['zip_code']."','".$userData['city']."','".$userData['state']."','".$userData['country']."')";

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

    public function getUser($id){
        $dog = "SELECT * FROM users WHERE id = '".$id."'"; 
        $result=mysqli_query($this->conn,$dog);
        $row = mysqli_fetch_array($result);
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
}
