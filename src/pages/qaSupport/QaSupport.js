import OtherServices from '../components/OtherServices'
import Technology from '../components/Technology'
import Assurence from './components/Assurence'
import Banner from './components/Banner'
import Service from './components/Service'
import Support from './components/Support'

const QaSupport = () => {

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

  const techBox = {
    mainBoxHeadLeft: 'TESTING',
    mainBoxHeadRight: ' TOOLS AND TECHNOLOGIES',

    "box": [
    {
      boxImg: 'images/selenium.svg',
      boxTitle: 'Selenium',
      boxDesc: `Selenium is a lightweight framework for online application testing. Without having to learn a test scripting language, Selenium provides a playback tool for building functional tests.`,
    }, 
    {
      boxImg: 'images/cacumber.svg',
      boxTitle: 'Cucumber',
      boxDesc: `Cucumber is a programme that computer programmers use to test other applications. It executes behavior-driven development-style automated acceptance tests.`,
    }, 
    {
      boxImg: 'images/Apache_Feather_Logo.svg',
      boxTitle: 'Jmeter',
      boxDesc: `JMeter is an Apache project that may be used to load test a variety of services, with a concentration on online applications.`,
    }, 
    {
      boxImg: 'images/Calabash-logo.svg',
      boxTitle: 'Calabash',
      boxDesc: `It is an open-source acceptance testing framework for iOS and Android apps that allows you to build and run tests.`,
    }, 
    {
      boxImg: 'images/jenkins.svg',
      boxTitle: 'Jenkins',
      boxDesc: `Jenkins includes a test harness based on the JUnit test framework to make test development easier. This has the following advantages: Jenkins installation setup and teardown automated, allowing each test method to execute in a clean, isolated environment.`,
    }, 
    {
      boxImg: 'images/Locust-logo.svg',
      boxTitle: 'Locust',
      boxDesc: `Locust is a distributed user load testing tool that is simple to use. It's designed to load-test websites (or other systems) and determine how many concurrent users a system can support. The premise is that a swarm of locusts will assault your website during the test.`,
    }]
  }


  return (
    <>
      <Banner />
      <Service />
      <Support />
      <Assurence />
      <Technology techBox={techBox} />
      <OtherServices serviceData={serviceData} />
    </>
  )
}

export default QaSupport
