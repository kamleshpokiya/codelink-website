import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* <!--banner section--> */}
      <div className="banner_section services-banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <div
                className="banner_block wow fadeInDown"
                data-wow-duration="2s"
              >
                <h1 className="banner_text">
                  <span>DESIGN + </span>BRANDING
                </h1>
                <h4 className="banner_subtext">
                  A beautiful site with clever copy and smooth programming will
                  never result in conversions if users don't understand what to
                  do. That's why Codelink Infotech designs, develops, and
                  markets with your end goal in mind.
                </h4>
                <h4 className="banner_subtext">
                  Our team designs with a focus on usability, as well as
                  aesthetics, to ensure a pleasant and productive experience for
                  your users. Whether your needs are digital (we do logos) or
                  physical (proof of concept) we can handle it for you. Pave the
                  way to profit with a dynamic and successful user experience
                  journey designed to move users from consciousness to
                  consideration to conversion, resulting in pay-day for you.
                </h4>
                <h4 className="banner_subtext">
                  We'll take it a step further, and strive for the most elusive
                  of all company goals: customer loyalty, retention, and
                  advocacy.
                </h4>
                <Link
                  className="banner_btn hvr-bounce-to-bottom"
                  to="/contact-us"
                >
                  START A PROJECT
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-lg-5"></div>
          </div>
        </div>
        <div
          className="services-banner-right-block wow fadeInRight"
          data-wow-duration="2s"
        >
          <img src="images/product-design.png" alt="PRODUCT DESIGN" />
        </div>
      </div>
    </>
  );
};

export default Banner;
