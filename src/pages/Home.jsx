import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Featured from "../components/Home/Featured/Featured";
import OurMission from "../components/Home/Mission/OurMission";
import News from "../components/Home/News/News";
import Footer from "../components/Footer";
import AboutUs from "../components/Home/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Featured />
      <OurMission />
      <News />
      <Footer />
    </>
  );
};

export default Home;
