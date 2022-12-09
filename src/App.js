import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Header & Footer
import Header from "./includes/Header";
import Footer from "./includes/Footer";

// Pages
import Home from "./pages/home/Home";
import OurProcess from "./pages/ourprocess/OurProcess";
import OurCases from "./pages/OurCases";
import Contact from "./pages/Contact";
import Careers from "./pages/careers/Careers";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DesignAndBrands from "./pages/designAndBrands/DesignAndBrands";
import DigitalMarketing from "./pages/digitalMarketing/DigitalMarketing";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import WebDevelopment from "./pages/webdevelopment/WebDevelopment";
import AppDevelopment from "./pages/appdevelopment/AppDevelopment";
import QaSupport from "./pages/qaSupport/QaSupport";
import CookiePolicy from "./pages/CookiePolicy";
import About from "./pages/about/About";
import Pagenotfound from "./pages/Pagenotfound";
import ScrollToTop from "./pages/components/scrollToTop";


const App = () => {

  // For Nested Routing
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );


  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />} >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="our-process" element={<OurProcess />} />
            <Route exact path="our-cases" element={<OurCases />} />
            <Route exact path="company" element={<About />} />
            <Route exact path="contact-us" element={<Contact />} />
            <Route exact path="careers" element={<Careers />} />
            <Route exact path="terms-conditions" element={<TermsConditions />} />
            <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="cookie-policy" element={<CookiePolicy />} />
            <Route exact path="design-branding" element={<DesignAndBrands />} />
            <Route exact path="digital-marketing" element={<DigitalMarketing />} />
            <Route exact path="ecommerce" element={<Ecommerce />} />
            <Route exact path="web-development" element={<WebDevelopment />} />
            <Route exact path="app-development" element={<AppDevelopment />} />
            <Route exact path="quality-assurance" element={<QaSupport />} />
          </Route>
          <Route exact path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
