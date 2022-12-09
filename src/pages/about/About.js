import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Founders from "./components/Founders";
import './components/about_style.css';
import ContactUs from "../components/ContactUs";

const About = () => {

  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: " TALK",
    titleThree: " ? ",
    buttonText: "DROP US A LINE",
  };


  return (
    <>
      <Banner />
      <Founders />
      <Gallery />
      <ContactUs contactOffer={contactOffer} />
    </>
  );
};

export default About;
