import React from "react";

const WeDoItAll = () => {
  return (
    <>
      {/* <!--  What You Get    --> */}
      <div className="what-you-get">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="what-you-get-title wow fadeInUp" data-wow-duration="2s">
                <span> We </span> Do It All
              </p>
            </div>
          </div>
          <div className="row justify-content-between text-center">
            <div className="col-12 col-md-4">
              <div className="what-you-get-elements wow fadeInUp">
                <div className="what-you-get-element-img">
                  <img
                    src="images/new_images/digitel_markating/strategy.svg"
                    alt="Product strategy workshop"
                  />
                </div>
                <div className="what-you-get-element-text">
                  <p>Search Engine Optimization (SEO)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="what-you-get-elements wow fadeInUp">
                <div className="what-you-get-element-img">
                  <img
                    src="images/new_images/digitel_markating/MVP-built.svg"
                    alt="MVP built and deployed"
                  />
                </div>
                <div className="what-you-get-element-text">
                  <p>Pay Per Click (PPC)</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="what-you-get-elements wow fadeInUp">
                <div className="what-you-get-element-img">
                  <img
                    src="images/new_images/digitel_markating/ux-desiner-developers.svg"
                    alt="Product strategy workshop"
                  />
                </div>
                <div className="what-you-get-element-text">
                  <p>Google Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  What You Get    --> */}
    </>
  );
};

export default WeDoItAll;
