import React from 'react'

const Service = () => {
  return (
    <>
    {/* Service - MOBILE APP   */}
    <div className="service-page-wrapper mobile-app-page">
      <div className="container">
        <div className="row how-we-help wow fadeIn">
          <div className="col-md-12 text-center">
            <h4 className="help_span">
              <span> How Could </span>
              We Help Your Company?
            </h4>
          </div>
        </div>
        <div className="row how-we-help text-center">
          <div className="col-12 col-md-4 ">
            <div className="how-we-help-services wow fadeInUp">
              <div className="how-we-help-services-img">
                <img
                  src="images\new_images\mobile_development/users_1.jpg"
                  alt="More users"
                />
              </div>
              <div className="how-we-help-content">
                <p className="how-we-help-content-title">More users</p>
                <p>
                By implementing your needs and wants, Codelink Infotech helps you to connect with your audience who are likely to become your potential customers. Hence, you will get the majority of leads and wide reach.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="how-we-help-services wow fadeInUp">
              <div className="how-we-help-services-img">
                <img
                  src="images/new_images/mobile_development/app.jpg"
                  alt="Higher Engagement"
                />
              </div>
              <div className="how-we-help-content">
                <p className="how-we-help-content-title">Higher Engagement</p>
                <p>
                We are here to give you long lasting results which will increase your conversion rate and ultimately, upscale your business. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="how-we-help-services wow fadeInUp">
              <div className="how-we-help-services-img">
                <img
                  src="images/new_images/mobile_development/market.jpg"
                  alt="Bigger Market"
                />
              </div>
              <div className="how-we-help-content">
                <p className="how-we-help-content-title">Bigger Market</p>
                <p>
                In this tech era, everyone has access to mobile phones and the internet. So, it becomes easier to capture bigger market share. We provide you an opportunity to monetize your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service - MOBILE APP   */}
  </>
  
  )
}

export default Service
