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
                  <span>WEB </span>DEVELOPMENT
                </h1>
                <h4 className="banner_subtext">
                  Custom-designed for your unique goals and needs, Codelink
                  Infotech builds websites that work for your small or medium
                  sized business. That means we work hard so your customers
                  don’t have to.
                </h4>
                <h4 className="banner_subtext">
                  We show off who you are and what you do, with website designs
                  customized to your business. Qualify leads instantaneously,
                  when your web design is smart, clean, modern, and
                  mobile-friendly (in the biz we call that "responsive").
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
          <img
            src="images/new_images/web_development/making_websites.png"
            alt="Banner"
          />
          {/* <!-- <span className="services-banner-right-block-top"></span> --> */}
          {/* <!-- <span className="services-banner-right-block-bottom"></span> --> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
