import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Heart, Lock, FileCheck } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                HIPAA-Compliant Healthcare Analytics
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Protect patient privacy while gaining insights into patient engagement, appointment bookings, and healthcare service utilization.
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

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">HIPAA Compliance</h3>
                <p className="text-muted-foreground">
                  Full compliance with HIPAA regulations to protect patient health information.
                </p>
              </Card>
              <Card className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Patient Engagement</h3>
                <p className="text-muted-foreground">
                  Track patient portal usage, appointment scheduling, and telehealth adoption.
                </p>
              </Card>
              <Card className="p-6">
                <Lock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade encryption and security measures to protect sensitive data.
                </p>
              </Card>
              <Card className="p-6">
                <FileCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliance Reporting</h3>
                <p className="text-muted-foreground">
                  Generate audit trails and compliance reports for regulatory requirements.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Trusted by Healthcare Organizations
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy-First Analytics</h3>
                  <p className="text-muted-foreground">
                    Analyze patient behavior without compromising individual privacy or data security.
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
                  <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                  <p className="text-muted-foreground">
                    Optimize resource allocation and reduce wait times with data-driven insights.
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
                  <h3 className="text-xl font-semibold mb-2">Patient Experience</h3>
                  <p className="text-muted-foreground">
                    Improve patient satisfaction by understanding and optimizing their digital journey.
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
                  <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">
                    Meet all healthcare data privacy requirements including HIPAA and GDPR.
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
                Secure Analytics for Healthcare Providers
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start improving patient outcomes with privacy-compliant analytics today.
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

export default Healthcare;
