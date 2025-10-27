import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Security</h1>
              <p className="text-base text-muted-foreground mb-6">
                We take security seriously. Below you'll find an overview of our approach to protecting
                customer data, the technical controls we use, and how to report security issues.
              </p>
              <div className="flex items-center justify-center gap-4">
                <TrialDialog trigger={<Button variant="hero" size="lg">Start Free Trial</Button>} />
                <Link to="/contact" className="inline-block">
                  <Button variant="outline" size="lg">Contact Sales</Button>
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
                  <CardTitle>Encryption</CardTitle>
                  <CardDescription>Encryption in transit and at rest</CardDescription>
                </CardHeader>
                <CardContent>
                  All customer data is encrypted in transit using TLS. Where applicable, data at rest is
                  encrypted using strong algorithms and managed keys. We follow industry best practices
                  for key management and rotate keys regularly.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Access Controls</CardTitle>
                  <CardDescription>Role-based access and least privilege</CardDescription>
                </CardHeader>
                <CardContent>
                  Access to production systems is restricted to authorized personnel only. We enforce
                  role-based permissions, multi-factor authentication for admin access, and regular
                  reviews of access privileges.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Residency & Isolation</CardTitle>
                  <CardDescription>Options for hosting and separation</CardDescription>
                </CardHeader>
                <CardContent>
                  We provide options for regional hosting and isolation where required. Customers retain
                  ownership of their data and can choose retention and export settings to meet their
                  compliance requirements.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secure Development</CardTitle>
                  <CardDescription>Security integrated into engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  Security is part of our development lifecycle. We perform threat modeling, static
                  analysis, and regular code reviews. Dependencies are tracked and updated to address
                  known vulnerabilities.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vulnerability Management</CardTitle>
                  <CardDescription>Patching and incident response</CardDescription>
                </CardHeader>
                <CardContent>
                  We monitor for vulnerabilities, apply patches in a timely manner, and follow defined
                  incident response procedures. For confirmed security incidents we notify affected
                  customers with remediation steps and timelines.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audits & Certifications</CardTitle>
                  <CardDescription>Independent assessments and tests</CardDescription>
                </CardHeader>
                <CardContent>
                  We engage with third-party auditors and conduct regular penetration tests. Relevant
                  audit reports or certification summaries are made available to customers under
                  non-disclosure where appropriate.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Responsible disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We welcome reports from security researchers and customers. If you believe you've
              discovered a security issue, please contact us so we can investigate and remediate it.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-medium">How to report</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Submit a report via our <Link to="/contact" className="underline">contact page</Link>
                    , or email our security team. Include steps to reproduce, affected systems, and any
                    supporting evidence. We will acknowledge receipt and keep you updated on progress.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h3 className="text-lg font-medium">Disclosure policy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    We aim to work with reporters to resolve issues responsibly and do not pursue legal
                    action against good-faith security research. For severe issues we may coordinate a
                    public disclosure once mitigations are in place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Want to learn more or get certified details?</h2>
            <p className="text-muted-foreground mb-6">
              If you need audit statements, detailed security controls, or have compliance questions,
              reach out to our team and we'll provide the information necessary for your security and
              compliance reviews.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/contact" className="inline-block">
                <Button>Contact us</Button>
              </Link>
              <TrialDialog trigger={<Button variant="ghost">Start Free Trial</Button>} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
