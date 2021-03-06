<?php
session_start();

require_once('db_connect.php');
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
class DbQueries extends DbConnect
{
    public function saveUser($userData, $encrypted_password) {
        $sql="insert into users(first_name,last_name,email,password,gender,address,phone_number,
        zip_code,city,state,country)
        values('".$userData['first_name']."','".$userData['last_name']."',
        '".$userData['email']."','$encrypted_password','".$userData['gender']."',
        '".$userData['address']."','".$userData['phone_number']."','".$userData['zip_code']."',
        '".$userData['city']."','".$userData['state']."','".$userData['country']."')";

        if ($this->conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $this->conn->error;
        }

        $this->conn->close();

    }
 
    public function userss($etc){
    $sql="insert into tests (name) values ('".$etc['name']."')";
   // echo "<pre>"; print_r($sql); die;
    if ($this->conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $this->conn->error;
    }

    }
    
    public function saveItem($save,$imageName){
        //echo "<pre>"; print_r($save); die;
        // $imageName = time()."_".$img['image']['name'];
        $user_id = $_SESSION['user']['id'];
        $sql="insert into menu(user_id,restaurant_id,item_name,price,category, status, image)values($user_id,'".$save['restaurant_id']."','".$save['item_name']."','".$save['price']."','".$save['category']."', '".$save['status']."', '".$imageName ."')";
          //echo "<pre>"; print_r($target_file); die;
          $lastIndetId = null;
          if ($this->conn->query($sql) === TRUE) {
            $lastIndetId = mysqli_insert_id($this->conn);
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $this->conn->error;
        }

        return $lastIndetId;

        
    }
    public function restaurantAdd($restaurantData,$imageName){
       
        $user_id = $_SESSION['user']['id'];
        $sql= "Insert into restaurants(user_id, name, address, phone_number, city, zip_code, state, country, status, image) values ($user_id, '".$restaurantData['name']."', '".$restaurantData['address']."', '".$restaurantData['phone_number']."', '".$restaurantData['city']."', '".$restaurantData['zip_code']."', '".$restaurantData['state']."', '".$restaurantData['country']."',    '".$restaurantData['status']."','".$imageName ."')";
        //echo "<pre>"; print_r($sql); die;
        $lastIndetId = null;
        if ($this->conn->query($sql) === TRUE) {
          $lastIndetId = mysqli_insert_id($this->conn);
          echo "New record created successfully";
      } else {
          echo "Error: " . $sql . "<br>" . $this->conn->error;
      }

      return $lastIndetId;

      
  }


    public function editSave($key,$imageName){
    //    echo "<pre>"; print_r($imageName); die;
        $sql = "UPDATE menu SET item_name='".$key['item_name']."', price='".$key['price']."', category='".$key['category']."', status='".$key['status']."', image='".$imageName ."' WHERE id=". $key['id'];
       //echo "<pre>"; print_r($sql); die;
        
        
        if ($this->conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $this->conn->error;
        }
        // $this->conn->close();
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
        $result=mysqli_query($this->conn,$sql);
        return $result;

    } 

     public function nameData($id){
        $sql ="SELECT * FROM tests ";
        //echo "<pre>"; print_r($sql); die;
        $result = mysqli_query($this->conn,$sql);
        //echo "<pre>"; print_r($result); die;
        return $result;
    }


    public function intex_user(){
        $sql = "SELECT restaurants.id, restaurants.name, restaurants.address, restaurants.city, restaurants.state, restaurants.country, restaurants.phone_number, restaurants.image, users.id as user_id, users.first_name, users.last_name FROM restaurants inner JOIN users ON users.id = restaurants.user_id where status != 'Inactive' ORDER BY restaurants.id desc"; 
        $result = mysqli_query($this->conn,$sql);
        return $result;
    }
    public function foodlist(){
        $sql = "SELECT restaurants.id, restaurants.name, restaurants.address, restaurants.city, restaurants.state, restaurants.country, restaurants.phone_number, restaurants.image, menu.id, menu.user_id, menu.restaurant_id, menu.item_name, menu.price, menu.category, menu.status, menu.image FROM restaurants LEFT JOIN menu ON menu.restaurant_id = restaurants.id WHERE restaurants.status !='Inactive' AND menu.status !='Inactive'";
        $result = mysqli_query($this->conn,$sql);
        return $result; 
}

    public function itemList($red){
      
        $user_id = $_SESSION['user']['id'];
         
        $sql = "SELECT * FROM menu WHERE user_id=". $user_id;
        //echo "<pre>";print_r($sql); die;
        $result =mysqli_query($this->conn,$sql);
          //  echo "<pre>";print_r($result); die;
        return $result;



    }

    



    
    public function restaurant_listing(){
        $user_id = $_SESSION['user']['id'];
        $sql = "SELECT * FROM restaurants WHERE user_id= ". $user_id;
        $result=mysqli_query($this->conn, $sql);
        return $result;
    }
    

    public function restaurant_dashboard(){
        $user_id = $_SESSION['user']['id'];
        $sql = "SELECT * FROM restaurants WHERE user_id= ". $user_id ." AND status != 'Inactive'";
        $result=mysqli_query($this->conn, $sql);
        return $result;
    }

    public function getUser($id){
        $dog = "SELECT * FROM users WHERE id = '".$id."'"; 
        $result = mysqli_query($this->conn,$dog);
        $row = mysqli_fetch_array($result);
        //echo "<pre>"; print_r($row); die;
        return $row;
    }
   public function getIds($id){
        $sql = "SELECT * FROM menu WHERE id = '".$id."'";
        $result = mysqli_query($this->conn,$sql);
        $row = mysqli_fetch_array($result);
        //echo "<pre>"; print_r($row); die;
        return $row;
   }

    public function getRestaurant($id){ 
        $rest = "SELECT * FROM restaurants WHERE id = '".$id."'";
       
        $result = mysqli_query($this->conn,$rest);
        
        $row = mysqli_fetch_assoc($result);
       
        return $row; 
        
    }

    

