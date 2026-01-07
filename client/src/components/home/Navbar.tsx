import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../shared/Button";

interface NavbarProps {
  onGetQuote?: () => void;
}

export function Navbar({ onGetQuote }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-6 z-50  w-full px-4 sm:px-6 lg:px-8 shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 ">
          <div className="flex items-center gap-4">
            <a href="#" className="text-lg font-semibold text-primary">
              Metro Vancouver Junk
            </a>
            <nav className="hidden md:flex gap-6 items-center text-sm text-muted-foreground">
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors"
              >
                How it works
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:236-513-3999"
              className="hidden sm:inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">236-513-3999</span>
            </a>

            <div className="hidden sm:block">
              <Button variant="primary" size="md" onClick={onGetQuote}>
                Get Quote
              </Button>
            </div>

            <button
              aria-label="Open menu"
              className="flex md:hidden items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-primary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="w-5 h-5 block lg:hidden" />
              ) : (
                <Menu className="w-5 h-5 block lg:hidden" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay (simple) */}
        <div
          className={`mt-2 bg-white/95 backdrop-blur-sm rounded-xl p-4 md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-3 text-sm">
            <a
              href="#services"
              className="py-2 px-3 rounded hover:bg-primary/5"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="py-2 px-3 rounded hover:bg-primary/5"
            >
              How it works
            </a>
            <a href="#about" className="py-2 px-3 rounded hover:bg-primary/5">
              About
            </a>
            <a href="#contact" className="py-2 px-3 rounded hover:bg-primary/5">
              Contact
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:236-513-3999"
                className="py-2 px-3 rounded bg-secondary text-secondary-foreground text-center"
              >
                Call Now
              </a>
              <button
                onClick={onGetQuote}
                className="py-2 px-3 rounded bg-primary text-primary-foreground"
              >
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
