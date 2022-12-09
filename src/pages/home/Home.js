import Banner from "./components/Banner";
import ContactUs from "../components/ContactUs";
import Case from "./components/Case";
import Clients from "./components/Clients";
import Service from "./components/Service";
import Solution from "./components/Solution";

const Home = () => {

  const contactOffer = {
    titleOne: "READY TO",
    titleTwo: " TALK",
    titleThree: " ? ",
    buttonText: "DROP US A LINE",
  };

  return (
    <>
      <Banner />
      <Service />
      <Solution />
      <Case />
      <Clients />
      <ContactUs contactOffer={contactOffer} />
    </>
  );
};

export default Home;
