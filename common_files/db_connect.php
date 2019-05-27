<?php

class DbConnect
{
    protected $conn;
    
    public function __construct($conn) {
       
        $this->conn = new mysqli("localhost","root","hms@2019","first");
        if ($conn->connect_error) {
            die($sql); ("Connection failed: " . $conn->connect_error);
        } 
        echo "Connected successfully";
    }
}
?>