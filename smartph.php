<?php 
$phone = $_POST['phone'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'luhari@luharihookah.ru';                 // SMTP username
$mail->Password = 'Lcay7tMh';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('luhari@luharihookah.ru', 'Luhari Hookah');
$mail->addAddress('info@luharihookah.ru', 'Info Hookah');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = "Клиент просит перезвонить на телефон:".htmlspecialchars($phone)."<br />";
$mail->AltBody = 'Это сообщение в формате plain text';

if(!$mail->send()) {
    echo 'Сообщение не отправлено.';
    echo 'Ошибка: ' . $mail->ErrorInfo;
} else {
    echo 'Спасибо! Сообщение отправлено.';

}

?>