import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Laptop, Heart, Building2, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutActive = location.pathname === "/about" || location.pathname.startsWith("/about");
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <Logo size="sm" className="sm:hidden" />
            <Logo size="md" className="hidden sm:block md:hidden" />
            <Logo size="lg" className="hidden md:block" />
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Use Cases
                      </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/use-cases/ecommerce"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <ShoppingCart className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">E-commerce</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Analytics for online stores and retail businesses
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/use-cases/saas"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Laptop className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">SaaS</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Track user engagement and product adoption
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/use-cases/healthcare"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Heart className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">Healthcare</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                HIPAA-compliant analytics for healthcare providers
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/use-cases/enterprise"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Building2 className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">Enterprise</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Enterprise-grade analytics at scale
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Link
                to="/about"
                className={`text-sm font-medium ${isAboutActive ? "text-foreground" : "text-muted-foreground"} hover:text-foreground transition-colors`}
                aria-current={isAboutActive ? "page" : undefined}
              >
                About
              </Link>
            </nav>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Use Cases</h3>
                  <Link
                    to="/use-cases/ecommerce"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <div>
                      <div className="font-medium">E-commerce</div>
                      <p className="text-sm text-muted-foreground">Analytics for online stores</p>
                    </div>
                  </Link>
                  <Link
                    to="/use-cases/saas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <Laptop className="w-4 h-4" />
                    <div>
                      <div className="font-medium">SaaS</div>
                      <p className="text-sm text-muted-foreground">Track user engagement</p>
                    </div>
                  </Link>
                  <Link
                    to="/use-cases/healthcare"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Healthcare</div>
                      <p className="text-sm text-muted-foreground">HIPAA-compliant analytics</p>
                    </div>
                  </Link>
                  <Link
                    to="/use-cases/enterprise"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <Building2 className="w-4 h-4" />
                    <div>
                      <div className="font-medium">Enterprise</div>
                      <p className="text-sm text-muted-foreground">Enterprise-grade analytics</p>
                    </div>
                  </Link>
                </div>
                <a
                  href="/#features"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (location.pathname !== "/") {
                      navigate("/", { state: { scrollTo: "features" } });
                    } else {
                      const el = document.getElementById("features");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-sm font-medium p-3 rounded-md hover:bg-accent transition-colors"
                >
                  Features
                </a>
                <a
                  href="/#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (location.pathname !== "/") {
                      navigate("/", { state: { scrollTo: "pricing" } });
                    } else {
                      const el = document.getElementById("pricing");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-sm font-medium p-3 rounded-md hover:bg-accent transition-colors"
                >
                  Pricing
                </a>
                <Link
                  to="/about#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium p-3 rounded-md ${isAboutActive ? "bg-accent text-foreground" : "hover:bg-accent"} transition-colors`}
                  aria-current={isAboutActive ? "page" : undefined}
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
