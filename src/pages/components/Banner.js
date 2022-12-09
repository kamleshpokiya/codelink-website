import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  let h4Tag;
  let p1Tag = {
    lineHeight : '22px'
  };
  let p2Tag= {
    lineHeight : '22px'
  };;
  let p3Tag= {
    lineHeight : '22px'
  };;
  if (props.Banner.bannerContenth4 === "") {
    h4Tag = {
      display: "none",
    };
  }
  if (props.Banner.bannerContentp1 === "") {
    p1Tag = {
      display: "none",
    };
  }
  if (props.Banner.bannerContentp2 === "") {
    p2Tag = {
      display: "none",
    };
  }
  if (props.Banner.bannerContentp3 === "") {
    p3Tag = {
      display: "none",
    };
  }

  // Home Banner Button custom style
  let homeBtnStyle ;
  if(props.Banner.bannerHeadLeftPart === 'INNOVATIVE'){
    homeBtnStyle = {
      fontSize: '14px',
      textTransform: 'uppercase',
      background: '#f27721',
      border: 'none',
      color: '#fff',
      padding: '18px 18px',
      fontWeight: '600',
      marginTop: '40px'
    }
  }
 
  return (
    <>
      {/* <!--banner section--> */}
      <div className="banner_section services-banner-section" id="bannerContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <div
                className="banner_block wow fadeInDown"
                data-wow-duration="2s"
              >
                <h1 className="banner_text">
                  <span>{props.Banner.bannerHeadLeftPart}</span>
                  {props.Banner.bannerHeadRightPart}
                </h1>
                <h4 className="banner_subtext"  style={h4Tag}>
                  {props.Banner.bannerContenth4}
                </h4>
                <p className="banner_subtext" style={p1Tag}>
                  {props.Banner.bannerContentp1}
                </p>
                <p className="banner_subtext"  style={p2Tag}>
                  {props.Banner.bannerContentp2}
                  </p>
                <p className="banner_subtext"  style={p3Tag}>
                  {props.Banner.bannerContentp3}
                  </p>
                <Link
                  className="banner_btn hvr-bounce-to-bottom"
                  to="/contact-us"
                  style={homeBtnStyle}
                >
                  {props.Banner.bannerButtonText}
                </Link>
              </div>
            </div>
            <div
              className="services-banner-right-block wow fadeInRight"
              data-wow-duration="2s"
            >
              <img src={props.Banner.bannerImg} alt="Banner Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );


};

export default Banner;
