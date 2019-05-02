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
}
