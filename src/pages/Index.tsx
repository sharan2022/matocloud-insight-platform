import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThreeSteps from "@/components/ThreeSteps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    // Support scrolling when navigating from other pages via location.state.scrollTo or hash.
    const maybeId = (location.state as any)?.scrollTo || (location.hash ? location.hash.replace("#", "") : null);
    if (!maybeId) return;

    let attempts = 0;
    // Try to find the element periodically until it's available or we exceed attempts
    const interval = setInterval(() => {
      const headerEl = document.querySelector("header");
      const el = document.getElementById(maybeId);
      if (el) {
        const offset = headerEl ? headerEl.getBoundingClientRect().height : 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
        clearInterval(interval);
        // clear the navigation state to avoid repeated scrolling on back/forward
        try {
          navigate(location.pathname + location.search, { replace: true, state: {} });
        } catch (e) {
          // ignore navigation errors
        }
      }
      attempts += 1;
      if (attempts > 12) {
        // give up after ~1.2s
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [location, navigate]);

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
