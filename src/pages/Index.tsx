import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThreeSteps from "@/components/ThreeSteps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Support scrolling when navigating from other pages via location.state.scrollTo
    const maybeId = (location.state as any)?.scrollTo || (location.hash ? location.hash.replace("#", "") : null);
    if (!maybeId) return;

    // wait for the page to render, then compute header offset and scroll
    const timer = setTimeout(() => {
      const headerEl = document.querySelector("header");
      const offset = headerEl ? headerEl.getBoundingClientRect().height : 80;
      const el = document.getElementById(maybeId);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

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
