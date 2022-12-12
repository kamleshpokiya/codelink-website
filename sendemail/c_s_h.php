<!DOCTYPE html>
<html>
    <head>
        <title>Handlebars Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>

        <style>
            .container {
                margin: 10px auto;
                width: 90%;
                max-width: 700px;
                min-width: 700px;
                background-color: white;
                border: 2px solid #c5bcbc73;
            }

            .header {
                height: 100px;
                background-color: white;
                border-bottom: 2px solid #c5bcbc73;
            }

            .header img {
                width: 180px;
                margin: 25px 40px;
            }

            .content {
                padding: 5px 40px 20px 40px;
                font-size: 15px;
                color: black;
            }

            .content p {
                margin: 20px 0px;
            }
            .contact_details {
                color: black !important;
            }

            .contact_details div {
                margin-bottom: 5px;
            }

            .contact_details a {
                text-decoration: none;
                color: #ff8d00;
            }

            .last_tag {
                margin-bottom: 30px;
            }

            .last_tag .pl1 {
                margin: 7px 0px;
            }

            .last_tag .pl2 {
                margin: 7px 0px;
            }

            .address {
                background-color: #ff8d00;
            }

            .address p {
                margin: 0px 40px;
                font-size: 15px;
                line-height: 25px;
                color:  #063F5C;
                padding: 15px 0px;
            }

            .footer {
                display: flex;
                flex-direction: row;
                justify-content: space-around !important;
                align-items: center !important;
                font-size: 15px;
                padding: 25px 40px;
                background-color: #063F5C;
            }

            .footer a {
                text-decoration: none;
                color: #ffffffc2;
            }

            .footer .social-icons {
                margin-bottom: -5px;
            }

            .footer .social-icons img {
                width: 15px;
                height: 17px;
                padding: 6px 7px;
                border-radius: 4px;
                margin-right: 5px !important;
                background-color: #ff8d00!important;
            }

            .footer .tel-number {
                margin: auto auto;
            }

            .footer .web-link {
                margin: auto 0px;
            }



            /* s_c_h  */

            .after_last_tag {
                font-size: 13px;
                margin: 0px;
                color: #063f5c;
            }

            .after_last_tag p {
                margin: 5px 0px;
            }

            .address_inside_div {
                margin: 0px 40px;
                padding: 1px 0px;
                color: #063f5c;
            }

            .address_inside_div ul {
                padding: 0px;
                font-size: 14px;
                color: #ffffffde;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://codelinkinfotech.com/images/email_images/codelink.png" alt="Codelink Infotech" >
            </div>

            <div class="content">
                <h4>Following is information about new inquiry.</h4>
                <p>First ame : {{ firstname }}</p>
                <p>Last Name : {{ lastname }}</p>
                <p>Email : <a href="mailto:{{ email }}" style="text-decoration: none; color : #ff8d00;">{{ email }}</a></p>
                <p>Phone : {{ phoneNumber }}</p>
                <p><strong>About the project :</strong> {{ aboutProject }}</p>
                <p><strong>How heard us ? :</strong> {{ aboutCodelink }}</p>
                <p>Need NDA ? : {{ ndaSign }}</p>  
            </div>

            <div class="address">
                <p>402, Valentina Business Hub, LP Savani Rd, near Shell Petrol Pump, Adajan,Surat, Gujarat 395009</p>
            </div>

            <div class="footer">
                <div class="web-link">
                    <a href="http://www.codelinkinfotech.com/">www.codelinkinfotech.com</a>
                </div>

                <div class="tel-number">
                    <a href="tel:+91 8320246700">+91 8320246700</a>
                </div>

                <div class="social-icons">
                    <span>
                        <a href="https://www.facebook.com/codelinkinfotech">
                            <img src="https://codelinkinfotech.com/images/email_images/facebook.png" alt="">
                        </a>
                    </span>

                    <span>
                        <a href="https://www.linkedin.com/company/codelink-infotech/">
                            <img src="https://codelinkinfotech.com/images/email_images/linkedin.png" alt="">
                        </a>
                    </span>
                    
                    <span>
                        <a href="https://www.instagram.com/codelinkinfotech/">
                            <img src="https://codelinkinfotech.com/images/email_images/instagram.png" alt="">
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </body>
</html>