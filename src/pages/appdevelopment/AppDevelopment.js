import ContactUs from "../components/ContactUs";
import OtherServices from "../components/OtherServices";
import Technology from "../components/Technology";
import Banner from "./components/Banner";
import Service from "./components/Service";

const AppDevelopment = () => {

  const serviceData = {
    firstTitleL: "PRODUCT",
    firstTitleR: " DESIGN",
    firstLink: "/design-branding",
    secondTitleL: "DIGITAL",
    secondTitleR: " MARKETING",
    secondLink: "/digital-marketing",
    thirdTitleL: "WEB",
    thirdTitleR: " DEVELOPMENT",
    thirdLink: "/web-development",
  };

  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: " TALK",
    titleThree: " ? ",
    buttonText: "START A PROJECT",
  };

  const techBox = {
    mainBoxHeadLeft: "OUR",
    mainBoxHeadRight: " TECHNOLOGIES",

    "box": [
      {
        boxImg: "images/iOs.svg",
        boxTitle: "iOS Native",
      },
      {
        boxImg: "images/android.svg",
        boxTitle: "Android",
      },
      {
        boxImg: "images/swift.svg",
        boxTitle: "Swift",
      },
      {
        boxImg: "images/flutter.svg",
        boxTitle: "Flutter",
      },
      {
        boxImg: "images/reactnative.svg",
        boxTitle: "React Native",
      },
      {
        boxImg: "images/swiftl.svg",
        boxTitle: "Swift-UI",
      },
      {
        boxImg: "images/objectivec.svg",
        boxTitle: "Objective-C",
      },
      {
        boxImg: "images/java.svg",
        boxTitle: "Java",
      }
    ]
  };

  return (
    <>
      <Banner />
      <Service />
      <Technology techBox={techBox} />
      <ContactUs contactOffer={contactOffer} />
      <OtherServices serviceData={serviceData} />
    </>
  );
};

export default AppDevelopment;
