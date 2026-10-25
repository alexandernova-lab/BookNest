import NavBar from "../components/LandingPageComponents/NavBar";
import FeatureSection from "../components/LandingPageComponents/FeatureSection";
import StepSection from "../components/LandingPageComponents/StepSection";
import CTASection from "../components/LandingPageComponents/CTASection";
import Footer from "../components/LandingPageComponents/Footer";
import ImageSection from "../components/LandingPageComponents/ImageSection";
import HeroSection from "../components/LandingPageComponents/HeroSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <ImageSection />
        <FeatureSection />
        <StepSection />
        <CTASection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
