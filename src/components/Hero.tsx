import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";
import TrialDialog from "@/components/TrialDialog";
import VideoDialog from "@/components/VideoDialog";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
  <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-20 md:pt-24 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Privacy-First Analytics</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
                Data Insights
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pinnacle Analytics gives you complete ownership and control over your analytics data. 
              No third-party tracking, no data sharing, just pure insights which is baselined from matomo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <TrialDialog />
              <VideoDialog
                trigger={
                  <Button asChild variant="hero-outline" size="lg" className="w-full sm:w-auto">
                    <a> Watch Demo </a>
                  </Button>
                }
                videoId="-q8ukThQ-ng"
              />
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 pt-4 flex-wrap">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Data Ownership</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">GDPR</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
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
