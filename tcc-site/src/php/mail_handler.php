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

    $mail->setFrom('john@theclosingcut.com');

    // Recipients
    // $mail->addAddress('carlos@theclosingcut.com');
    $mail->addAddress('jrwmacintire@gmail.com');

    // Add HTML email functionality
    $mail->isHTML(true);

    // Subject line of email
    $mail->Subject = 'New Form Submission for The Closing Cut';

    // Body of email
    $mail->Body = '<h1>New form submisson from theclosingcut.com</h1>
                   <p>Name: ' . $_POST['full_name'] . '</p>
                   <p>Email address: ' . $_POST['email'] . '</p>
                   <p>Phone number: ' . $_POST['phone_number'] . '</p>
                   <p>Message: ' . $_POST['message'] . '</p>';

    // Alternative email, for non-HTML email client
    $mail->AltBody = "Email Test\r\nThis email was sent through the Amazon SES SMTP interface using the PHPMailer class.";

    if(isset('full_name')){

    }

    if(!$mail->send()) {
        echo 'Email not sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        header("Location: http://theclosingcut.com");
    }
?>
