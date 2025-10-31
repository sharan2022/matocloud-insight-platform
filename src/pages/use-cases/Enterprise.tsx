import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactSalesDialog from "@/components/ContactSalesDialog";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Globe, Settings, Users2 } from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise-Grade Analytics Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scale your analytics across global teams with advanced security, custom integrations, and dedicated support.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Site Management</h3>
                <p className="text-muted-foreground">
                  Manage analytics across hundreds of properties from a single dashboard.
                </p>
              </Card>
              <Card className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Infrastructure</h3>
                <p className="text-muted-foreground">
                  Deploy analytics globally with data residency controls and low latency.
                </p>
              </Card>
              <Card className="p-6">
                <Settings className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Integrations</h3>
                <p className="text-muted-foreground">
                  Connect with your enterprise tools via APIs and custom data pipelines.
                </p>
              </Card>
              <Card className="p-6">
                <Users2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Advanced user permissions, roles, and collaborative analytics workflows.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Built for Enterprise Scale
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                  <p className="text-muted-foreground">
                    SOC 2 Type II, SSO, 2FA, and advanced security controls for enterprise compliance.
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
                  <h3 className="text-xl font-semibold mb-2">Unlimited Scalability</h3>
                  <p className="text-muted-foreground">
                    Process billions of events with guaranteed uptime and performance SLAs.
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
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    24/7 priority support with dedicated account management and onboarding.
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
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-muted-foreground">
                    Tailored analytics solutions designed for your unique business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready for Enterprise Analytics?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Talk to our team about custom enterprise solutions tailored to your needs.
              </p>
              <ContactSalesDialog
                trigger={
                  <Button variant="hero" size="lg" className="gap-2">
                    Contact Sales <ArrowRight className="w-4 h-4" />
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

export default Enterprise;
