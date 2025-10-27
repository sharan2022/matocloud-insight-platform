import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";

const GDPR = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">GDPR</h1>
              <p className="text-base text-muted-foreground mb-6">
                Information about how pinnacleanalytics helps you comply with GDPR requirements.
              </p>
              <TrialDialog trigger={<Button variant="hero" size="lg">Start Free Trial</Button>} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
