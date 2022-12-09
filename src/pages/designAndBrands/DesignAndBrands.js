// Components
import OtherServices from "../components/OtherServices";
import Technology from "../components/Technology";
import Service from "./components/Service";
import Banner from "./components/Banner";
import ContactUs from "../components/ContactUs";

const DesignAndBrands = () => {


  // Technology Component
  const techBox = {
    mainBoxHeadLeft: 'OUR',
    mainBoxHeadRight: ' TECHNOLOGIES',

    "box": [
      {
        boxImg: 'images/figmasvg.svg',
        boxTitle: 'Figma',
      },
      {
        boxImg: 'images/xd.svg',
        boxTitle: 'XD',
      },
      {
        boxImg: 'images/photoshop.svg',
        boxTitle: 'Photoshop',
      },
      {
        boxImg: 'images/illustrator.svg',
        boxTitle: 'illustrator',
      },
      {
        boxImg: 'images/CSS3_and_HTML5_logos_and_wordmarks.svg',
        boxTitle: 'HTML & CSS',
      }
    ]
  }

  // Contact Component
  const contactOffer = {
    titleOne: "CONTACT US FOR A DESIGN",
    titleTwo: "  WORKSHOP",
    titleThree: "",
    buttonText: "START A PROJECT"
  }


  // Other Services Component
  const serviceData = {
    firstTitleL: "E",
    firstTitleR: "COMMERCE",
    firstLink: "/ecommerce",
    secondTitleL: "DIGITAL",
    secondTitleR: "MARKETING",
    secondLink: "/digital-marketing",
    thirdTitleL: "WEB",
    thirdTitleR: "DEVELOPMENT",
    thirdLink: "/web-development",
  };



  return (
    <>
      <Banner Banner />
      <Service />
      <Technology techBox={techBox} />
      <ContactUs contactOffer={contactOffer} />
      <OtherServices serviceData={serviceData} />
    </>
  );
};

export default DesignAndBrands;
