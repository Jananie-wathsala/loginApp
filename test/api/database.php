<?php

session_start();
if(isset($_SESSION['user'])){
  $user = $_SESSION['user'];
}else{
  $user='';
}

if ($user === 'admin') {
  ?>
  {
  "message":"This is secret message only for administrator",
  "success":true
  }
<?php
} else {
  ?>
  {
  "message":"Who are you",
  "success":false
  }
<?php
}
