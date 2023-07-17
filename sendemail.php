<?php
   $full_name = $_POST['name'];
   $email_address = $_POST['email'];
   $mobile_phone = $_POST['phone'];
   $email_subject = $_POST['subject'];
   $their_message = $_POST['message'];
   $to = 'u21506915@tuks.co.za';
   $email_body = "Full Name: $name.\n".
                  "Email Address: $email_address.\n".
                  "Mobile Phone: $mobile_phone.\n".
                  "Their Message: $their_message.\n";
   $headers = "From: $email_address \r\n".
               "Reply-To: $to \r\n";
               
   mail($to, $email_subject, $email_body, $headers);
   header("Location: index.html")
?>
