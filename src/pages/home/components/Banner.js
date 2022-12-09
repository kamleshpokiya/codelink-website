import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* <!--banner section--> */}
      <div className="banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <div className="banner_block wow fadeInDown" data-wow-duration="2s">
                <h1 className="banner_text">
                  <span>innovative </span>Tech partner.
                </h1>
                <h4 className="banner_subtext banner_subtext_home">
                It’s not about working or getting things done, it’s about exploring your path to really do what you dedicatedly love to do.
                </h4>
                <Link
                  className="banner_btn hvr-bounce-to-bottom"
                  to="/contact-us"
                >
                  GET FREE CONSULTATION
                </Link>
              </div>
            </div>
            <div
              className="banner_img_block wow fadeInRight"
              data-wow-duration="2s"
            >
              <img src="images/code-banner.png" alt="Banner Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
