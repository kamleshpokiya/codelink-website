import React from "react";

const Career = () => {
  const handleClick = (e) => {
    // do some action here
  };
  return (
    <>
      {/* <!--our cases section --> */}

      <div className="cases_section pt120 careers-section">
        <div className="container">
          <div className="offset-sm-2 col-sm-8">
            <div className="section_header ">
              <h2 className="wow zoomIn" data-wow-duration="2s">
                CAREERS
              </h2>
              <p className="wow zoomIn text-center pb-5" data-wow-duration="2s">
                Create great products <b>with us!</b>
                <br />
                <b>Let’s</b> write some beautiful code and make smart designs.
                <br />
                This is what <b>we’re crazy about,</b> and we’re looking for <b>the ones
                who feel</b> the same.
              </p>
              <a
                href="#steps_before_joining"
                className="show-me-open-position-btn wow fadeInUp hvr-bounce-to-bottom"
              >
                STEPS BEFORE JOINING
              </a>
            </div>
          </div>
        </div>

        <div className="container careers-container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="d-xl-flex text-center justify-content-between">
                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/1.jpg"
                      alt="Unlimited home office"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Unlimited home office</h5>
                    <p>Work from any location you want</p>
                  </div>
                </div>

                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/2.jpg"
                      alt="Global clients"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Unlimited office</h5>
                    <p>
                      Work with companies from all <br />
                      around the world
                    </p>
                  </div>
                </div>

                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/3.jpg"
                      alt="Budget for education"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Budget for education</h5>
                    <p>
                      Conferences, courses, workshops <br />
                      - on the house
                    </p>
                  </div>
                </div>

                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/4.jpg"
                      alt="Flexible working time"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Flexible working time</h5>
                    <p>We embrace earlybirds and night owls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="d-xl-flex text-center justify-content-around">
                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/5.png"
                      alt="Free learning resources"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Free learning resources</h5>
                    <p>
                      The latest books and online courses
                      <br />
                      at your disposal
                    </p>
                  </div>
                </div>

                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img src="images/new_images/careers/6.jpg" alt="Training" />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Training</h5>
                    <p>
                      The latest books and online courses <br />
                      at your disposal
                    </p>
                  </div>
                </div>

                <div className="careers-blocks wow fadeInUp">
                  <div className="careers-blocks-img">
                    <img
                      src="images/new_images/careers/7.jpg"
                      alt="Goodies in the kitchen"
                    />
                  </div>
                  <div className="careers-blocks-content">
                    <h5>Goodies in the kitchen</h5>
                    <p>Have a drink or snack #omnomnom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container open-position-container" id="open-position" style={{display : 'none'}}>
          <div className="row">
            <div className="col-12">
              <div className="section_header">
                <h2
                  className="wow zoomIn hover-careers-box"
                  data-wow-duration="2s"
                >
                  <span>OUR </span>
                  open positions
                </h2>
              </div>
            </div>
          </div>
          <div className="open-position-wrapper">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="open-position-skill wow fadeInUp">
                  <p>Developers</p>
                </div>
                <div className="open-position-skill-opening">
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">Python Developer</p>
                    <p>India</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">Ruby Developer</p>
                    <p>India or 100% remote</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">Node.js Developer</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="open-position-skill wow fadeInUp">
                  <p>Specialists</p>
                </div>
                <div className="open-position-skill-opening">
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">PHP Developer</p>
                    <p>India</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">
                      Magento Certified Developer
                    </p>
                    <p>India</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">Laravel Developer</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="open-position-skill wow fadeInUp">
                  <p>Designers</p>
                </div>
                <div className="open-position-skill-opening">
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">Product Designer</p>
                    <p>Brussels</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">UI Designer</p>
                    <p>Remote</p>
                  </div>
                  <div className="open-position-opening-block wow fadeInUp">
                    <p className="open-position-developer">
                      Senior UX Designer
                    </p>
                    <p>London or 100% remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--OUR COLLABORATION section--> */}
        <div className="collabration_section pt120 careers-steps" id="steps_before_joining">
          {/* <!--OUR COLLABORATION header--> */}
          <div className="container collabration_header">
            {/* <!-- <img className="section_header_bg" src="images/desktop/services_head.png" alt="Service Heading background" /> --> */}
            <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
              <div className="section_header">
                <h2 className="wow zoomIn career_section_header_h2" data-wow-duration="2s" >
                  A Few Steps Before Joining Codelink Infotech
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="collaboration_container">
              <div className="row">
                <div className="col-sm-4 zip_horiz_line border_right zip_xs_line">
                  <div
                    className="collaboration_block"
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="front">
                      <span className="number_block">1</span>
                      <h5>CV Review</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">1</span>
                      <h5>CV Review</h5>
                      <p>
                        In this step we are reviewing your application and
                        checking your resume.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 zip_horiz_line border_right border_left zip_xs_line">
                  <div
                    className="collaboration_block"
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="front">
                      <span className="number_block">2</span>
                      <h5>Tech & HR Interview</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">2</span>
                      <h5>Tech & HR Interview</h5>
                      <p>First we have a technical interview followed by a HR round</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 zip_horiz_line border_left zip_xs_line">
                  <div
                    className="collaboration_block"
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="front">
                      <span className="number_block">3</span>
                      <h5>Interview with Head of Dept.</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">3</span>
                      <h5>Interview with Head of Dept.</h5>
                      <p>Once you have passed through all previous steps, you'll talk to the head of Dept</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row flex-row-reverse">
                <div className="col-sm-4 zip_horiz_line border_left zip_xs_line">
                  <div className="border_top">
                    <div
                      className="collaboration_block"
                      onClick={(e) => handleClick(e)}
                    >
                      <div className="front">
                        <span className="number_block">4</span>
                        <h5>Offer</h5>
                      </div>
                      <div className="item-overlay top">
                        <span className="number_block">4</span>
                        <h5>Offer</h5>
                        <p>When you have made it through our challenging process,we will make you an offer </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 zip_horiz_line border_right zip_xs_line">
                  <div
                    className="collaboration_block"
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="front">
                      <span className="number_block">5</span>
                      <h5>Welcome on board!</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">5</span>
                      <h5>Welcome on board!</h5>
                      <p>
                        You join us and start solving customer problems and
                        building kickass products
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-4 zip_horiz_line border_right zip_xs_line zip_xs_line-none">
                  <div
                    className="collaboration_block"
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="front">
                      <span className="number_block">6</span>
                      <h5></h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">
                        <img
                          src="images/new_images/careers/welcome-on-board.jpg"
                          alt="Welcome on board!"
                        />
                      </span>
                      <h5></h5>
                      <p>
                        
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-12">
            <p className="become-code-p-top"> Create great products <b>with us!</b>
                <br />
                <b>Let’s</b> write some beautiful code and make smart designs.
                <br />
                This is what <b>we’re crazy about,</b> and we’re looking for <b>the ones
                who feel</b> the same.</p>
          </div>
      </div>
    </>
  );
};

export default Career;
