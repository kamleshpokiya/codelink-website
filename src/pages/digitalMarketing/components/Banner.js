import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <>
         {/* <!--banner section--> */}
   <div className="banner_section services-banner-section">
      <div className="container">
         <div className="row">
            <div className="col-md-7 col-lg-7">
               <div className="banner_block wow fadeInDown" data-wow-duration="2s">
                  <h1 className="banner_text"><span>Digital </span>Marketing</h1>
                  <h4 className="banner_subtext">A great website, app, or brand is only as good as the marketing plan
                     promoting it. If users can't find you ( or worse, have never heard of you ), then you need help from
                     the Codelink Infotech marketing team.</h4>
                  <h4 className="banner_subtext">We'll optimize your web presence for search engines, streamline your social
                     media, and update your content – copy, photos, and videos. Spread the word about your business with
                     a custom plan devised by our digital marketing team.</h4>
                  <h4 className="banner_subtext"><b>Need more of a boost ? </b>  We're certified Google Partners, poised to get
                     you clicks at the lowest cost.</h4>
                  <Link className="banner_btn hvr-bounce-to-bottom" to="/contact-us">START A PROJECT</Link>
               </div>
            </div>
            <div className="col-md-5 col-lg-5">
            </div>
         </div>
      </div>
      <div className="services-banner-right-block wow fadeInRight" data-wow-duration="2s">
         <img src="images/new_images/digitel_markating/eCommerce-marketing-tools.jpg.png" alt="3 WEEKS MVP" />
         {/* <!-- <span className="services-banner-right-block-top"></span> --> */}
         {/* <!-- <span className="services-banner-right-block-bottom"></span> --> */}
      </div>
   </div>
    </>
  )
}

export default Banner
