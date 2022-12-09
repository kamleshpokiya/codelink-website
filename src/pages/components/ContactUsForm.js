import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUsForm = () => {

// Input State
const [hireUsFormInput, setHireUsFormInput] = useState({
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    MMERGE3: "",
    MMERGE4: "",
    MMERGE5: "",
    MMERGE6: "",
    "group[6483][1]": false,
    "group[6487][2]": false,
    resdata: "",
    token : '',
});


// Input Errors
const [inputError, setInputError] = useState({
    fnameError : {
        color : 'black'
    },
    lnameError : {
        color : 'black'
    },
    emailError : {
        color : 'black'
    },
    policyError : {
    }
});


// To Hide Form Modal
const hideHireUsForm = () => {
    document.getElementById("hideme").click();
    setHireUsFormInput((previousState) => {
        return { ...previousState, resdata: "" };
    });
};



// Handle Input Change
const handleInputChange = (e) => {
    const name = e.target.name;
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setHireUsFormInput((previousState) => {
        return { ...previousState, [name]: value };
    });


    // Set token
    if(name === 'group[6487][2]'){
        let token_id = e.target.attributes.getNamedItem('token_id').value;
        let token_value = '';
        if(token_id === 'hire_us_form'){
            token_value = token_id;
        }else{
           token_value = 'contact_us_form';
        }

        setHireUsFormInput((previousState) => {
            return { ...previousState, token : token_value };
        });

    }

};


const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
        "firstname": `${hireUsFormInput.FNAME}`,
        "lastname": `${hireUsFormInput.LNAME}`,
        "email": `${hireUsFormInput.EMAIL}`,
        "phoneNumber": `${hireUsFormInput.MMERGE3}`,
        "aboutProject": `${hireUsFormInput.MMERGE4}`,
        "aboutCodelink": `${hireUsFormInput.MMERGE5}`,
        "message": `${hireUsFormInput.MMERGE6}`,
        "ndaSign": `${hireUsFormInput["group[6483][1]"]}`,
        "token" : `${hireUsFormInput.token}`
    };

    let isFormValid = validateForm();
    if(isFormValid === true){
        document.getElementById('mc-embedded-subscribe').disabled = true;
        document.getElementById('mc-embedded-subscribe').style.cursor = 'not-allowed';

        // create a new XMLHTTPRequest
        var xhr = new XMLHttpRequest();
        
        // get a callback when server response
        xhr.addEventListener('load', () => {
            // update the state with response
            handleResponse(xhr.responseText);
        });
        
        xhr.open('POST', 'https://codelinkinfotech.com/sendemail/index.php');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        // send the request
        xhr.send(JSON.stringify(data));
    }
};
    

// Handle Email Response
const handleResponse = async (responseText) => {
    if (responseText === '200') {

        document.getElementById("mc-embedded-subscribe-form").reset();
        setHireUsFormInput({
        FNAME: "",
        LNAME: "",
        EMAIL: "",
        MMERGE3: "",
        MMERGE4: "",
        MMERGE5: "",
        MMERGE6: "",
        "group[6483][1]": false,
        "group[6487][2]": false,
        token : '',
        resdata: "Email sent to codelink infotech successfully !",
        });

        document.getElementById("mc-embedded-subscribe").disabled = false;
        document.getElementById('mc-embedded-subscribe').style.cursor = '';

        setTimeout(() => {
            setHireUsFormInput((previousState) => {
                return {...previousState, resdata: "",
                };
            });
        }, 3000);

    } else {
        document.getElementById("mc-embedded-subscribe").disabled = false;  
        document.getElementById('mc-embedded-subscribe').style.cursor = '';
        
        setHireUsFormInput((previousState) => {
        return {...previousState, resdata: "Oops.. Request not sent !!!", token : '',};
        });
    }
};
    

