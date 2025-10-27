import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy policy</h1>
              <p className="text-base text-muted-foreground mb-6">
                We respect your privacy and are committed to protecting personal data. This
                policy explains what data we collect, why we collect it, how we use it, and the
                choices available to you.
              </p>

              <div className="flex items-center justify-center gap-4">
                <TrialDialog trigger={<Button variant="hero" size="lg">Start Free Trial</Button>} />
                <Link to="/privacy/cookies" className="inline-block">
                  <Button variant="outline" size="lg">Cookie Notice</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Data we collect</CardTitle>
                  <CardDescription>Types of information</CardDescription>
                </CardHeader>
                <CardContent>
                  We collect information you provide directly (for example account details),
                  information collected automatically (such as usage data and cookies), and data
                  from third-party services where you give permission. We minimize collection to
                  what's necessary for the features you use.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How we use data</CardTitle>
                  <CardDescription>Service delivery and improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  Data is used to provide and improve our services, communicate with you, secure
                  systems, and comply with legal obligations. We may also aggregate anonymized
                  information for analytics and product development.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Legal basis</CardTitle>
                  <CardDescription>When we process personal data</CardDescription>
                </CardHeader>
                <CardContent>
                  Depending on context, processing is based on consent, contractual necessity,
                  legitimate interests, or legal obligations. Where we rely on consent, you may
                  withdraw it at any time without affecting prior processing.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data sharing</CardTitle>
                  <CardDescription>Third parties and processors</CardDescription>
                </CardHeader>
                <CardContent>
                  We share data with service providers who process data on our behalf (hosting,
                  analytics, payments) and when required by law. We use contracts and technical
                  controls to ensure processors meet our privacy and security standards.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data retention</CardTitle>
                  <CardDescription>How long we keep data</CardDescription>
                </CardHeader>
                <CardContent>
                  We retain personal data only as long as necessary for the purposes described and
                  to meet legal obligations. Retention periods vary by data type and service used.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User rights</CardTitle>
                  <CardDescription>Access, correction, deletion</CardDescription>
                </CardHeader>
                <CardContent>
                  Depending on your jurisdiction, you may have rights to access, correct, export,
                  restrict, or delete personal data. To exercise these rights, contact us via the
                  contact page and we will respond in accordance with applicable law.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Security and transfers</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect data.
              Where data is transferred across borders, we rely on standard contractual
              mechanisms, certifications, or other lawful transfer bases to ensure adequate
              protections.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not directed at children under 13 (or higher minimum age where
              applicable). We do not knowingly collect personal data from children without
              parental consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-party links and integrations</h2>
            <p className="text-muted-foreground mb-4">
              Our site may link to third-party services or include embedded content. These
              services have their own privacy practices. We encourage you to review their
              policies before providing personal information.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Contact and changes</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about this privacy policy or wish to exercise your privacy
              rights, please <Link to="/contact" className="underline">contact our team</Link>.
            </p>
            <p className="text-sm text-muted-foreground mb-6">We may update this policy from time to time; the date of the latest
              revision will be listed at the top of the policy.</p>

            <div className="flex items-center justify-center gap-4">
              <TrialDialog trigger={<Button variant="outline">Start Free Trial</Button>} />
              <Link to="/privacy/cookies" className="inline-block">
                <Button variant="ghost">Cookie Notice</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
