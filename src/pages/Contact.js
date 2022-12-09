import ContactUsForm from "../pages/components/ContactUsForm";


const Contact = () => {

  return (
  <>
  <div className="container h-100" id="contactPage">
  <div className="row m-0 h-100">
  <div className="col-12 col-sm-12 col-md-6 contact-us-left-col">
  <div className="contact-us-left">
  <div className="contact-us-address-list">
  <div className="contact-us-address-block">
  <h5><a target="_blank" href="https://www.google.com/maps/place/Codelink+Infotech/@21.2021189,72.8672703,13z/data=!4m5!3m4!1s0x0:0x7dacffbfa3f7052b!8m2!3d21.2021189!4d72.8672703">
  <i className="fas fa-map-marker-alt"></i> INDIA HEADQUARTERS  </a></h5>
  <p> 402, Valentina Business Hub, LP Savani Rd, Near Shell Petrol Pump, Adajan, Surat, Gujarat 395009 </p>
  <a href="tel:+918320246700">T. +91 8320246700</a>
  <a href="mailto:info@codelinkinfotech.com"> E. info@codelinkinfotech.com</a>
  </div>
  </div>
  </div>
  <ul className="social_ul">
  <li><a href="https://www.linkedin.com/company/codelink-infotech/" target="_blank" > <i className="fab fa-linkedin-in"></i></a></li>
  <li><a href="https://www.instagram.com/codelinkinfotech/" target="_blank"><i className="fab fa-instagram"></i></a></li>
  <li><a href="https://www.facebook.com/codelinkinfotech" target="_blank"><i className="fab fa-facebook"></i></a></li>
  <li><a href="skype:kamlesh_pokiya?chat" target="_blank"><i className="fab fa-skype"></i></a></li>
  <li><a href="https://api.whatsapp.com/send?phone=+918320246700" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
  </ul>
  </div>
  <div className="col-12 col-sm-12 col-md-6 contact-us-form">
  <div className="contactdisplay-form">
  <h2 className="banner_text">
  <span>CONTACT</span> US
  </h2>
  <div className="hire-us-form">
  <div className="form" id="contact_us_form">
  <div id="mc_embed_signup1">
  <form action="#" method="post" id="mc-embedded-subscribe-form1" name="mc-embedded-subscribe-form1" className="validate">
  <ContactUsForm />
  </form>
  </div>
  </div>
  </div>
  </div>
  <div className="contactresponses-msg">
  <div className="row">
  <div className="col-12">
  <div id="mce-responses1" className="clear">
  <div className="response" id="mce-error-response1" style={{ display: "none" }} ></div>
  <div className="response" id="mce-success-response1" style={{ display: "none" }} ></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</>
  );
};

export default Contact;