// Contact Form Validation
const validateForm = () => {
       
    let is_valied = true;

    // firstname 
    if ( hireUsFormInput.FNAME === "") {
        setInputError((previousState) => {
        return { ...previousState, fnameError : { color : 'red' } };
        });
        is_valied = false;
    } else {
        setInputError((previousState) => {
        return { ...previousState, fnameError : { color : 'black' } };
        });
    }


    // lastname 
    if ( hireUsFormInput.LNAME === "") {
        setInputError((previousState) => {
        return { ...previousState, lnameError : { color : 'red' } };
        });
        is_valied = false;
    } else {
        setInputError((previousState) => {
        return { ...previousState, lnameError : { color : 'black' } };
        });
    }


    // email 
    if (hireUsFormInput.EMAIL === "") {
        setInputError((previousState) => {
        return { ...previousState, emailError : { color : 'red' } };
        });
        is_valied = false;
    } else {
        setInputError((previousState) => {
        return { ...previousState, emailError : { color : 'black' } };
        });
    }

    // termsandconditions 
    if (!hireUsFormInput["group[6487][2]"] === true ) {
        setInputError((previousState) => {
        return { ...previousState, policyError : { border: '1px solid red', boxShadow: '0px 0px 6px red' } };
        });
        is_valied = false;
    } else {
        setInputError((previousState) => {
        return { ...previousState, policyError : {} };
        });
    }

    // continue if valid
    if(is_valied){
        return true;
    }
    
};


