import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Zap, BarChart3, Target } from "lucide-react";

const SaaS = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Analytics Built for SaaS Companies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Track user engagement, feature adoption, and customer retention. Make data-driven decisions to grow your SaaS business.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-6">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Journey Tracking</h3>
                <p className="text-muted-foreground">
                  Understand how users navigate your app and identify friction points.
                </p>
              </Card>
              <Card className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Feature Adoption</h3>
                <p className="text-muted-foreground">
                  Track which features drive engagement and identify unused capabilities.
                </p>
              </Card>
              <Card className="p-6">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Retention Analytics</h3>
                <p className="text-muted-foreground">
                  Monitor churn rates and identify at-risk customers before they leave.
                </p>
              </Card>
              <Card className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Conversion Funnels</h3>
                <p className="text-muted-foreground">
                  Optimize trial-to-paid conversion and reduce signup friction.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why SaaS Teams Love Pinnacle Analytics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product-Led Growth</h3>
                  <p className="text-muted-foreground">
                    Identify activation moments and optimize the user onboarding experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Behavioral Insights</h3>
                  <p className="text-muted-foreground">
                    Understand what makes power users successful and replicate their behavior.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Revenue Intelligence</h3>
                  <p className="text-muted-foreground">
                    Connect user behavior to revenue metrics and forecast growth accurately.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">API & Integrations</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with your existing tech stack and CRM systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Transform Your SaaS with Data-Driven Insights
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of SaaS companies using Pinnacle Analytics to drive growth.
              </p>
              <TrialDialog
                trigger={
                  <Button variant="hero" size="lg" className="gap-2">
                    Start Free Trial <ArrowRight className="w-4 h-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SaaS;
