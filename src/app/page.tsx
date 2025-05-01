import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SpeakersSection from "../../components/Speakers";
import Footer from "../../components/Footer";
import AboutSection from "../../components/About";
import ScheduleSection from "../../components/ScheduleSection";
import PartnersSection from "../../components/Partners";
import ContactForm from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <SpeakersSection/>
      <ScheduleSection/>
      <PartnersSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
