import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Settings, TrendingUp } from "lucide-react";
import TrialDialog from "@/components/TrialDialog";

const steps = [
  {
    title: "Install the tracking snippet",
    icon: <Download className="w-6 h-6 text-primary" />,
    desc: "Add a lightweight script to your site or use our integrations to start collecting data in minutes.",
  },
  {
    title: "Configure your dashboards",
    icon: <Settings className="w-6 h-6 text-primary" />,
    desc: "Customize metrics, privacy settings, and data retention to match your needs.",
  },
  {
    title: "Optimize performance",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    desc: "Use insights to improve load times, conversions, and visitor experience.",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Boost your website performance in three easy steps
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3">
            Get actionable insights and measurable improvements fast — privacy-first and lightweight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
