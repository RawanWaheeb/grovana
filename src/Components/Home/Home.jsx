import AboutSection from "./aboutSection/AboutSection";
import CategorySection from "./categorySection/CategorySection";
import ContactSection from "./contactSection/ContactSection";
import FeatureSection from "./featureSection/FeatureSection";
import HeroSection from "./heroSection/heroSection";
import PlantHealthFeature from "./plantHealthFeatureSection/PlantHealthFeature";
import { ReviewSection } from "./reviewSection/ReviewSection";
import SREA from "./sreaSection/SREA";

// import style from './Home.module.css'
export default function Home() {
  return (
    <>
      <div>
        <section id="home" className="h-screen px-6">
          <HeroSection />
        </section>
        {/* Feature Section */}
        <section  className="py-16">
          <FeatureSection />
        </section>

        <section id="shop" className="h-screen flex items-center  py-16 ">
          <CategorySection />
        </section>

        <section id="about_us" className="h-screen flex items-center   py-16 ">
          <AboutSection />
        </section>

        <section id="#" className="h-screen flex items-center py-16 ">
          <SREA />
        </section>
        <section id="ai_help" className="h-screen flex items-center py-16 ">
          <PlantHealthFeature />
        </section>

        <section id="content" className="h-screen flex items-center py-16 ">
          <ContactSection />
        </section>

        <section id="review" className="h-screen flex items-center py-16 ">
          <ReviewSection />
        </section>
      </div>
    </>
  );
}
