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
import { ShoppingCart, Laptop, Heart, Building2 } from "lucide-react";

const Header = () => {
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
                    <NavigationMenuTrigger className="text-sm font-medium">
                      Use Cases
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/use-cases/ecommerce"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <ShoppingCart className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">E-commerce</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Analytics for online stores and retail businesses
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/use-cases/saas"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Laptop className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">SaaS</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Track user engagement and product adoption
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/use-cases/healthcare"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Heart className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">Healthcare</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                HIPAA-compliant analytics for healthcare providers
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/use-cases/enterprise"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Building2 className="w-4 h-4" />
                                <div className="text-sm font-medium leading-none">Enterprise</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Enterprise-grade analytics at scale
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
