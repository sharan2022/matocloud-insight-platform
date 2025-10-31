import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TrialDialog from "@/components/TrialDialog";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, TrendingUp, Users, DollarSign } from "lucide-react";

const Ecommerce = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                E-commerce Analytics That Drive Sales
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Optimize your online store with powerful analytics. Track customer behavior, conversion rates, and revenue in real-time.
              </p>              
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Shopping Cart Analysis</h3>
                <p className="text-muted-foreground">
                  Track cart abandonment rates and optimize checkout flow for maximum conversions.
                </p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Revenue Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor sales performance, average order value, and revenue trends in real-time.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Insights</h3>
                <p className="text-muted-foreground">
                  Understand customer behavior, preferences, and lifetime value to drive retention.
                </p>
              </Card>
              <Card className="p-6">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Product Performance</h3>
                <p className="text-muted-foreground">
                  Identify top-selling products and optimize inventory based on data-driven insights.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why E-commerce Businesses Choose Pinnacle Analytics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
                  <p className="text-muted-foreground">
                    Make instant decisions based on live customer behavior and sales data.
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
                  <h3 className="text-xl font-semibold mb-2">Conversion Optimization</h3>
                  <p className="text-muted-foreground">
                    Identify and fix bottlenecks in your sales funnel to boost conversions.
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
                  <h3 className="text-xl font-semibold mb-2">Privacy-Compliant</h3>
                  <p className="text-muted-foreground">
                    Track customer data while maintaining GDPR and privacy compliance.
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
                  <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                  <p className="text-muted-foreground">
                    Easy integration with Shopify, WooCommerce, Magento, and other platforms.
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
                Ready to Boost Your E-commerce Sales?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your free trial today and see how our analytics can transform your online store.
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

export default Ecommerce;
