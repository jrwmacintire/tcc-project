<?php
    require './vendor/autoload.php';

    // Instantiate a new PHPMailer
    $mail = new PHPMailer;

    // Tell PHPMailer to use SMTP
    $mail->isSMTP();

    // Host Region
    $mail->Host = 'email-smtp.us-west-2.amazonaws.com';

    // Tells PHPMailer to use SMTP authentication
    $mail->SMTPAuth = true;

    // SMTP username
    $mail->Username = 'AKIAIS5GXWVQ2SFKS6DA';

    // SMTP password
    $mail->Password = 'Atb0xYuE+vMnIsEojTNKSNFNKMHN5iJrZWS9EAWlVJQy';

    // Enable SSL encryption
    $mail->SMTPSecure = 'ssl';

    // SMTP mail port
    $mail->Port = 465;

    $mail->setFrom('jrwmacintire@gmail.com');

    $mail->addAddress('john@theclosingcut.com');

    // Add HTML email functionality
    $mail->isHTML(true);

    // Subject line of email
    $mail->Subject = 'Amazon SES test (SMTP interface accessed using PHP)';

    // Body of email
    $mail->Body = '<h1>Email Test</h1>
                   <p>This email was sent through the <a href="http://aws.amazon.com/ses/">Amazon SES</a> SMTP interface using the <a href="https://github.com/PHPMailer/PHPMailer"> PHPMailer</a> class.</p>';

    // Alternative email, for non-HTML email client
    $mail->AltBody = "Email Test\r\nThis email was sent through the Amazon SES SMTP interface using the PHPMailer class.";

    if(!$mail->send()) {
        echo 'Email not sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Email sent!';
    }
?>
