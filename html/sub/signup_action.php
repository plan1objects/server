<?php  // $name변수선언, $_POST넘어온정보를 받겠다.[name속성]

$name=$_POST['name'];
$id=$_POST['ID'];
$email=$_POST['email'];
$pw=$_POST['PW'];
$fav=$_POST['checke_fav'];
$city=$_POST['city'];
$tel=$_POST['tel'];
$con = mysqli_connect("localhost","plan1","rjseka12!","plan1") or die ("Can't access DB"); 
// 호스트, 아이디, 비번, 디비명칭 , 접속이안되면 다이안에 코드실행.
// $query = "insert into USERTABLE (id) values('".$name."','".$email."','".$num."')";
$query = "insert into USERTABLE (user_name, user_id, user_pw, user_email, user_fav, user_city, user_tel) 
values('".$name."','".$id."','".$pw."','".$email."','".$fav."','".$city."','".$tel."')";
// 인서트 인투 만들 테이블 명칭(user) (컬럼명들) values(컬럼에들어갈 데이터들을 다 넣어줘야함.)
$resut=mysqli_query($con,$query); // 실제 디비 접속해서 쿼리문을 요청하는 동작 결과값을 result에담음.
if(!$result)
{?>
    <script> alert('회원가입이 완료되었습니다.'); location.href=".."; </script> 
<?php
} else {?>
    <script> alert('회원가입에 실패했습니다.\n다시 시도해 주세요.'); location.href=".."; </script>
<?php } ?>