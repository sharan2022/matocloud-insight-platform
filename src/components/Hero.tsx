import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy-First Analytics</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
                Data Insights
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              MatoCloud gives you complete ownership and control over your analytics data. 
              No third-party tracking, no data sharing, just pure insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Data Ownership</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">GDPR</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-20" style={{ background: "var(--gradient-primary)" }} />
            <img 
              src={heroImage} 
              alt="Analytics Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
