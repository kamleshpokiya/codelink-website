<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/phpmailer/phpmailer/src/Exception.php';
    require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require 'vendor/phpmailer/phpmailer/src/SMTP.php';

    // Get Form Data
    $data = json_decode(file_get_contents('php://input'), true);
    $UserInfo = array(
        'firstname' => isset($data['firstname']) ? $data['firstname'] : null,
        'lastname' => isset($data['lastname']) ? $data['lastname'] : null,
        'email' => isset($data['email']) ? $data['email'] : null,
        'phoneNumber' => isset($data['phoneNumber']) ? $data['phoneNumber'] : null,
        'aboutProject' => isset($data['aboutProject']) ? $data['aboutProject'] : null,
        'aboutCodelink' => isset($data['aboutCodelink']) ? $data['aboutCodelink'] : null,
        'message' => isset($data['message']) ? $data['message'] : null,
        'ndaSign' => isset($data['ndaSign']) ? $data['ndaSign'] : null,
        'token' => isset($data['token']) ? $data['token'] : null,
    );

   
    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'codelinkinfotech.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@codelinkinfotech.com';
    $mail->Password   = 'f2kLkyf{kjn0';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;


    $emailInfo = array(
        'contact_us_form' => array(
            'client_file_name' => 'c_s_c.php',
            'server_file_name' => 's_c_c.php',
            'client_subject' => 'Contact us : New email',
            'server_subject' => 'Greetings and thank you for reaching out - Codelink infotech',
        ),
        'hire_us_form' => array(
            'client_file_name' => 'c_s_h.php',
            'server_file_name' => 's_c_h.php',
            'client_subject' => 'Hire us : New email',
            'server_subject' => 'Greetings and thank you for reaching out - Codelink infotech',
        ),
    );


    $toServer = handleSendEmail($mail, $emailInfo, $UserInfo, $action = null);

    if($toServer == 1){
        $toClient = handleSendEmail($mail, $emailInfo, $UserInfo, $action = 'toClient');

        if($toClient == 1){
            echo 200;
        }else{
            echo 400;
        }
    }else{
        echo 400;
    }

        

    function handleSendEmail ($mail, $emailInfo, $UserInfo, $action){

        $file_name = $emailInfo[$UserInfo['token']]['client_file_name'];
        $subject = $emailInfo[$UserInfo['token']]['client_subject'];
        $to = 'info@codelinkinfotech.com';
        
        if($action == 'toClient'){
            $file_name = $emailInfo[$UserInfo['token']]['server_file_name'];
            $subject = $emailInfo[$UserInfo['token']]['server_subject'];
            $to = $UserInfo['email'];
        }

        $generated_template = generate_template($file_name,$UserInfo);
    
        return email_send( $mail, $to, $subject, $generated_template );
    }
    
    function email_send( $mail, $to, $subject, $generated_template ){
        //Recipients
        $mail->setFrom('info@codelinkinfotech.com', 'Codelink Infotech');
        $mail->addAddress($to);
        $mail->addReplyTo('info@codelinkinfotech.com', 'Information');
    
        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;

        $mail->MsgHTML($generated_template);

        if($mail->send()){
            return true;
        }else{
            return false;
        }
    }

    function generate_template($file_name, $UserInfo){
        
        // Template
        $template = file_get_contents($file_name);

        foreach($UserInfo as $key => $value){
            $template = str_replace('{{ '.$key.' }}', $value, $template);
        }

        return $template;
    }

?>