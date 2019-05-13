<?php

class RestaurantValidation  {
        public function menuValidate($data){
        $errors = [];
        if (empty($data['name'])) {
        $errors['item_name'] = "Please enter Name" ;
        }
        if (empty($data['price'])){
        $errors['price'] = "Please Enter Phone Number" ;
        }
        if (empty($data['categories'])){
            $errors['categories'] = "Please Enter  Address" ;
        }
        return $errors;
            //die($errors);
    }
};