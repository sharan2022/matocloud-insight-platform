import Logo from "@/components/Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Use scrollIntoView so elements with Tailwind's scroll-mt-* (scroll-margin-top)
    // are respected and land at the visible top of the viewport under a fixed header.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAnchor = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // navigate to home and include the target id in location state so the home page
      // can perform the scroll after it renders
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToId(id);
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground">
              Privacy-first analytics platform that puts you in control of your data.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#features" onClick={(e) => handleAnchor(e, "features")} className="hover:text-foreground transition-colors">Features</a>
              </li>
              <li>
                <a href="/#pricing" onClick={(e) => handleAnchor(e, "pricing")} className="hover:text-foreground transition-colors">Pricing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" onClick={(e) => handleAnchor(e, "about")} className="hover:text-foreground transition-colors">About</a>
              </li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/privacy/cookies" className="hover:text-foreground transition-colors">Cookie Notice</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/security" className="hover:text-foreground transition-colors">Security</Link></li>
              <li><Link to="/gdpr" className="hover:text-foreground transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Pinnacle Analytics. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://twitter.com/pinnacleanalytics" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/company/pinnacleanalytics" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/pinnacleanalytics" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
