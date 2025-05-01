import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SpeakersSection from "../../components/Speakers";
import Team from "../../components/Team";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SpeakersSection/>
      <Team/>
      <Contact/>
    </div>
  );
}
