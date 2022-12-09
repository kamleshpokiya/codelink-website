import ContactUs from '../components/ContactUs'
import OtherServices from '../components/OtherServices'
import Banner from './components/Banner'
import Service from './components/Service'

const Ecommerce = () => {

  const serviceData = {
    firstTitleL: "PRODUCT",
    firstTitleR: "DESIGN",
    firstLink: "/design-branding",
    secondTitleL: "DIGITAL",
    secondTitleR: "MARKETING",
    secondLink: "/digital-marketing",
    thirdTitleL: "WEB",
    thirdTitleR: "DEVELOPMENT",
    thirdLink: "/web-development",
  };
  
  const contactOffer = {
    titleOne : "READY TO",
    titleTwo : " TALK",
    titleThree : " ? ",
    buttonText : "START A PROJECT"
  }


  return (
    <>
      <Banner />
      <Service/>
      <ContactUs  contactOffer = {contactOffer}/>
      <OtherServices serviceData={serviceData} />
    </>
  )
}

export default Ecommerce
