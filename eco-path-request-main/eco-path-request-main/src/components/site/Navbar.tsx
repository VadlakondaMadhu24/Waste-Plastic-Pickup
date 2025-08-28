import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pickup", label: "Pickup" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-extrabold text-lg tracking-tight">
          <span className="text-primary">Green</span>Cycle
        </Link>
        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 sm:w-80">
                <nav className="mt-6 grid gap-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `text-base font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-foreground"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <Button asChild variant="hero" size="lg" className="mt-4">
                    <Link to="/pickup">Request Pickup</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop CTA */}
          <Button asChild variant="hero" size="lg">
            <Link to="/pickup" aria-label="Request a pickup">
              Request Pickup
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
