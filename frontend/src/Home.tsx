import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
