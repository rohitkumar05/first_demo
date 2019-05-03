<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">APPNA PROJECT.COM</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="fetch.php">fetch</a></li>
      <li><a href="#">DELETE</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <?php
        
        require_once('./common_files/common_function.php');
        //move this code to common function file
        $commonFunction = new CommonFunction;
        ?>
        <?php if ($commonFunction->checkSession()) { ?>
            <li><a href="dashboard.php?logout=true"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
        <?php

        } else {?>
            <li><a href="users.php"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        <?php } ?>
      

    </ul>
  </div>
</nav>