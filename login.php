<?php
session_start();
if ($_POST['submit']) {
    //Code block to validate fields
    require_once('./common_files/validation/validate.php');
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
  <div class="container">
    <div class="col-md-12">
    <form action=""  method="POST" id="myform" novalidate>
    <div class="col-md-8 col-md-offset-2">
    <div class="form-group">
                  
            <h1 style="color:black;"> USER  LOGIN </h1>
            <div>
            <label>E-MAIL:</label>

              <input type="email" placeholder="ENTER E-MAIL :" name="email" class="form-control demo">
              <?php 
                if (isset($errors['email'])) {
                  ?>
                    <label><?php echo $errors['email'] ?></label>
                  <?php
                }
            ?>
            </div>
            <br>
            <div>
            <label>PASSWORD:</label>
            <input type="password" id="password" placeholder="ENTER PASSWORD :" name="password" class="form-control demo">
            <?php 
                if (isset($errors['password'])) {
              ?>
                <label><?php echo $errors['password'] ?></label>
              <?php
            }
            ?> 
            </div>
            <br>
            
            <div>
              <input type="submit" class="col-md-8 col-md-offset-2 btn btn-success container " value="LOGIN" name="submit">
            </div>
      </div>
    </div>

  </div>
 </div>
</table>
</form>

</center>

<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
<script src="http://localhost/first_demo/assets/js/user_validation.js"></script>

<?php include_once('./partials/footer.php');?>