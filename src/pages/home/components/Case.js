import React from "react";

const Case = () => {
  const handleClick = (e) =>{
    e.preventDefault();
    console.log('handleClick button clicked');
  }
  return (
    <>
      {/* <!--our cases section --> */}
      <div className="cases_section pt120" style={{display:'none'}}>
        {/* <!--OUR CASES header--> */}
        <div className="container">
          <img
            className="section_header_bg"
            src="images/desktop/cases_head.png"
            alt="Cases Heading Background"
            style={{ maxWidth: "25%" }}
          />
          <div className="offset-sm-2 col-sm-8">
            <div className="section_header">
              <h2 className="wow zoomIn" data-wow-duration="2s">
                <span>OUR</span>
                CASES
              </h2>
            </div>
          </div>
        </div>
        {/* <!--OUR CASES content--> */}
        <div className="container">
          <div className="cases_carousel">
            <div
              id="casescarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="cases_left_section">
                        <h2>
                          Magento 2<br />
                          Taopix API
                        </h2>
                        <p className="common_para">
                          UX/UI & Custom Magento Development with Taopix API
                          development. Instant Celebration proves a design tool
                          to create sticker frames in 3D.
                        </p>
                        <a
                          className="teal_btn hvr-bounce-to-bottom"
                          onClick={(e)=>handleClick(e)}
                        >
                          CASE COMING SOON
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        className="d-block w-100"
                        src="images/instantcelebration-2.svg"
                      />
                      <div className="company-name text-center">
                        <h5>Instantcelebration.com</h5>
                        <p>Magento 2 Dev & TAOPIX API</p>
                      </div>
                      <div className="more_cases_container">
                        <a
                          className="more_cases"
                          href="ourcases.html"
                          onClick={(e)=>handleClick(e)}
                        >
                          More Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="cases_left_section">
                        <h2>
                          REBRANDING
                          <br />
                          GROEP MATTHYS
                        </h2>
                        <p className="common_para">
                          For this project we worked with partner company
                          FillGap Theme. Scope of work: Wordpress development.
                          Wordpress extension development, brand design and
                          frontend-development.
                        </p>
                        <a
                          className="teal_btn hvr-bounce-to-bottom"
                          href="#"
                          onClick={(e)=>handleClick(e)}
                        >
                          VIEW CASE
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        className="d-block w-100"
                        src="images/groep-matthys.svg"
                      />
                      <div className="company-name text-center">
                        <h5>Groepmatthys.com</h5>
                        <p>Rebranding</p>
                      </div>
                      <div className="more_cases_container">
                        <a
                          className="more_cases"
                          href="ourcases.html"
                          onClick={(e)=>handleClick(e)}
                        >
                          More Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="cases_left_section">
                        <h2>
                          Magento & Taopix API
                          <br />
                          FOTO.COM
                        </h2>
                        <p className="common_para">
                          UX/UI and Magento 2 migration. One of the the biggest
                          challenge of this project was developing a stable
                          Magento 2 Toapix API extension.
                        </p>
                        <a
                          className="teal_btn hvr-bounce-to-bottom"
                          onClick={(e)=>handleClick(e)}
                        >
                          CASE COMING SOON
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img className="d-block w-100" src="images/foto.svg" />
                      <div className="company-name text-center">
                        <h5>FOTO.COM</h5>
                        <p>ECOMMERCE</p>
                      </div>
                      <div className="more_cases_container">
                        <a
                          className="more_cases"
                          href="ourcases.html"
                          onClick={(e)=>handleClick(e)}
                        >
                          More Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-control-wrapper">
                  <a
                    className="carousel-control-next"
                    href="#casescarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
