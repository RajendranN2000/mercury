import BrandSection from "../components/BrandSection";
import FaqSection from "../components/FaqSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Banner from "../components/HeroBanner";
import Management from "../components/Management";
import Newsletter from "../components/Newsletter";
import OurSolution from "../components/OurSolution";
import SmartToolsSection from "../components/SmartToolsSection";
import StartSaving from "../components/StartSaving";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BrandSection/>
      <FeatureSection/>
      <SmartToolsSection/>
      <Management/>
      <StartSaving/>
      <OurSolution/>
      <FaqSection/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};
export default Home
