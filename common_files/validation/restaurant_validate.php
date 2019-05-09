<?php

class RestaurantValidation  {
        public function validateRestaurant($data){
        $errors = [];
        if (empty($data['name'])) {
        $errors['name'] = "Please enter Name" ;
        }
        if (empty($data['phone_number'])){
        $errors['phone_number'] = "Please Enter Phone Number" ;
        }
        if (empty($data['address'])){
            $errors['address'] = "Please Enter  Address" ;
        }

        if (empty($data['city'])){
            $errors['city'] = "Please Enter City" ;
        }
        if (empty($data['zip_code'])){
            $errors['zip_code'] = "Please Enter ZIP CODE" ;
        }
        if (empty($data['state'])){
            $errors['state'] = "Please Enter State" ;
            }
            if (empty($data['country'])){
                $errors['country'] = "Please Enter  Country" ;
            }
            return $errors;
            //die($errors);
    }

    public function editRestaurant($data){
        $errors = [];
        if (empty($data['name'])) {
        $errors['name'] = "Please enter Name" ;
        }
        if (empty($data['phone_number'])){
        $errors['phone_number'] = "Please Enter Phone Number" ;
        }
        if (empty($data['address'])){
            $errors['address'] = "Please Enter  Address" ;
        }

        if (empty($data['city'])){
            $errors['city'] = "Please Enter City" ;
        }
        if (empty($data['zip_code'])){
            $errors['zip_code'] = "Please Enter ZIP CODE" ;
        }
        if (empty($data['state'])){
            $errors['state'] = "Please Enter State" ;
            }
            if (empty($data['country'])){
                $errors['country'] = "Please Enter  Country" ;
            }
            return $errors;
    }
    



}
?>