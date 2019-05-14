<?php

class IdemValidation  {
        public function menuValidate($data){
        $errors = [];
        if (empty($data['name'])) {
        $errors['item_name'] = "Please enter Name" ;
        }
        if (empty($data['price'])){
        $errors['price'] = "Please Enter Phone Number" ;
        }
        if (empty($data['categories'])){
            $errors['categories'] = "Please Select  categories" ;
        }
        return $errors;
            //die($errors);
    }

    public function editValidate($data){
        $errors = [];
        if (empty($data['name'])) {
        $errors['item_name'] = "Please enter Name" ;
        }
        if (empty($data['price'])){
        $errors['price'] = "Please Enter Phone Number" ;
        }
        if (empty($data['category'])){
            $errors['category'] = "Please SELECT categories" ;
        }
        return $errors;
            //die($errors);
    }
    
};