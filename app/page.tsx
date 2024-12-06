import AboutUs from "./components/Aboutus";
import Conversation from "./components/Conversation";
import HeroSection from "./components/HeroSection";
import News from "./components/News";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <News />
      <Conversation />
    </div>
  );
}
