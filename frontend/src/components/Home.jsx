import "./Home.css";
import BGLights from "./BG_Lights/BGLights";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import WhyToRead from "./WhyToRead/WhyToRead";
import VerseOfTheMoment from "./VerseOfTheMoment/VerseOfTheMoment";
import Testimonials from "./Testimonials/Testimonials";
import AreYouReady from "./AreYouReady/AreYouReady";
import Footer from "./Footer/Footer";
import FootLine from "./Footer/FootLine";

function Home() {
  return (
    <div>
      <BGLights />
      <Navbar />
      <Hero />
      <WhyToRead />
      <VerseOfTheMoment />
      <Testimonials />
      <AreYouReady />
      <Footer />
      <FootLine />
    </div>
  );
}

export default Home;