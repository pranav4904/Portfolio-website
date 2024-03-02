<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "pranavtikone4904@gmail.com"; 
    $subject_mail = "New Contact Form Submission - $subject";
    $message_body = "Full Name: $full_name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Phone Number: $phone_number\n\n";
    $message_body .= "Message:\n$message";

    
    $headers = "From: $email\r\n";

    // Send the email
    mail($to, $subject_mail, $message_body, $headers);
    
    header("Location: thank_you.html");
    exit();
}
?>
