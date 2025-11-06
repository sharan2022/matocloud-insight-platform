import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import TrialDialog from "@/components/TrialDialog";
import ContactSalesDialog from "@/components/ContactSalesDialog";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small projects and personal sites",
    features: [
      "Up to 50,000 pageviews/month",
      "5 websites",
      "12 months data retention",
      "Email support",
      "Basic reporting",
      "2 months Free Trial",
    ],
  },
  {
    name: "Professional",
    price: "49",
    description: "For growing businesses and agencies",
    features: [
      "Up to 500,000 pageviews/month",
      "25 websites",
      "24 months data retention",
      "Priority support",
      "Advanced reporting",
      "Custom dashboards",
      "API access",
      "2 months Free Trial",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited pageviews",
      "Unlimited websites",
      "Unlimited data retention",
      "Dedicated support",
      "White-label option",
      "On-premise deployment",
      "SLA guarantee",
      "Custom integrations",
      "2 months Free Trial",
    ],
  },
];

const Pricing = () => {
  return (
  <section id="pricing" className="py-6 sm:py-8 md:py-12 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(221,83%,53%)] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-border hover:border-primary/50 transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg' : ''
              }`}
              style={{ 
                boxShadow: plan.popular ? "var(--shadow-glow)" : "var(--shadow-card)",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold">Custom</div>
                  ) : (
                    <>
                      <div className="text-5xl font-bold">
                        ${plan.price}
                        <span className="text-xl text-muted-foreground font-normal">/mo</span>
                      </div>
                    </>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                {plan.price === "Custom" ? (
                  <ContactSalesDialog
                    trigger={
                      <Button variant={plan.popular ? "hero" : "hero-outline"} className="w-full" size="lg">
                        Contact Sales
                      </Button>
                    }
                  />
                ) : (
                  <TrialDialog
                    trigger={
                      <Button
                        variant={plan.popular ? "hero" : "hero-outline"}
                        className="w-full"
                        size="lg"
                      >
                        Start Free Trial
                      </Button>
                    }
                  />
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
