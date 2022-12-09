import portfolios from './components/portfolios.json';
import ContactUs from './components/ContactUs';
const OurCases = () => {

  
  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: " TALK",
    titleThree: " ? ",
    buttonText: "DROP US A LINE",
  };

  var randomAppArr = [4,12,22,26,33];
  return (
    <>
      {/* <!--our cases section --> */}
      <div className="cases_section pt120">
        {/* <!--OUR CASES header--> */}
        <div className="container">
          {/* <!-- <img className="section_header_bg" src="images/desktop/cases_head.png" alt="Cases Heading Background" /> --> */}
          <div className="offset-sm-2 col-sm-8">
            <div className="section_header">
              <h2 className="wow zoomIn" data-wow-duration="2s">
                <span>OUR </span>
                CASES
              </h2>
              <p className="wow zoomIn" data-wow-duration="2s">
                Our clients are ecommerce stores and startups who deeply care
                about creating digital experiences that are simple and
                delightful.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="brand-logo d-lg-flex justify-content-between text-center">
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item text-center wow zoomIn' role='presentation'  data-wow-duration="2s">
                      <button 
                        className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn nav-link active"
                        href={void(0)}
                        id='all-application-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#all'
                        type='button'
                        role='tab'
                        aria-controls='all'
                        aria-selected='true'
                      >All</button>
                  </li>
                  <li className='nav-item text-center wow zoomIn' role='presentation'  data-wow-duration="2s">
                      <button 
                        className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn nav-link"
                        href={void(0)}
                        id='web-application-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#web'
                        type='button'
                        role='tab'
                        aria-controls='web'
                        aria-selected='true'
                      >Web Application</button>
                  </li>
                  <li className='nav-item text-center wow zoomIn' role='presentation' data-wow-duration="2s">
                      <button 
                        className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn nav-link" 
                        href={void(0)}
                        id='mobile-application-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#mobile'
                        type='button'
                        role='tab'
                        aria-controls='mobile'
                        aria-selected='false'
                      > Mobile Application </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container tab-content">
          <div className="row tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-application-tab">
            <div className="col-12" id='all_application_div'>
              <div className="blogs-tumb-main">
              {
                portfolios.webApplication.map((item, idx) =>
                <>
                {randomAppArr.includes(idx) && 
                <>
                <div className="blogs-tumb">
                    <div className="blog-thumb-frame">
                      <img className="d-block" src={portfolios.mobileApplication[randomAppArr.indexOf(idx)].src} />
                      <div className="blog-thumb-frame-content d-flex justify-content-between align-items-center">
                        <div className="blog-thumb-frame-content-p text-center"> <p> {portfolios.mobileApplication[randomAppArr.indexOf(idx)].desc} </p> </div>
                      </div>
                    </div>
                    <div className="blog-thumb-bottom"> <a href={portfolios.mobileApplication[randomAppArr.indexOf(idx)].url} target = 'blank'>
                      {portfolios.mobileApplication[randomAppArr.indexOf(idx)].domain}</a> <p>{portfolios.mobileApplication[randomAppArr.indexOf(idx)].name}</p> 
                    </div>
                </div>
                </>
                }
                  <div className="blogs-tumb">
                    <div className="blog-thumb-frame">
                      <img className="d-block" src={item.src} />
                      <div className="blog-thumb-frame-content d-flex justify-content-between align-items-center">
                        <div className="blog-thumb-frame-content-p text-center"> <p> {item.desc} </p> </div>
                      </div>
                    </div>
                    <div className="blog-thumb-bottom"> <a href={item.url} target = 'blank'>{item.domain}</a> <p>{item.name}</p> </div>
                  </div>
                  </>
                )
                }
              </div>
            </div>
            <div className="container">
              <div className="text-center wow zoomIn" data-wow-duration="2s">
                <a className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn show_more_btn" href={void(0)}> SHOW MORE </a>
              </div>
            </div>
          </div>
          <div className="row tab-pane fade show" id="web" role="tabpanel" aria-labelledby="web-application-tab">
            <div className="col-12" id='web_application_div'>
              <div className="blogs-tumb-main">
                { 
                portfolios.webApplication.map((item) => 
                  <div className="blogs-tumb">
                    <div className="blog-thumb-frame">
                      <img className="d-block" src={item.src} />
                      <div className="blog-thumb-frame-content d-flex justify-content-between align-items-center">
                        <div className="blog-thumb-frame-content-p text-center"> <p> {item.desc} </p> </div>
                      </div>
                    </div>
                    <div className="blog-thumb-bottom"> <a href={item.url} target = 'blank'>{item.domain}</a> <p>{item.name}</p> </div>
                  </div>
                )
                }
              </div>
            </div>
            <div className="container">
              <div className="text-center wow zoomIn" data-wow-duration="2s">
                <a className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn show_more_btn" href={void(0)}> SHOW MORE </a>
              </div>
            </div>
          </div>
          <div className="row tab-pane fade" id="mobile" role="tabpanel" aria-labelledby="mobile-application-tab">
            <div className="col-12">
              <div className="blogs-tumb-main">
              { 
                portfolios.mobileApplication.map((item) => 
                  <div className="blogs-tumb">
                    <div className="blog-thumb-frame">
                      <img className="d-block" src={item.src} />
                      <div className="blog-thumb-frame-content d-flex justify-content-between align-items-center">
                        <div className="blog-thumb-frame-content-p text-center"> <p> {item.desc} </p> </div>
                      </div>
                    </div>
                    <div className="blog-thumb-bottom"> <a href={item.url} target = 'blank'>{item.domain}</a> <p>{item.name}</p> </div>
                  </div>
                )
                }
              </div>
            </div>
            <div className="container">
              <div className="text-center wow zoomIn" data-wow-duration="2s">
                <a className="hire_btn teal_btn hvr-bounce-to-bottom banner_btn show_more_btn" href={void(0)}> SHOW MORE </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactUs contactOffer={contactOffer} />
    </>
  );
};

export default OurCases;
