import React, { useState, useEffect, useLayoutEffect} from "react";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';


const Clients = () => {

  
  let settings = {
    dots: true,
    arrows: false,
    speed: 1000,  
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [width, height] = useWindowSize();
  const [setting, setSetting] = useState(settings);
  const a = useMediaQuery({ query: '(min-width : 100px)' })
  const b = useMediaQuery({ query: '(max-width : 599px)' })
  const c = useMediaQuery({ query: '(min-width : 600px)' })
  const d = useMediaQuery({ query: '(max-width : 1024px)' })
  const e = useMediaQuery({ query: '(min-width : 1025px)' })


  // Run When window size changes
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }



  // Apply media query
  useEffect(()=>{

    if(a && b){
      setSetting((previousState) => {
            return { ...previousState, slidesToShow : 1, slidesToScroll : 1};
      });
    }


    if(c && c){
      setSetting((previousState) => {
            return { ...previousState, slidesToShow : 2, slidesToScroll : 2};
      });
    }


    if(e){
      setSetting((previousState) => {
            return { ...previousState, slidesToShow : 3, slidesToScroll : 3};
      });
    }

  },[width], [height])  // Run when window size changes



  // View More
  const viewMore = (e) => {
    e.preventDefault();
    if (e.target.id === 'viewMoreOne') {
      document.getElementById("moreOne").style.display = "block";
      document.getElementById('viewMoreOne').style.display = 'none';
    }
    if (e.target.id === 'viewMoreTwo') {
      document.getElementById("moreTwo").style.display = "block";
      document.getElementById('viewMoreTwo').style.display = 'none';
    }
  };


  return (
    <>
      {/* <!--our client section--> */}
      <div className="our_client_section pt120 hide" id="our-clients-sec">
        {/* <!--OUR client header--> */}
        <div className="container">
          <div className="offset-sm-2 col-sm-8">
            <div className="section_header">
              <h2 className="wow zoomIn border_hover" data-wow-duration="2s">
                <span>OUR </span>
                CLIENTS
              </h2>
            </div>
          </div>
        </div>
        {/* <!--OUR client content--> */}
        <div className="container client_container">
          <Slider className="client-slider slider " {...setting}>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/client-1.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    The Codelink Infotech is creative and has good taste in web
                    design and development. It is difficult to find someone that can
                    design a wireframe to what you wanted with ppt slides and
                    descriptions. So far so good. Will be engaging him again for
                    2<sup>nd</sup> part of the project.  <strong> : )</strong>
                  </p>
                  <h4>
                    Joe Lim<span>Real Estate</span>
                    <a
                      href="#"
                      className="video-link"
                      vide_url="https://www.youtube.com/embed/5Peo-ivmupE?autoplay=1&mute=1"
                    ></a>
                    <button type="button" className="lim-video-play" data-toggle="modal" data-target="#playVideo" id="playBtn" style={{cursor : 'pointer'}}>
                      <i className="fab fa-youtube" id=""></i>
                    </button>
                  </h4>
                  <div className="hero-section_top">
                    <div className="hero-section">
                      <iframe
                        className="hero"
                        width="316"
                        height="210"
                        src=""
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/client-1-2.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    It was really a pleasure to work with Codelink Infotech.
                    Good communication, high quality work and delivery is always
                    on time. Codelink Infotech puts in all his efforts to ensure
                    you are satisfied with the output and goes beyond this to
                    exceed your expectations. I will definitely use him
                    <span className="dots" style={{ display: "inline" }}>
                      ..
                    </span>
                  </p>
                  <div className="more" id="moreOne" style={{ display: "none" }}>
                    <p className="client_para common_para mt-0">
                      again on my next assignments and I would recommend him to
                      anybody who is looking for a high quality development
                      team!
                    </p>
                  </div>
                  <span
                    className="client_review_btn" id="viewMoreOne"
                    onClick={(e) => viewMore(e)}
                  >
                    Read full review
                  </span>
                  <h4>
                    Goran Milosevic<span> Fannector</span>
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/client-13.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    It was evident from the start that Codelink Infotech is
                    passionate about making great sites. They helped us on a
                    complex Magento integration and we were impressed by their
                    attention to detail, their quick response time and their
                    deep talent pool.
                    <span className="dots" style={{ display: "inline" }}>
                      ..
                    </span>
                  </p>
                  <div
                    className="more"
                    id="moreTwo"
                    style={{ display: "none" }}
                  >
                    <p className="client_para common_para mt-0">
                      It was truly a collaborative project, and our in-house
                      team felt as if they were right there beside them,
                      striving for perfection and for the best outcome possible.
                      There is a pride of craftsmanship in Codelink Infotech
                      that reflects our own and give us no doubt that we can
                      count on them for the years ahead.
                    </p>
                  </div>
                  <span
                    className="client_review_btn" id="viewMoreTwo"
                    onClick={(e) => viewMore(e)}
                  >
                    Read full review
                  </span>
                  <h4>
                    Gaetan Helsen<span>Comeclosely</span>
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/jeroen.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    Codelink Infotech was one of the fastest agencies I have
                    ever worked with. Koen and his team overcommunicates and is
                    always on time. <br />
                    <br />
                    It was hard for me to keep up with him. <strong> : )</strong>
                  </p>
                  <h4>
                    Jeroen van Druenen<span>Instantcelebration.com</span>
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/joe.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    I’m very pleased with the work and impressed by the features
                    de­veloped. I trust that whenever a challenge might occur,
                    Codelink Infotech’s team will do their upper best to find
                    the perfect solution.
                  </p>
                  <h4>
                    Joe Simons<span> Woodpic.co.uk</span>
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="client_div_parent">
                <div className="client_div">
                  <img
                    className="client_img"
                    src="images/filip.png"
                    alt="client"
                  />
                  <p className="client_para common_para">
                    I’m very pleased with the work and impressed by the features
                    de­veloped. I trust that whenever a challenge might occur,
                    Codelink Infotech’s team will do their upper best to find
                    the perfect solution.
                  </p>
                  <h4>
                    Filip Matthys<span>Groep Matthys</span>
                  </h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clients;
