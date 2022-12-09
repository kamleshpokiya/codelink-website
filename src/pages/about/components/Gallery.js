import React from "react";

const Gallery = () => {

  // Image CSS
  const imgStylee = {
    width: "100%"
  }

  return (
    <>
      <div className="footer-pages ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-pages-section gallary_container">
                <div className="about-image-mainsection">
                  <div className="section_header">
                    <h2 className="about_shadow-box wow fadeInUp">gallery</h2>
                    <p className="wow zoomIn suf_text gallary_header" data-wow-duration="2s">
                    <b>Having documented pictures is the best memory</b> to cherish for a lifetime. Have a look at our camera roll. We have shown <b>
                    pictures of the celebration</b> and how <b>Codelinkies enjoy their time here!</b> It's a representation of <br/><b>" PLAY HARD, WORK HARDER "</b>
                    </p>
                  </div>

                  <div className="about_icon-box wow fadeInRight">
                    <ul className="social_ul">
                      <li><a href="https://www.linkedin.com/company/codelink-infotech/" target="_blank" > <i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="https://instagram.com/codelinkinfotech" target="_blank"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.facebook.com/codelinkinfotech" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    </ul>
                  </div>

                  <div className="about-images-topbox wow fadeInUp">
                    <div className="row">
                      <div className="column ">
                        <img src="images/new_images/about_us/w3school/whatsapp2.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp3.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp4.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp6.png" style={imgStylee} alt='' loading="lazy"/>
                      </div>

                      <div className="column">
                        <img src="images/new_images/about_us/w3school/whatsapp2/whatsapp1.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp2/whatsapp2.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp2/whatsapp5.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp2/whatsapp4.png" style={imgStylee} alt='' loading="lazy"/>
                      </div>

                      <div className="column">
                        <img src="images/new_images/about_us/w3school/whatsapp3/whatsapp1.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp3/whatsapp2.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp3/whatsapp3.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp3/whatsapp4.png" style={imgStylee} alt='' loading="lazy"/>
                      </div>
                      
                      <div className="column ">
                        <img src="images/new_images/about_us/w3school/Untitled.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp4/whatsapp1.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp4/whatsapp2.png" style={imgStylee} alt='' loading="lazy"/>
                        <img src="images/new_images/about_us/w3school/whatsapp4/whatsapp3.png" style={imgStylee} alt='' loading="lazy"/>
                      </div>
                      <div className="last-shadow-box"></div>
                    </div>
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

export default Gallery;
