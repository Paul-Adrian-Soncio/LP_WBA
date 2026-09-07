import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Listings from "@/components/Listings";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileCallFab from "@/components/MobileCallFab";
import ScrollReveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Listings />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <MobileCallFab />
    </>
  );
}
