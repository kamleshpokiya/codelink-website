import ContactUs from "../components/ContactUs";
import Collaboration from "./components/Collaboration";
import Process from "./components/Process";

const OurProcess = () => {

  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: "  TALK",
    titleThree: " ?",
    buttonText: "DROP US A LINE",
  };

  return (
    <>
      <Process />
      <Collaboration />
      <ContactUs contactOffer={contactOffer} />
    </>
  );
};

export default OurProcess;
