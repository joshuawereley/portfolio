<?php
   $name = trim(strip_tags($_POST['name']));
   $email = trim(strip_tags($_POST['email']));
   $phone = trim(strip_tags($_POST['phone']));
   $subject = trim(strip_tags($_POST['subject']))
   $message = htmlentities($_POST['message']);
   $to = 'u21506915@tuks.co.za';
   $body = <<<HTML
   $message
   $phone
   HTML;
   $headers = "From: $email\r\n";
   $headers .= "Content-type: text/html\r\n"
   mail($to, $subject, $body, $headers);
   header('Location: index.html');
?>
