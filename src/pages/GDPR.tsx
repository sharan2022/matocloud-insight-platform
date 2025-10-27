import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import TrialDialog from "@/components/TrialDialog";

const GDPR = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                GDPR-ready analytics that protect privacy and keep you compliant
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Pinnacleanalytics is built to help organizations collect useful product insights while minimising personal data processing and respecting user rights.
              </p>
            </div>
          </div>
        </section>

        {/* Why GDPR-friendly analytics matters */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Why GDPR-friendly analytics matters</h2>
                <p className="text-base text-muted-foreground mb-4">
                  Complying with data protection laws isn't only about avoiding fines — it's about building trust with your users. By minimising personal data collection and giving users control, you can still gain valuable insights without compromising privacy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Respect user rights (access, correction, deletion)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Minimise collection of personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Provide transparency and lawful bases for processing</span>
                  </li>
                </ul>
              </div>

              <div>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Privacy-first features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Anonymous tracking options</li>
                    <li>IP anonymization</li>
                    <li>Configurable data retention</li>
                    <li>Opt-out mechanics and consent-friendly integration</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How it helps — practical steps */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">How pinnacleanalytics helps you comply</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Minimise personal data</h4>
                  <p className="text-sm text-muted-foreground">Collect only aggregated metrics and avoid storing identifiers by default.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Control retention</h4>
                  <p className="text-sm text-muted-foreground">Configure how long raw data is kept and automatically purge it when required.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Consent integration</h4>
                  <p className="text-sm text-muted-foreground">Integrate with CMPs so analytics only run when users consent.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">GDPR checklist</h2>
              <p className="text-sm text-muted-foreground mb-6">Practical items for your compliance review.</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Document lawful basis for analytics",
                  "Publish privacy notice with analytics details",
                  "Offer easy opt-out or consent mechanism",
                  "Anonymize or pseudonymize identifiers",
                  "Limit data retention and delete on request",
                  "Protect exported reports and dashboards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                <details className="p-4 rounded-lg bg-background border">
                  <summary className="font-medium">Is pinnacleanalytics GDPR compliant?</summary>
                  <p className="text-sm text-muted-foreground mt-2">pinnacleanalytics provides the tools and configurations that help you meet GDPR obligations, but compliance also depends on how you configure and use the platform.</p>
                </details>

                <details className="p-4 rounded-lg bg-background border">
                  <summary className="font-medium">Do you store personal data?</summary>
                  <p className="text-sm text-muted-foreground mt-2">By default we avoid collecting identifiers. Where necessary, you can enable additional features, but we recommend minimizing personal data collection and using pseudonymization.</p>
                </details>

                <details className="p-4 rounded-lg bg-background border">
                  <summary className="font-medium">How long is data retained?</summary>
                  <p className="text-sm text-muted-foreground mt-2">Retention is configurable per project; set retention windows to meet your policy and regulatory requirements.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to get started with privacy-first analytics?</h3>
              <p className="text-sm text-muted-foreground mb-6">Start a free trial and see how our GDPR-friendly defaults can be adapted to your policies.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
