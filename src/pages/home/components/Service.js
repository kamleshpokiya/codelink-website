import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {

  // Navigate on click
  const navigate = useNavigate();
  const scollToRef = useRef();

  const toWebdevelopmentPage = (e) => {
    e.preventDefault();
    navigate('/web-development');
  }
  const toMobileAppDevelopmentPage = (e) => {
    e.preventDefault();
    navigate('/app-development');
  }
  const toDesignBrandingPage = (e) => {
    e.preventDefault();
    navigate('/design-branding');
  }
  const toDigitalMarkingPage = (e) => {
    e.preventDefault();
    navigate('/digital-marketing');
  }
  const toEccommercePage = (e) => {
    e.preventDefault();
    navigate('/ecommerce');
  }
  const toQualityAssurancePage = (e) => {
    e.preventDefault();
    navigate('/quality-assurance');
  }



  return (
  <>
  {/* <!--services section--> */}
  <div className="services_section pt120" ref={scollToRef} id="serviceSection">
    {/* <!--services header--> */}
    <div className="container">
      <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <div className="section_header">
          <h2 className="wow zoomIn border_hover" data-wow-duration="2s">
            <span>OUR </span>SERVICES
          </h2>
          <p className="wow zoomIn" data-wow-duration="2s">
          We are a dedicated team of <b>software engineers</b> and <b>product designers</b> who keep coding and clients at heart in everything they do at <b>Codelink.</b><br/>
          Bring in your ideas and we will transform it into reality - <b>it's like a partnership.</b>
          </p>
        </div>
      </div>
    </div>

  {/*services content*/}
  <div className="container">
    <div className="service_section_block row">
      <div className="about-images-topbox wow fadeInUp">
        <div className="container" id="container">
          <div className="item col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content" onClick={(e) => toWebdevelopmentPage(e)} data-wow-duration="2s">
              <div className="hover-box-1">
                <div className="hover-text-box">
                  <div className="service_section_div">
                    <div className="service_section_content">
                      <img src="images/desktop/service4.png" alt="Service Image" />
                      <h4>Web Development</h4>
                      <p className="click-btn">Even though you possess marketing skills, it's an undeniable fact that you can't get customers to that extent as the digital website does. We believe in taking things piece by piece instead of diving right into building a website that is where our patrons are happy - their needs and desires are converted into reality. We do hear them and energetically take a ride with the newest technology and land your web page on the busiest airport where your potential clients are available & convert them into your actual customer.
                      </p>
                    </div>
                    <a className="service_btn">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content" onClick={(e) => toMobileAppDevelopmentPage(e)} data-wow-duration="2s">
              <div className="item-content">
                <div className="hover-box-1">
                  <div className="hover-text-box">
                    <div className="service_section_div">
                      <div className="service_section_content">
                        <img src="images/desktop/service5.png" alt="Service Image" />
                        <h4>App Development</h4>
                        <p className="click-btn">We provide you with mobile app development services to meet the demands of a constantly changing industry. We create user-friendly apps that include the most up-to-date trends.
                        </p>
                      </div>
                      <a className="service_btn" >Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content" onClick={(e) => toDesignBrandingPage(e)} data-wow-duration="2s">
              <div className="item-content">
                <div className="hover-box-1">
                  <div className="hover-text-box">
                    <div className="service_section_div">
                      <div className="service_section_content">
                        <img src="images/desktop/service1.png" alt="Service Image" />
                        <h4>Design + Branding</h4>
                        <p id="click-btn">There are a plethora of websites available & some free templates are available too. But the thing is, will that catch the attention of your customers? We help you build your vision and purpose by providing you with our website designs keeping in mind the paramount wants of Codelink Infotech business patrons; we have an exemplary team who creates clear and concise designs straight from the customer's mind.
                        </p>
                      </div>
                      <a className="service_btn" >Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item right-border col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content" onClick={(e) => toDigitalMarkingPage(e)} data-wow-duration="2s">
              <div className="item-content">
                <div className="hover-box-1">
                  <div className="hover-text-box">
                    <div className="service_section_div">
                      <div className="service_section_content">
                        <img src="images/desktop/service2.png" alt="Service Image" />
                        <h4>Digital Marketing</h4>
                        <p id="click-btn">Providing web traffic with the extremity of exposure is strenuous, and that's where Codelink Infotech commences. We help you to enhance insights of your mass audience as well as address potential customers to your site.
                        </p>
                      </div>
                      <a className="service_btn" >Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item bot-border col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content" onClick={(e) => toEccommercePage(e)} data-wow-duration="2s">
              <div className="item-content">
                <div className="hover-box-1">
                  <div className="hover-text-box">
                    <div className="service_section_div">
                      <div className="service_section_content">
                        <img src="images/desktop/service3.png" alt="Service Image" />
                        <h4>E-commerce</h4>
                        <p id="click-btn">In this contemporary world where everything is available with just one click, there have been numerous E-commerce businesses in the market. With this, there is a need for e-commerce developers to create a user-friendly website, which can help in scaling your business; that's where our work starts. We configure and launch solutions to enable functionality in online sales systems. Our team creates your store with new features to make it appear professional and distinct from others.
                        <br/>Hire us and see how your customers keep returning to you.
                        </p>
                      </div>
                      <a className="service_btn">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item bot-border col-md-6 col-lg-4 service_box wow fadeInUp">
            <button className="hover-btn" id="btnB">+</button>
            <div className="hover-wrap">
            </div>
            <div className="item-content " onClick={(e) => toQualityAssurancePage(e)} data-wow-duration="2s">
              <div className="item-content">
                <div className="hover-box-1">
                  <div className="hover-text-box">
                    <div className="service_section_div">
                      <div className="service_section_content">
                        <img src="images/desktop/service6.png" alt="Service Image" />
                        <h4>Quality Assurance and Support Q&amp;A</h4>
                        <p id="click-btn">For us, quality is not just a service but what our client gets; therefore we work closely with the <span> <b> Q</b>U<b>A</b>LIFIED</span> team  from identification of loopholes/defects on the website to delivery and even after that.<br/>We'll come up with custom testing techniques or improve on your current QA methods if they're ineffective.<br/>Build your business metrics with us by hiring our <span> <b> Q</b>U<b>A</b>LIFIED</span> SPECIALIST.
                        </p>
                      </div>
                      <a className="service_btn" >Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
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

export default Service;
