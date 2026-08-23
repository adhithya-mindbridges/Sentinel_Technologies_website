import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const solutions = [
    { title: "Video Surveillance (CCTV)", path: "/solutions/cctv" },
    { title: "Access Control Systems", path: "/solutions/access-control" },
    { title: "Fire Alarm Systems", path: "/solutions/fire-alarm" },
    { title: "Public Address Systems", path: "/solutions/public-address" },
    { title: "Building Automation", path: "/solutions/building-automation" },
    { title: "IT Infrastructure", path: "/solutions/it-infrastructure" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-security sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-security-dark">
              Sentinel Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`${navigationMenuTriggerStyle()} ${
                    isActive("/") ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-accent/50">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.path}
                        to={solution.path}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {solution.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link 
                    to="/" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Solutions</h3>
                    <div className="pl-4 space-y-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.path}
                          to={solution.path}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection('about');
                    }}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                  
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection('contact');
                    }}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>

                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection('contact');
                    }}
                    className="mt-4"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;