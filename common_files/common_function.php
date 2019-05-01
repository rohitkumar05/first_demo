<?php
class CommonFunction {


    public function encrypt_our_password($password) {
        return hash('sha256', $password);
    }
}