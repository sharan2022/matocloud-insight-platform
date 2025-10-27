import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSalesDialog from "@/components/ContactSalesDialog";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Sales</h1>
              <p className="text-base text-muted-foreground mb-6">
                Reach out to our team for custom plans and enterprise inquiries.
              </p>
              <ContactSalesDialog trigger={<button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3">Contact Sales</button>} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
