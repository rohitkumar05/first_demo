<?php

class IdemValidation  {
        public function menuValidate($data){
        $errors = [];
        if (empty($data['item_name'])) {
        $errors['item_name'] = "Please Enter Item Name" ;
        }
        if (empty($data['price'])){
        $errors['price'] = "Please Enter Price" ;
        }
        if (empty($data['category'])){
            $errors['category'] = " Please Select Category" ;
        }
        return $errors;
            //die($errors);
    }

    public function editValidate($data){
        $errors = [];
        if (empty($data['item_name'])) {
        $errors['item_name'] = "Please Enter Item Name" ;
        }
        if (empty($data['price'])){
        $errors['price'] = "Please Enter Price" ;
        }
        if (empty($data['category'])){
            $errors['category'] = "Please Select Category" ;
        }
        return $errors;
            //die($errors);
    }
    
};