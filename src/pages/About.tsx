import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Learn about the pinnacleanalytics journey.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">The pinnacleanalytics story so far ...</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              It all started with a movement: to give people the freedom and right to their own privacy and data.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              As businesses increasingly turned to analytics tools to collect data for decision-making, concerns regarding data storage, ownership, and privacy emerged.
            </p>
            <p className="text-lg text-muted-foreground">
              These pressing issues laid the foundation of pinnacleanalytics, a privacy-first analytics platform built for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy-First Analytics */}
      <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Privacy-First Analytics</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              It is of paramount importance to provide a powerful analytics solution that is respectful of user data, ownership, and privacy. pinnacleanalytics was created to be just that - a platform that delivers actionable insights while putting privacy first.
            </p>
            <p className="text-lg text-muted-foreground">
              With these core values, pinnacleanalytics has grown to serve businesses across the globe who demand accurate data without compromising on user privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl italic text-muted-foreground mb-8">
              "To create the leading privacy-first analytics platform that gives every user full control of their data."
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">What do we offer?</h2>
            <p className="text-base sm:text-lg text-center text-muted-foreground mb-8 sm:mb-12">
              pinnacleanalytics today is a complete all-in-one analytics platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">pinnacleanalytics offers:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>100% Data Ownership – keep your data in your own hands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reliability & Security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>An easy to use tool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>User-privacy protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>GDPR & CCPA compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time analytics</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">For our users this means:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Web and mobile analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Conversion optimization features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Visitor profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>No data limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>No data sampling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">pinnacleanalytics's values:</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We do the right thing</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We are open</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We are courageous but not careless</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We play as a team</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We have an impact</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-muted/50">
                <p className="text-base sm:text-lg font-semibold">We value privacy</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground text-center">
              Take these core values and combine them with the most powerful analytics features available. 
              This makes pinnacleanalytics easily accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Analytics */}
      <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Complete Analytics. 100% Yours.</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              With pinnacleanalytics, businesses and individuals can rest assured that data is 100% yours and the privacy of your users is respected. 
              The relationship remains between the website owner (you) and the visitor, with no external sources looking in.
            </p>
            <Button variant="hero" size="lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Vision</h2>
            <blockquote className="text-base sm:text-lg md:text-xl italic text-muted-foreground text-center border-l-4 border-primary pl-4 sm:pl-6">
              "We believe it's important that anyone can freely use an analytics tool knowing their privacy is protected. 
              pinnacleanalytics has been built with this vision in mind, and we are dedicated to being the leading privacy-first analytics platform in the world."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
