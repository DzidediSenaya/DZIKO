<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $amount = $_POST["amount"];

    // Email configuration
    $to = "donations@dzikoccj.com";
    $subject = "Donation Details";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Donation Amount: $amount\n";
    $headers = "From: www.dzikoccj.com";

    // Send email
    mail($to, $subject, $message, $headers);
}
?>
