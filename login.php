<?php
session_start();
if ($_POST['submit']) {
    //Code block to validate fields
    require_once('./common_files/validate.php');
    $validate = new Validations();
    $errors = $validate->validate_login_form($_POST);
    

    if (empty($errors)) {
        require_once('./common_files/database_queries.php');
        require_once('./common_files/common_function.php');
        $dbQueries = new DbQueries();
        $commfun = new CommonFunction();
        
        $userDetail = $dbQueries->login_user($_POST, $commfun);
        if ($userDetail) {
            //move this code to common function file
            $_SESSION['user'] = $userDetail;
            $_SESSION['login'] = true;
            header('Location: http://localhost/first_demo/dashboard.php');
        }

    }
}
?>

<?php include_once('./partials/header.php'); ?>

<form action=""  method="POST" id="myform123" novalidate>

<div class="form-group">
    <table class="table table-striped">
      
<h1 style="color:black;"> USER  LOGIN </h1>
<tr>
<th>E-MAIL:</th>
<td>
  <input type="email" placeholder="ENTER E-MAIL :" name="email" class="demo">
  <?php 
    if (isset($errors['email'])) {
      ?>
        <label><?php echo $errors['email'] ?></label>
      <?php
    }
 ?>
</td>
</tr>
<tr>
<th>PASSWORD:</th>
<td><input type="password" id="password" placeholder="ENTER PASSWORD :" name="password" class="demo">
<?php 
    if (isset($errors['password'])) {
      ?>
        <label><?php echo $errors['password'] ?></label>
      <?php
    }
 ?> 
</td>
</tr>
<div class="container">
<tr>
<td></td>
   <td><input type="submit" class="btn btn-default" value="SUBMIT" name="submit"></td>
   
</tr>
</div>

</table>
</form>

</center>

<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/user_validation.js"></script>

<?php include_once('./partials/footer.php');?>