import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { PodcastJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Party Wreckers Podcast | Addiction, Intervention & Recovery"
        description="Real conversations about addiction, intervention, and recovery. Host Matt Brown helps families find hope and practical guidance with 20+ years of experience."
        canonical="/"
      />
      <PodcastJsonLd />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      
      <Navbar />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
