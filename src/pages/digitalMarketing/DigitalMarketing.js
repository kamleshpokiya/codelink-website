import ContactUs from '../components/ContactUs'
import OtherServices from '../components/OtherServices'
import Banner from './components/Banner'
import Competencies from './components/Competencies'
import WeDoItAll from './components/WeDoItAll'

const DigitalMarketing = () => {

  const serviceData = {
    firstTitleL: "PRODUCT",
    firstTitleR: "DESIGN",
    firstLink: "/design-branding",
    secondTitleL: "E-",
    secondTitleR: "COMMERCE",
    secondLink: "/ecommerce",
    thirdTitleL: "MOBILE",
    thirdTitleR: "DEVELOPMENT",
    thirdLink: "/app-development",
  };

  const contactOffer = {
    titleOne : "READY TO",
    titleTwo : " TALK",
    titleThree : "? ",
    buttonText : "START A PROJECT"
  }

  return (
    <>
      <Banner/>
      <Competencies/>
      <WeDoItAll/>
      <ContactUs  contactOffer = {contactOffer}/>
      <OtherServices serviceData={serviceData} />
    </>
  )
}

export default DigitalMarketing
