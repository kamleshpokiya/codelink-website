import { Link } from 'react-router-dom';

const ContactUs = ({contactOffer}) => {
return (
  <div className="hire_section hire-sectionmargin-bottom">
    <div className="container">
      <div className="offset-sm-2 col-sm-8" style={{display : contactOffer.titleOne === "CONTACT US FOR A DESIGN" ? "inline" : "block"}}>
        <div className="section_header">
          <h2 className="wow zoomIn" data-wow-duration="2s">
            <span>{contactOffer.titleOne}</span>
              {contactOffer.titleTwo}
            <span>{contactOffer.titleThree}</span>
          </h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="text-center wow zoomIn" data-wow-duration="2s">
        <Link className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn" to="/contact-us"> {contactOffer.buttonText} </Link>
      </div>
    </div>
  </div>
);
};

export default ContactUs;