public function getItem($id){
    
    $sql = "SELECT * FROM menu WHERE id = '".$id."'";
    $result1 = mysqli_query($this->conn,$sql);
        
    $row = mysqli_fetch_assoc($result1);
    // echo "<pre>"; print_r($row); die;
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
    
    


    public function editRestaurant($done){
        $sql = "UPDATE restaurants SET name='".$done['name']."', phone_number='".$done['phone_number']."', address='".$done['address']."', city='".$done['city']."', zip_code='".$done['zip_code']."', state='".$done['state']."', country='".$done['country']."', status='".$done['status']."' WHERE id=". $done['id'];
       
        if ($this->conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $this->conn->error;
        }
        // if($status == 'Active')
        // {
        //     mysqli_query($this->$conn,"UPDATE `active` SET `status` = 'Inactive'");
        // }
        // else
        // {
        //     mysqli_query($this->$conn,"UPDATE `active` SET `status` = 'Active'");
        // }
    }
    

    public function deleteData($id){
        $sky = "DELETE FROM users WHERE id = '".$id."'";
       
        $result1 = mysqli_query($this->conn,$sky);
      
     }

    public function deleteRestaurant($id){
        $rose ="DELETE FROM restaurants WHERE id = '".$id."'";
        $result2 = mysqli_query($this->conn,$rose);
        
    }

    public function deleteItem($id){
        $csk ="DELETE FROM menu WHERE id = '".$id."'";
        $result = mysqli_query($this->conn,$csk);
    }


    public function deleteDashboard($id){
        $kkr ="DELETE FROM menu WHERE id = '".$id."'";
        $result2 = mysqli_query($this->conn,$kkr);
    }

    public function userReset($users){
        
         if ($this->conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $this->conn->error;
        }
    }

    
    public function resetPassword($data,$commFun){
            
        $encrypted_Password = $commFun->encrypt_our_password($data['new_password']);
        
        $spy ="UPDATE users SET password ='".$encrypted_Password."' where id = '".$_SESSION['user']['id']."'";       
    
        if ($this->conn->query($spy) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $this->conn->error;
        }
        $this->conn->close();
    }

    public function changeStatus($id) {
        $sql = "UPDATE restaurants SET  status='Active' WHERE id=". $id;
       
        if ($this->conn->query($sql) === TRUE) {
            $status = true;
        } else {
            $status = false;
        }
        return $status;
    }

    public function addressAdd($id){
        $sql = "SELECT * FROM restaurants WHERE  id=". $id;
        $result = mysqli_query($this->conn,$sql);
        $row = mysqli_fetch_assoc($result);
        // print_r($row);
        return $row;
    }

    public function menuStatus($id) {
        $sql = "UPDATE menu SET  status='Active' WHERE id=". $id;
       
        if ($this->conn->query($sql) === TRUE) {
            $status = true;
        } else {
            $status = false;
        }
        return $status;
    } 

}    


