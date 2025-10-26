import { Shield, Lock, Zap, Globe, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. No third-party tracking, no data sharing with advertisers.",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Built from the ground up with privacy regulations in mind. Fully compliant.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Get instant insights with real-time data processing and visualization.",
  },
  {
    icon: Globe,
    title: "Unlimited Sites",
    description: "Track as many websites and applications as you need, all in one place.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Reporting",
    description: "Custom dashboards, detailed reports, and powerful data export capabilities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-6 sm:py-16 md:py-6 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
              Data Analytics
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Powerful features designed to give you complete control over your data insights
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ 
                boxShadow: "var(--shadow-card)",
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
