<?php  // $name변수선언, $_POST넘어온정보를 받겠다.[name속성]
$email=$_POST['email'];
$con = mysqli_connect("localhost","plan1","rjseka12!","plan1") or die ("Can't access DB"); 
// 호스트, 아이디, 비번, 디비명칭 , 접속이안되면 다이안에 코드실행.

$query = "select * from USERTABLE where user_email = '".$email."'";

$result=mysqli_query($con,$query);

if ($result) {  //결과를 정상적으로 받아올 경우 mysqli_num_rows 함수로 해당 결과값의 개수를 뽑음.
    $row_count = mysqli_num_rows($result);
    echo $row_count;
  } else {
    echo "Error: " . mysqli_error($con);
  }
  // Close the MySQLi connection
  mysqli_close($con);

?>
