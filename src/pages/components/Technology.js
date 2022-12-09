import React from "react";

const Technology = (props) => {
  return (
    <>
      {/* <!-- Our Technologies --> */}
      <div className="our-technologies-wrapper our-technologies-wrapper-project-design">
        <div className="container">
          <div className="row wow fadeIn">
            <div className="col-12 text-center">
              <h4 className="section-title  wow fadeInUp" data-wow-duration="2s"><span> {props.techBox.mainBoxHeadLeft} </span>  {props.techBox.mainBoxHeadRight}</h4>
            </div>
          </div>
          <div className="row text-center">
          {/* Technology Box */}
          { 
            props.techBox.box.map((box) => 
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow fadeInUp  our-technologies-col">
              <div className="our-technologies-elements">
                <div className="our-technologies-elements-img">
                  <img src={box.boxImg} alt={box.boxTitle} />
                </div>
                <div className="our-technologies-elements-content">
                  <p className="our-technologies-elements-title">
                    {box.boxTitle}
                  </p>
                  {/* <p className="techBoxDesc">{box.boxDesc}</p> */}
                </div>
              </div>
            </div>
            )
          }
          {/* Technology Box */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Technology;
