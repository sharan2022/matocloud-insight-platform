import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThreeSteps from "@/components/ThreeSteps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
  <Hero />
  <Features />
  <ThreeSteps />
  <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
