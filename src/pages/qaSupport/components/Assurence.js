import React from 'react'

const Assurence = () => {
  return (
    <>
    {/* Types of quality assurance testing */}
    <div className="types-of-testing">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h4 className="qa-support-services-title section-title  wow fadeIn">
              <span>Types of quality </span> assurance testing
            </h4>
            <p className="qa-support-services-title-sub section-title-sub  wow fadeUp">
              We offer a full range of software testing services for different
              types <br />
              of applications, including:
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="flex-fill">
            <div
              className="types-of-testing-steps text-center wow zoomIn animated"
              data-wow-duration="2s"
            >
              <p className="types-of-testing-steps-number">1</p>
              <p>
                Automated and
                <br />
                manual testing
              </p>
            </div>
          </div>
          <div className="flex-fill">
            <div
              className="types-of-testing-steps text-center wow zoomIn animated"
              data-wow-duration="4s"
            >
              <p className="types-of-testing-steps-number">2</p>
              <p>
                Functional and
                <br />
                regression testing
              </p>
            </div>
          </div>
          <div className="flex-fill">
            <div
              className="types-of-testing-steps text-center wow zoomIn animated"
              data-wow-duration="5s"
            >
              <p className="types-of-testing-steps-number">3</p>
              <p>
                Load and stress <br />
                testing
              </p>
            </div>
          </div>
          <div className="flex-fill">
            <div
              className="types-of-testing-steps text-center wow zoomIn animated"
              data-wow-duration="6s"
            >
              <p className="types-of-testing-steps-number">4</p>
              <p>Usability testing</p>
            </div>
          </div>
          <div className="flex-fill">
            <div
              className="types-of-testing-steps text-center wow zoomIn animated"
              data-wow-duration="7s"
            >
              <p className="types-of-testing-steps-number">5</p>
              <p>Compability testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Types of quality assurance testing */}
  </>
  
  )
}

export default Assurence
