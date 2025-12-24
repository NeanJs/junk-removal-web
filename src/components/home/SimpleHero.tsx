import { Phone, Star, ShieldCheck, Clock, Truck, CheckCircle } from "lucide-react";
import { Button } from "../shared/Button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface SimpleHeroProps {
  onGetQuote: () => void;
}

export function SimpleHero({ onGetQuote }: SimpleHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left space-y-6 relative z-10">
            {/* SEO-optimized H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Professional Junk Removal Services in Metro Vancouver
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Fast, affordable, and eco-friendly. Get your free quote in 2 minutes. Same-day pickup available across Vancouver, Burnaby, Richmond, and Surrey.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Same-Day Service</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onGetQuote}
                className="text-lg px-10 py-5 group"
              >
                Get Free Quote Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = "tel:236-513-3999"}
                className="text-lg px-10 py-5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm">Fully Licensed</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729628371767-7a833756b8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5rJTIwcmVtb3ZhbCUyMHRydWNrfGVufDF8fHx8MTc2NjQ1NzYyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional junk removal truck serving Metro Vancouver"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Available Now</p>
                      <p className="font-medium">Same-Day Service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-accent">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Serving<br />Metro Vancouver</div>
              </div>
            </div>

            <div className="absolute -right-6 top-1/2 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl mb-1">80%</div>
                <div className="text-sm text-muted-foreground">Items Recycled<br />or Donated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}