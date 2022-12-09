import React from "react";
import { Link } from 'react-router-dom';

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
                  <span className="d-inline">E - </span>COMMERCE
                </h1>
                <h4 className="banner_subtext">
                  Every amazing commerce store starts with user experience and
                  that step is crucial for the success of your store. Whether
                  you need a brand-new store, want to overhaul and upgrade your
                  entire customer experience, or simply want to boost your
                  conversion rates, we can help you develop it.
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
          className="services-banner-right-block  wow fadeInRight ecom_pos"
          data-wow-duration="2s"
        >
          <img
            src="images/new_images/e-commerce/ecommerce-marketing.png"
            alt="E-Commerce"
          />
          {/* <!-- <span className="services-banner-right-block-top"></span> --> */}
          {/* <!-- <span className="services-banner-right-block-bottom"></span> --> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
