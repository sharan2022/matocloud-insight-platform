import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-base text-muted-foreground mb-6">
                These terms govern your use of Pinnacle Analytics services. Please read them
                carefully. By using our services you agree to these terms.
              </p>

              <div className="flex items-center justify-center gap-4">
                <TrialDialog trigger={<Button variant="hero" size="lg">Start Free Trial</Button>} />
                <Link to="/contact" className="inline-block">
                  <Button variant="outline" size="lg">Contact</Button>
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
                  <CardTitle>Acceptance</CardTitle>
                  <CardDescription>Agreement to terms</CardDescription>
                </CardHeader>
                <CardContent>
                  By accessing or using our services, you agree to these terms. If you do not
                  agree, do not use the services. We may modify the terms from time to time;
                  continued use after changes constitutes acceptance of the updated terms.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service provision</CardTitle>
                  <CardDescription>What we provide</CardDescription>
                </CardHeader>
                <CardContent>
                  We provide analytics and related services as described on our site. We strive
                  to maintain availability but do not guarantee uninterrupted access. Specific
                  service levels may be provided in separate agreements.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accounts & access</CardTitle>
                  <CardDescription>User responsibilities</CardDescription>
                </CardHeader>
                <CardContent>
                  You are responsible for maintaining the confidentiality of your account
                  credentials and for any activity under your account. Notify us immediately if
                  you suspect unauthorized use.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions & billing</CardTitle>
                  <CardDescription>Payments and renewals</CardDescription>
                </CardHeader>
                <CardContent>
                  Paid plans are billed according to the plan terms. Fees are non-refundable
                  except where required by law or stated otherwise. We may change pricing with
                  notice; renewals may be charged automatically unless canceled before renewal.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation & refunds</CardTitle>
                  <CardDescription>How to cancel</CardDescription>
                </CardHeader>
                <CardContent>
                  You may cancel subscriptions from your account settings or by contacting us.
                  Cancellation takes effect at the end of the current billing period. Refunds are
                  handled per the plan terms or applicable law.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intellectual property</CardTitle>
                  <CardDescription>Ownership and license</CardDescription>
                </CardHeader>
                <CardContent>
                  We retain ownership of the services and all related intellectual property. You
                  retain rights to data you submit. We grant you a limited license to use the
                  services as described in these terms.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Warranties and disclaimers</h2>
            <p className="text-muted-foreground mb-4">
              The services are provided "as is" and "as available" without warranties of any
              kind, except where expressly provided. We disclaim implied warranties to the
              fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of liability</h2>
            <p className="text-muted-foreground mb-4">
              To the extent permitted by law, our liability for damages arising out of or in
              connection with these terms is limited to direct damages up to the amount paid by
              you in the prior 12 months. We are not liable for indirect or consequential
              damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold us harmless from claims arising from your use of
              the services or your violation of these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to services and terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update or discontinue services and update these terms. We will provide
              notice where required and post updated terms on our site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing law</h2>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws applicable to our primary place of business,
              unless otherwise required by local mandatory law. Disputes will be resolved in the
              competent courts for that jurisdiction, except where arbitration is required by an
              agreement between the parties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these terms, billing, or legal requests, please <Link to="/contact" className="underline">contact us</Link>.
            </p>

            <div className="flex items-center justify-center gap-4">
              <TrialDialog trigger={<Button variant="outline">Start Free Trial</Button>} />
              <Link to="/privacy" className="inline-block">
                <Button variant="ghost">Privacy Policy</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