return (

<>
    <div id="mc_embed_signup_scroll">
        <div className="indicates-required" id="mc-1" style={{color : '#063f5c' , padding : '10px 0px', fontSize : '20px', textShadow : '0px 0px 2px #063f5c', fontFamily : 'verdana'}}>
            {hireUsFormInput.resdata}
        </div>
        <div className="indicates-required">
        <span className="asterisk">*  </span>
            indicates required
        </div>
        <div className="mc_embed_signup_wrapper">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="mc-field-group">
                        <label
                            htmlFor="mce-FNAME"
                            style={inputError.fnameError}
                        >
                            What is your first name ?
                            <span className="asterisk"> * </span>
                        </label>
                        <input
                            type="text"
                            value={hireUsFormInput.FNAME}
                            name="FNAME"
                            className="required"
                            id="mce-FNAME"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mc-field-group">
                        <label
                            htmlFor="mce-LNAME"
                            style={inputError.lnameError}
                        >
                            What is your last name ?
                            <span className="asterisk"> *</span>
                        </label>
                        <input
                            type="text"
                            value={hireUsFormInput.LNAME}
                            name="LNAME"
                            className="required"
                            id="mce-LNAME"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="mc-field-group">
                        <label
                            htmlFor="mce-EMAIL"
                            style={inputError.emailError}
                        >
                            What is your email ?
                            <span className="asterisk"> *</span>
                        </label>
                        <input
                            type="email"
                            value={hireUsFormInput.EMAIL}
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mc-field-group size1of2">
                        <label htmlFor="mce-MMERGE3">
                            What is your phone number ?
                        </label>
                        <input
                            type="text"
                            name="MMERGE3"
                            className=""
                            value={hireUsFormInput.MMERGE3}
                            id="mce-MMERGE3"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 for_hire_us_section">
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE4">
                            Tell us about your project
                        </label>
                        <input
                            type="text"
                            value={hireUsFormInput.MMERGE4}
                            name="MMERGE4"
                            className="full-width"
                            id="mce-MMERGE4"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-8 for_contact_us_section">
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE6">
                            Your message
                        </label>
                        <input
                            type="text"
                            value={hireUsFormInput.MMERGE6}
                            name="MMERGE6"
                            className="full-width"
                            id="mce-MMERGE6"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-8" style={{paddingRight: '0px'}}>
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE5">
                            How did you hear about Codelink
                            Infotech ?
                        </label>
                        <input
                            type="text"
                            value={hireUsFormInput.MMERGE5}
                            name="MMERGE5"
                            className="full-width"
                            id="mce-MMERGE5"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="mc-field-group input-group for_hire_us_section">
                        <strong className="d-none">
                            I need to sign the NDA first
                        </strong>
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    defaultValue={"1"}
                                    checked={hireUsFormInput["group[6483][1]"]}
                                    name="group[6483][1]"
                                    cid = "mce-group[6483]-6483-0"
                                    id="mce-group[6483]-6483-0"
                                    onChange={(e) =>handleInputChange(e)}
                                />
                                <label htmlFor="mce-group[6483]-6483-0">
                                    I need to sign the NDA first
                                    <span className="checkbox-custom">
                                        <span className="checkbox-custom-checked">
                                            <img src="images/checked.svg" />
                                        </span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-12 col-md-12">
                    <div className="mc-field-group input-group privacy-checkbox">
                        <strong className="d-none">
                            Read &amp; accept
                            <a to="#"> Terms of Service</a>
                            &amp;
                            <a to="#"> Privacy Policy</a>
                        </strong>
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    defaultValue={"2"}
                                    checked={ hireUsFormInput["group[6487][2]"]}
                                    name="group[6487][2]"
                                    token_id = "contact_us_form"
                                    cid = "mce-group[6487]-6487-0"
                                    id="mce-group[6487]-6487-0"
                                    className="required"
                                    onChange={(e) =>handleInputChange(e)}
                                />
                                <label htmlFor="mce-group[6487]-6487-0">
                                    I have read and accept the 
                                    <Link
                                        to="/terms-conditions"
                                        onClick={hideHireUsForm}
                                        style = {{padding: '0px 5px'}}
                                    >
                                        Terms of Service
                                    </Link>
                                    &amp;
                                    <Link
                                        to="/privacy-policy"
                                        onClick={hideHireUsForm}
                                        style = {{padding: '0px 5px'}}
                                    >
                                        Privacy Policy
                                    </Link>
                                    <span className="checkbox-custom" style={inputError.policyError}>
                                        <span className="checkbox-custom-checked">
                                            <img src="images/checked.svg" />
                                        </span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row d-none">
                <div className="col-12">
                    <div
                        id="mergeRow-gdpr"
                        className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                    >
                        <div className="content__gdpr">
                            <label>Marketing Permissions</label>
                            <p>
                                Please select all the ways you would
                                like to hear from Codelink Infotech:
                            </p>
                            <fieldset
                                className="mc_fieldset gdprRequired mc-field-group"
                                name="interestgroup_field"
                            >
                                <label
                                    className="checkbox subfield"
                                    htmlFor="gdpr_21971"
                                >
                                    <input
                                        type="checkbox"
                                        id="gdpr_21971"
                                        name="gdpr[21971]"
                                        value="Y"
                                        className="av-checkbox"
                                    />
                                    <span>Email</span>{" "}
                                </label>
                                <label
                                    className="checkbox subfield"
                                    htmlFor="gdpr_21975"
                                >
                                    <input
                                        type="checkbox"
                                        id="gdpr_21975"
                                        name="gdpr[21975]"
                                        value="Y"
                                        className="av-checkbox"
                                    />
                                    <span>Direct Mail</span>
                                </label>
                                <label
                                    className="checkbox subfield"
                                    htmlFor="gdpr_21979"
                                >
                                    <input
                                        type="checkbox"
                                        id="gdpr_21979"
                                        name="gdpr[21979]"
                                        value="Y"
                                        className="av-checkbox"
                                    />
                                    <span>
                                        Customized Online Advertising
                                    </span>
                                </label>
                            </fieldset>
                            <p>
                                You can unsubscribe at any time by
                                clicking the link in the footer of
                                our emails. For information about
                                our privacy practices, please visit
                                our website.
                            </p>
                        </div>
                        <div className="content__gdprLegal">
                            <p>
                                We use Mailchimp as our marketing
                                platform. By clicking below to
                                subscribe, you acknowledge that your
                                information will be transferred to
                                Mailchimp for processing.
                                <a
                                    href="https://mailchimp.com/legal/"
                                    target="_blank"
                                >
                                    Learn more about Mailchimp's
                                    privacy practices here.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div
                        style={{
                            position: "absolute",
                            left: "-5000px",
                        }}
                        aria-hidden="true"
                    >
                        <input
                            type="text"
                            name="b_649b8842b452b3ceb275375e0_d581c12acd"
                            tabIndex="-1"
                        // value=""
                        />
                    </div>
                    <h4
                        style={{
                            color: "red",
                            padding: "5px 0px",
                        }}
                    >
                    </h4>
                    <div className="clear send-btn-hireus">
                        <input
                            type="button"
                            value="Send"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button"
                            onClick={(e) => handleSubmit(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)}

export default ContactUsForm
