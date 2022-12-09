import ContactUs from '../components/ContactUs'
import OtherServices from '../components/OtherServices'
import Technology from '../components/Technology'
import Banner from './components/Banner'
import Service from './components/Service'

const WebDevelopment = () => {

  const serviceData = {
    firstTitleL: "PRODUCT",
    firstTitleR: " DESIGN",
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
    titleThree : " ? ",
    buttonText : "START A PROJECT"
  }

  const techBox = {
    mainBoxHeadLeft : 'OUR',
    mainBoxHeadRight : ' TECHNOLOGIES',

    "box": [
    {
    boxImg : 'images/React-icon.svg',
    boxTitle : 'ReactJS',
    },
    {
    boxImg : 'images/nodejs.svg',
    boxTitle : 'NodeJS',
    },
    {
    boxImg : 'images/angularjs.svg',
    boxTitle : 'AngularJS',
    },
    {
    boxImg : 'images/vuejs.svg',
    boxTitle : 'VueJS',
    },
    {
    boxImg : 'images/php.svg',
    boxTitle : 'PHP',
    },
    {
    boxImg : 'images/codeigniter.svg',
    boxTitle : 'Codeigniter',
    },
    {
    boxImg : 'images/laravel.svg',
    boxTitle : 'Laravel',
    },
    {
    boxImg : 'images/wordpress.svg',
    boxTitle : 'WordPress',
    },
    {
    boxImg : 'images/woocommerce.svg',
    boxTitle : 'WooCommerce',
    },
    {
    boxImg : 'images/shopify.svg',
    boxTitle : 'Shopify',
    },
    {
    boxImg : 'images/cakephp.svg',
    boxTitle : 'CakePHP',
    }
    ]
  }


  return (
    <>
      <Banner/>
      <Service/>
      <Technology techBox = {techBox}/>
      <ContactUs  contactOffer = {contactOffer}/>
      <OtherServices serviceData={serviceData} />
    </>
  )
}

export default WebDevelopment
