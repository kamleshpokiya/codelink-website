import React from "react";
import { Link } from "react-router-dom";

const OtherServices = (props) => {

  let forMobileSection = {};
  if (props.serviceData.thirdTitleL === "MOBILE") {
    forMobileSection = {
      display: "block",
    };
  }
  return (
    <>
      {/* Other Services */}
      <div className="other-services">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p
                className="other-services-title  wow fadeInUp hover-service-box"
                data-wow-duration="2s"
              >
                <span> Other </span> Services
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-sm-12 col-md-4 wow zoomIn"
              data-wow-duration="2s"
            >
              <Link to={props.serviceData.firstLink}>
                <div className="other-services-block d-flex align-items-center justify-content-center">
                  <p>
                    <span>{props.serviceData.firstTitleL}</span>
                    {props.serviceData.firstTitleR}
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="col-12 col-sm-12 col-md-4 wow zoomIn"
              data-wow-duration="3s"
            >
              <Link to={props.serviceData.secondLink}>
                <div className="other-services-block d-flex align-items-center justify-content-center">
                  <p>
                    <span>{props.serviceData.secondTitleL}</span>
                    {props.serviceData.secondTitleR}
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="col-12 col-sm-12 col-md-4  wow zoomIn"
              data-wow-duration="4s"
            >
              <Link to={props.serviceData.thirdLink} />
              <div className="other-services-block d-flex align-items-center justify-content-center">
                <Link to={props.serviceData.thirdLink}>
                  <p>
                    <span style={forMobileSection}>
                      {props.serviceData.thirdTitleL}
                    </span>
                    {props.serviceData.thirdTitleR}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
