import React from "react";

const Process = () => {
  return (
    <>
      {/* <!--our process section section--> */}
      <div className="our_process_section page_top">
        {/* <!--OUR process header--> */}
        <div className="container">
          {/* <!-- <img className="section_header_bg" src="images/process/process_head.png" alt="our process head" /> --> */}
          <div className="offset-sm-1 col-sm-10 offset-lg-2 col-lg-8">
            <div className="section_header">
              <h2 className="wow zoomIn" data-wow-duration="2s">
                <span>Our </span>
                Process
              </h2>
              <p className="subheader_p wow zoomIn" data-wow-duration="2s">
                We have a consistent applied process to build modern digital
                products. Every members is a dreamer and a doer. We are all
                united by a simple idea: creating products that delight
                customers.
                <br /> <br /> We always push our clients, our employees, and our
                industry to go to the edge of what is possible and exceed their
                own expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="container process_container">
          <div className="row">
            <div className="col-lg-12 process_zip">
              <div className="process_zip_img-wrapper">
                <div className="process_zip_img-bg"></div>
                <svg
                  width="155"
                  height="1302"
                  viewBox="0 0 155 1302"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.40625C38.9753 40.0259 125.5 84.9062 131.5 208.406C125.127 287.614 16.314 337.998 11.1615 416.906C5.28984 506.829 147.944 519.906 152.662 688.406C155.582 792.673 32 738.906 32 875.906C72 982.406 126.142 936.318 152.662 1050.41C168.038 1116.55 3 1128.41 52.6602 1293.41"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeDasharray="4.97 4.97"
                  />
                </svg>
              </div>
              <div className="process_block row">
                <div className="process_img col-md-4">
                  <img
                    src="images/new_images/ourprocess/process3.png"
                    alt="process img"
                    className="wow slideInLeft"
                    data-wow-duration="0.5"
                    data-wow-delay="0.5"
                  />
                </div>
                <div className="process_content col-md-8 col-lg-5">
                  <h5>Product Research & Strategic Support</h5>
                  <span>1/2 - 2  weeks</span>
                  <p>
                    Initially, we gain an understanding of your business goals
                    and end-user needs. Based on our analysis we create an
                    initial set of Low-Fidelity Wireframes to kick-off. This is
                    the first stage of our Milestone-driven product design and
                    development process. You will have experienced strategic
                    senior support throughout all stages, but especially during
                    these initial weeks to guide you through an initial decision
                    making process, determine priorities and establish best
                    practices for communication, progress reports and delivery.
                  </p>
                </div>
              </div>
              <div className="process_block row">
                <div className="process_img  col-md-4">
                  <img
                    src="images/new_images/ourprocess/process1.png"
                    alt="process img"
                    className="wow slideInLeft"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.5"
                  />
                </div>
                <div className="process_content col-md-8 col-lg-5">
                  <h5>UX/UI Design & Product Conceptualization</h5>
                  <span>3 - 6  weeks</span>
                  <p>
                    Our design team creates High-Fidelity Wireframes for you to
                    review and offer incremental feedback, progressing towards a
                    pixel-perfect intuitive design. At this stage we also
                    determine the final team structure as well as necessary
                    languages & requirements for the product build.
                  </p>
                </div>
              </div>
              <div className="process_block row">
                <div className="process_img  col-md-4">
                  <img
                    src="images/new_images/ourprocess/process4.png"
                    alt="process img"
                    className="wow slideInLeft"
                    data-wow-duration="0.5"
                    data-wow-delay="0.5"
                  />
                </div>
                <div className="process_content col-md-8 col-lg-5">
                  <h5>Development</h5>
                  <span>2 - 4 months</span>
                  <p>
                    Our development team collaborates through iterative
                    Milestones throughout the product building process with
                    emphasis on functionality and a flawless UX/UI experience.
                    We prioritize features and scope to tackle each goal step by
                    step, with weekly tracking on Trello, JIRA or your preferred
                    project admin tool.
                  </p>
                  <p>
                    {" "}
                    Milestone progress is communicated constantly as defined by
                    the following stages: Milestone Scope, Milestone Progression
                    & Build, QA, Client Testing and Milestone Review. This
                    gradual Milestone build/test/review cycles enable us to
                    incorporate your feedback and prioritize the most critical
                    product features as necessary.
                  </p>
                </div>
              </div>
              <div className="process_block row">
                <div className="process_img  col-md-4">
                  <img
                    src="images/new_images/ourprocess/process2.png"
                    alt="process img"
                    className="wow slideInLeft"
                    data-wow-duration="0.5"
                    data-wow-delay="0.5"
                  />
                </div>
                <div className="process_content col-md-8 col-lg-5">
                  <h5>Prepare to Launch</h5>
                  <span>1 - 3 weeks </span>
                  <p>
                    We work with you every step of the way to make sure your
                    launch is optimal and a significant win for all. We offer
                    training and maintenance to ensure a smooth transition for
                    your team handoff and launch.
                  </p>
                </div>
              </div>
              <div className="process_block row">
                <div className="process_img  col-md-4">
                  <img
                    src="images/new_images/ourprocess/process5.png"
                    alt="process img"
                    className="wow slideInLeft"
                    data-wow-duration="0.5"
                    data-wow-delay="0.5"
                  />
                </div>
                <div className="process_content col-md-8 col-lg-5">
                  <h5>Project Maintenance & Growth</h5>
                  <span>As required</span>
                  <p>
                    We provide support and Bug-Fixing as needed. Our maintenance
                    services range from performance monitoring, QA, bug-fixing
                    to development of new functionalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
