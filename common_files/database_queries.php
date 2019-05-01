<?php

class DbQueries
{
    public function saveUser($userData, $encrypted_password) {
        $conn = new mysqli("localhost","root","hms@2019","first");

        if ($conn->connect_error) {
            die($sql); ("Connection failed: " . $conn->connect_error);
        } 
        echo "Connected successfully"; 

        $sql="insert into users(first_name,last_name,email,password,gender,address,phone_number,zip_code,city,state,country)
        values('".$userData['first_name']."','".$userData['last_name']."','".$userData['email']."','$encrypted_password','".$userData['gender']."','".$userData['address']."','".$userData['phone_number']."','".$userData['zip_code']."','".$userData['city']."','".$userData['state']."','".$userData['country']."')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

    }
}
