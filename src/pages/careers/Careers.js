import ContactUs from "../components/ContactUs";
import Career from "./components/Career";

const Careers = () => {
 
  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: " JOIN?",
    titleThree: "",
    buttonText: "APPLY NOW",
  };

  return (
    <>
      <Career />
      <ContactUs contactOffer={contactOffer} />
    </>
  );
};

export default Careers;
