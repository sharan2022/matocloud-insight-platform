import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Cookie Notice</h1>
              <p className="text-base text-muted-foreground mb-6">
                This notice explains the types of cookies and similar technologies we use on our
                website, why we use them, and how you can control them.
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

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files placed on your device when you visit websites. They can
              store information such as preferences, login status, and tracking identifiers.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Why we use cookies</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>Essential cookies to make the site work and remember your choices.</li>
              <li>Performance cookies to understand how people use our site and improve it.</li>
              <li>Functional cookies to remember preferences and provide a better experience.</li>
              <li>Third-party cookies for embedded content and analytics integrations.</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">Managing cookies</h3>
            <p className="text-muted-foreground mb-4">
              Most browsers let you block or delete cookies via settings. You can use your browser's
              privacy controls to manage cookies and opt out of tracking. Disabling certain cookies
              may affect the functionality of the site.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Third-party cookies</h3>
            <p className="text-muted-foreground mb-4">
              Our site may include services from third parties (for example analytics or embeds)
              that set cookies. These cookies are governed by the third parties' own policies. We
              only integrate partners that meet our privacy and security expectations.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Your choices</h3>
            <p className="text-muted-foreground mb-4">
              Where required by law, we ask for consent before setting non-essential cookies. You
              can change your preferences in your browser or by contacting us. For site-specific
              cookie controls we will provide clear options when consent is required.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">Contact</h3>
            <p className="text-muted-foreground mb-6">
              If you have questions about this Cookie Notice or wish to exercise your privacy rights,
              please <Link to="/contact" className="underline">contact our team</Link>.
            </p>

            <div className="border-t border-border pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">Want to reduce tracking on your site?</p>
              <div className="flex items-center justify-center gap-4">
                <TrialDialog trigger={<Button variant="outline">Start Free Trial</Button>} />
                <Link to="/privacy" className="inline-block">
                  <Button variant="ghost">Privacy Policy</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
