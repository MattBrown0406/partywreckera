import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="listen">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
