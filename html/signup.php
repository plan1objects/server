<?php include_once("./layout/header.html"); ?>
        <form method="post" action="./signup_action.php">
            <label>이름 <input type="text" name='name'> </label><br>
            <label>이메일 <input type="email" name='email'> </label><br>
            <label>학번 <input type="number" name='num'> </label><br>
            <input type="submit" value='가입하기'>
        </form>
<?php include_once("./layout/footer.html"); ?>   