import React, { useState } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import ContactUsForm from "../pages/components/ContactUsForm";
import { useCookies } from 'react-cookie';


const Footer = () => {
  const [cookies, setCookie] = useCookies(['isAccepted']);

  const hideHireUsForm = () => {
    document.getElementById("hideme").click();
    new WOW.WOW({
      live: false,
    }).init();
  };

  const closeCookieBtn = (e) => {
    document.getElementById("cookiePopup").style.display = "none";
  };


  // handle cookie 
  const handleCookie = (e) => {
    e.preventDefault();
    setCookie('isAccepted', true, { path: '/', maxAge: 3.154e+7 });
    closeCookieBtn();
  };


  return (
    <>
      {/* footer section + Hire us Form + Cookie Popup Modal + Scroll Top Button */}
      <footer id="footer">
        <div className="footer_section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-12 col-xl-4 footer_address_margin_bottom">
                <div className="footer_logo">
                  <Link to="/"> <img src="images/logo_teal.svg" alt="Logo" /> </Link>
                  <p> 402, Valentina Business Hub, LP Savani Rd, <br /> Near Shell Petrol Pump, Adajan, Surat, Gujarat 395009 </p>
                  <p> <a href="tel:+918320246700">T. +91 8320246700</a> <br />  <a href="mailto:info@codelinkinfotech.com">  E. info@codelinkinfotech.com </a></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-8 ">
                <div className="row justify-content-between">
                  <div className="col-sm-6 col-md-2">
                    <div className="footer_div address">
                      <label>Web Development</label>
                      <ul>
                        <li><a href={void 0}>ReactJS</a></li>
                        <li><a href={void 0}>NodeJS</a></li>
                        <li><a href={void 0}>Angular</a></li>
                        <li><a href={void 0}>Vue</a></li>
                        <li><a href={void 0}>PHP</a></li>
                        <li><a href={void 0}>Codeigniter</a></li>
                        <li><a href={void 0}>Laravel</a></li>
                        <li><a href={void 0}>WordPress</a></li>
                        <li><a href={void 0}>WooCommerce</a></li>
                        <li><a href={void 0}>Shopify</a></li>
                        <li><a href={void 0}>CakePHP</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="footer_div address">
                      <label>App Development</label>
                      <ul>
                        <li><a href={void 0}>Android</a></li>
                        <li><a href={void 0}>iOS Native</a></li>
                        <li><a href={void 0}>Flutter</a></li>
                        <li><a href={void 0}>React Native</a></li>
                        <li><a href={void 0}>Swift</a></li>
                        <li><a href={void 0}>Swift-UI</a></li>
                        <li><a href={void 0}>Objective-C</a></li>
                        <li><a href={void 0}>Java</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="footer_div address">
                      <label>Designing & Branding</label>
                      <ul>
                        <li><a href={void 0}>Figma</a></li>
                        <li><a href={void 0}>XD</a></li>
                        <li><a href={void 0}>Photoshop</a></li>
                        <li><a href={void 0}>illustrator</a></li>
                        <li><a href={void 0}>PSD to HTML</a></li>
                        <li><a href={void 0}>HTML & CSS</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="footer_div address">
                      <label>Company</label>
                      <ul>
                        <li><Link to="our-cases">Our Cases</Link></li>
                        <li><Link to="careers">Careers</Link></li>
                        <li><Link to="contact-us">Contact Us</Link></li>
                        <li><Link to="privacy-policy">Privacy</Link></li>
                        <li><Link to="terms-conditions">Terms & Conditions</Link></li>
                        <li><Link to="cookie-policy">Cookie Policy</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="footer_div address">
                      <label>Services</label>
                      <ul>
                        <li><Link to="design-branding">Design Branding</Link></li>
                        <li><Link to="digital-marketing">Digital Marketing</Link></li>
                        <li><Link to="ecommerce">E-commerce</Link></li>
                        <li><Link to="web-development">Web Development</Link></li>
                        <li><Link to="app-development"> App Development</Link></li>
                        <li><Link to="quality-assurance">Q&A & Maintenance</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer content end here --> */}

        {/* <!-- Hire Us form start here --> */}
        <div
          className="modal fade hire-us-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header-custom">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id="hideme"
                  onClick={(e) => hideHireUsForm(e)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="container h-100">
                <div className="row m-0 h-100">
                  <div className="col-12 col-sm-12 col-md-6 hire-us-modal-left">
                    <div className="display-form">
                      <h2 className="banner_text">
                        <span>HIRE</span>US
                      </h2>
                      <div className="hire-us-form">
                        <h5>Free project quote</h5>
                        <p className="hire-us-form-fillout">
                          Fill out the enquiry form and we'll get back to you as
                          soon as possible.
                        </p>
                        <div className="form" id="hire_us_form">
                          <div id="mc_embed_signup">
                            <form
                              action=""
                              method="get"
                              id="mc-embedded-subscribe-form"
                              name="mc-embedded-subscribe-form"
                              className="validate"
                            >
                              <ContactUsForm />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="responses-msg">
                      <div className="row">
                        <div className="col-12">
                          <div id="mce-responses" className="clear">
                            <div
                              className="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              className="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 hire-us-modal-right black">
                    <div className="hire-us-main">
                      <div className="hire-us-main-inner">
                        <div className="hire-us-thumb">
                          <img
                            src="images/arthure.png"
                            style={{
                              height: "180px",
                              width: "auto",
                              borderRadius: "50%",
                            }}
                          />
                          <p className="founder-of-subscribers-name">
                            Arthur Bourgeois
                          </p>
                        </div>
                        <div className="hire-us-inner">
                          <span className="left-quote">
                            <img src="images/desktop/left-quote.png" />
                          </span>
                          <p>
                            Codelink Infotech was one of the fastest agencies I
                            have ever worked with. Hardik and his team over
                            communicates and is always on time. <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*  Cookie Popup message start here  */}
        <div className="cookieBubble" id="cookiePopup">
          <div className="cookie-banner">
            <div className="cookie-banner-header">
              <a className="cookie-close gotit-btn" onClick={(e) => closeCookieBtn(e)} > <img src="images/cookie-close.svg" alt="Close" /> </a>
            </div>
            <div className="cookie-wrap d-flex align-items-center">
              <div> <img src="images/cookie-banner(1).png" alt="LEARN MORE" /> </div>
              <div className="cookie-wrap-right"><p className="cookie-text"> We use cookies for<br />better UX{" "} <Link to={"/cookie-policy"} style={{ fontSize: "14px", textDecoration: 'underline' }}> learn more{" "} </Link> </p>
                <a className="learn-more-btn hvr-bounce-to-bottom" href={void 0} onClick={(e) => handleCookie(e)} > ACCEPT </a>
              </div>
            </div>
          </div>
        </div>
        <a href={void 0} className="scrollup">
          <img src="images/navigate-up-arrow.svg" />
        </a>
      </footer>



      {/* Modal for Client Video */}
      <div className="modal fade" id="playVideo" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ height: '500px', width: '1000px', color: 'transparent' }}>
          <div className="modal-content" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <div className="modal-body">
              <iframe id="Geeks3" height={'400px'} width={'100%'} src="https://www.youtube.com/embed/5Peo-ivmupE?autoplay=1&mute=1" frameBorder="0" allowFullScreen ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
