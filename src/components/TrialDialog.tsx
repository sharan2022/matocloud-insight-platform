import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

interface TrialDialogProps {
  trigger?: React.ReactNode;
}

const TrialDialog = ({ trigger }: TrialDialogProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !website) {
      toast({
        title: "Missing information",
        description: "Please provide both email and website URL",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TRIAL as string | undefined;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    const templateParams = {
      email,
      website,
    };

    // If EmailJS is configured, try sending via EmailJS client
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        // EmailJS returns a status, treat success when no exception thrown
        toast({
          title: "Trial request received!",
          description: "We'll send you an email shortly with your free trial access.",
        });
      } catch (err) {
        // On failure, fall back to mailto
        const mailto = `mailto:sales@pinnacleanalytics.com?subject=${encodeURIComponent(
          "Trial request"
        )}&body=${encodeURIComponent(`Email: ${email}\nWebsite: ${website}`)}`;
        window.location.href = mailto;
        toast({
          title: "Trial request prepared",
          description: "We opened your email client as a fallback. Please send the message to complete the request.",
        });
      }
    } else {
      // No EmailJS config — fallback to mailto link
      const mailto = `mailto:sales@pinnacleanalytics.com?subject=${encodeURIComponent(
        "Trial request"
      )}&body=${encodeURIComponent(`Email: ${email}\nWebsite: ${website}`)}`;
      window.location.href = mailto;
      toast({
        title: "Trial request prepared",
        description: "We opened your email client as a fallback. Please send the message to complete the request.",
      });
    }

    setOpen(false);
    setEmail("");
    setWebsite("");
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="lg" className="group w-full sm:w-auto">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start Your Free Trial</DialogTitle>
          <DialogDescription>
            Enter your details to begin your 30-day free trial with pinnacleanalytics.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yourwebsite.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Start Free Trial"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialDialog;
