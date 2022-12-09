import React from "react";

const Collaboration = () => {

  const doSomething = (e) => {
    e.preventDefault();
  }
  return (
    <>
      {/* <!--OUR COLLABORATION section--> */}
      <div className="collabration_section pt120">
        {/* <!--OUR COLLABORATION header--> */}
        <div className="container collabration_header">
          {/* <!-- <img className="section_header_bg" src="images/desktop/services_head.png" alt="Service Heading background" /> --> */}
          <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <div className="section_header">
              <h2 className="wow zoomIn" data-wow-duration="2s">
                <span>OUR </span>
                COLLABORATION
              </h2>
              <p className="wow zoomIn" data-wow-duration="2s">
                The diagram below provides a brief overview of our engagement
                with clients. From the initial meeting to project delivery, we
                offer assistance and resources every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="collaboration_container">
            <div className="row">
              <div className="col-sm-4 zip_horiz_line border_right zip_xs_line">
                <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                  <div className="front">
                    <span className="number_block">1</span>
                    <h5>Discuss Project</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">1</span>
                    <h5>Discuss Project</h5>
                    <p>
                      We will schedule a call, skype or come at your office to
                      discuss your project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 zip_horiz_line border_right border_left zip_xs_line">
                <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                  <div className="front">
                    <span className="number_block">2</span>
                    <h5>Sign Contract</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">2</span>
                    <h5>Sign Contract</h5>
                    <p>
                      We always ensure there’s a signed contract inplace before
                      we start working.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 zip_horiz_line border_left zip_xs_line">
                <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                  <div className="front">
                    <span className="number_block">3</span>
                    <h5>Set Up Team</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">3</span>
                    <h5>Set Up Team</h5>
                    <p>
                      In stage we will select the team that matches your project
                      requirement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-row-reverse">
              <div className="col-sm-4 zip_horiz_line border_left zip_xs_line">
                <div className="border_top">
                  <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                    <div className="front">
                      <span className="number_block">4</span>
                      <h5>Set Up Infrastructure</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">4</span>
                      <h5>Set Up Infrastructure</h5>
                      <p>
                        Setup team's communication, task management, DevOps and
                        QA tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 zip_horiz_line border_right border_left zip_xs_line">
                <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                  <div className="front">
                    <span className="number_block">5</span>
                    <h5>Develop Software</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">5</span>
                    <h5>Develop Software</h5>
                    <p>
                      Member's follow the principles of Agile Development with
                      regular iterations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 zip_horiz_line border_right zip_xs_line">
                <div className="collaboration_block" onClick={(e)=>doSomething(e)}>
                  <div className="front">
                    <span className="number_block">6</span>
                    <h5>Deliver Regularly</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">6</span>
                    <h5>Deliver Regularly</h5>
                    <p>
                      With the end of each sprint you will get new
                      funcationality ready for testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 zip_horiz_line border_right zip_xs_line">
                <div className="border_top">
                  <div
                    className="collaboration_block collaboration_block_last"
                    onClick={(e)=>doSomething(e)}
                  >
                    <div className="front">
                      <span className="number_block">7</span>
                      <h5>Release Product</h5>
                    </div>
                    <div className="item-overlay top">
                      <span className="number_block">7</span>
                      <h5>Release Product</h5>
                      <p>
                        In this stage all features and functionality are fully
                        tested and approved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 zip_horiz_line border_left">
                <div
                  className="collaboration_block collaboration_block_last"
                  onClick={(e)=>doSomething(e)}
                >
                  <div className="front">
                    <span className="number_block">8</span>
                    <h5> Maintain Product</h5>
                  </div>
                  <div className="item-overlay top">
                    <span className="number_block">8</span>
                    <h5> Maintain Product</h5>
                    <p>
                      Maintenance & support of your product is key for long-term
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaboration;
