import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
<>
  <div className="banner_section services-banner-section">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="banner_block wow fadeInDown" data-wow-duration="2s">
            <h1 className="banner_text">
              <span>QUALITY </span>ASSURANCE
            </h1>
            <h4 className="banner_subtext">
              We have the expertise and infrastructure necessary to
              comprehensively test your software products. Our team performs
              both manual and automated testing of any complexity according to
              your needs.
            </h4>
            <Link className="banner_btn hvr-bounce-to-bottom" to="/contact-us">
              START A PROJECT
            </Link>
          </div>
        </div>
        <div className="col-md-5 col-lg-5"></div>
      </div>
    </div>
    <div className="services-banner-right-block wow fadeInRight" data-wow-duration="2s">
      <img src="images/quality-assurance.png" alt="QUALITY ASSURANCE" />
    </div>
  </div>
</>

  )
}

export default Banner
