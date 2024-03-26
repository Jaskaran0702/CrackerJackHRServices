import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import AboutSection from "../container/HomeContainer/AboutSection";
import Blog from "../container/HomeContainer/Blog";
import FAQ from "../container/HomeContainer/FAQ";
import HeroSection from "../container/HomeContainer/HeroSection";
import Newsletter from "../container/HomeContainer/Newsletter";
import Portfolio from "../container/HomeContainer/Portfolio";
import Services from "../container/HomeContainer/Services";
import Testimonials from "../container/HomeContainer/Testimonials";
import { ToastContainer, toast } from "react-toastify";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div data-aos="fade-right">
        <AboutSection />
      </div>
      <div data-aos="zoom-in">
        <Services />
      </div>
      <div data-aos="fade-left">
        <Testimonials />
      </div>
      <div data-aos="fade-right">
        <Portfolio />
      </div>
      <div data-aos="fade-up">
        <Blog />
      </div>
      <div data-aos="fade-left">
        <FAQ />
      </div>
      <Newsletter />
      <ToastContainer />
      <Footer />
    </>
  );
}
