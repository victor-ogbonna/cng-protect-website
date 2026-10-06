import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Sdg from "../sections/Sdg";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Hardware from "../sections/Hardware";
import Web3 from "../sections/Web3";
import Traction from "../sections/Traction";
import Team from "../sections/Team";
import PilotCTA from "../sections/PilotCTA";
import Footer from "../sections/Footer";

export default function Landing() {
  return (
    <>
      <a
        href="#problem"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-on-brand"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Sdg />
        <Problem />
        <Solution />
        <Hardware />
        <Web3 />
        <Traction />
        <Team />
        <PilotCTA />
      </main>
      <Footer />
    </>
  );
}
