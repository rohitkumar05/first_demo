<?php
class CommonFunction {


    public function encrypt_our_password($password) {
        // echo "I m here";die;
        return hash('sha256', $password);
    }
}