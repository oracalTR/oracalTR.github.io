<?php 
$your_name = $_POST['your_name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$kolper = $_POST['kolper'];
$email = $_POST['email'];
$msg = $_POST['msg'];
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
$mail->Body    = "Имя пользователя:".htmlspecialchars($your_name)."<br /> Телефон:".htmlspecialchars($phone)."<br /> Дата:".htmlspecialchars($date)."<br /> Дата: ГГГГ-ММ-ДД <br /> Время:".htmlspecialchars($time)."<br /> Количество персон:".htmlspecialchars($kolper)."<br /> E-mail:".htmlspecialchars($email)."<br /> Сообщение:".htmlspecialchars($msg)."<br />";
$mail->AltBody = 'Это сообщение в формате plain text';

if(!$mail->send()) {
    echo 'Сообщение не отправлено.';
    echo 'Ошибка: ' . $mail->ErrorInfo;
} else {
    echo 'Спасибо! Сообщение отправлено.';

}

?>