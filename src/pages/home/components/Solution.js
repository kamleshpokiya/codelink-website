import React from 'react'

const Solution = () => {
  return (
    <>
          {/* <!--our client section--> */}
    {/* <!--services section--> */}
    <div className="pt120">
      {/* <!--services header--> */}
      <div className="container">
        {/* <!-- <img className="section_header_bg" src="images/desktop/services_head.png" alt="Service Heading background" style="max-width: 55%;" /> --> */}
        <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
          <div className="section_header">
            <h2
              className="wow zoomIn border_hover .border_hover::before"
              data-wow-duration="2s"
            >
              <span>Agile</span> Solution process
            </h2>
            {/* <!-- <p className="wow zoomIn" data-wow-duration="2s">
                  We're a team of <b>software engineers, product designers and strategists</b> with a passion to
                  create
                  digital products that make people happy and businesses grow. <b>From strategy to product launch
                     and beyond</b>, we work in strategic partnerships with companies that take their digital
                  future
                  seriously.
               </p> --> */}
          </div>
        </div>
      </div>
      {/* <!--services content--> */}
      <div className="container">
        <div className="text-center wow zoomIn agile-img" data-wow-duration="2s">
          {/* <!-- <a className="hire_btn teal_btn hvr-bounce-to-bottom" href="contact-us.html" onclick="">DROP US A LINE</a> --> */}
          <img src="images/Problem_new.png" alt="" />
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Solution
