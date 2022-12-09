import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();
  const toContactpage = (e) => {
e.preventDefault();
navigate('/contact-us');
  }
  return (
<>
  {/*banner section*/}
  <div className="banner_section services-banner-section">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="banner_block wow fadeInDown" data-wow-duration="2s">
            <h1 className="banner_text">
              <span>MOBILE </span>DEVELOPMENT
            </h1>
            <h4 className="banner_subtext">
              A killer app gets downloads, reviews, and recommendations. Our
              team knows what users want in a mobile application, because we’ve
              built scores of them.
            </h4>
            <h4 className="banner_subtext">
              Find your users when and where they need you, whether in the App
              Store, on Google Play, or in the cloud. With a custom web, mobile,
              or cloud app from Codelink Infotech, your company is always
              accessible to your customers, just a click away.
            </h4>
            <a
              className="banner_btn hvr-bounce-to-bottom"
              href="/contact-us"
              onClick={(e)=>toContactpage(e)}
            >
              START A PROJECT
            </a>
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
        src="images/new_images/mobile_development/MobileDashboard.png"
        alt="Banner Image"
        className="mobile-shadow"
      />
    </div>
  </div>
</>

  )
}

export default Banner
