import { Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../shared/Button";

interface FinalCTAProps {
  onGetQuote: () => void;
}

export function FinalCTA({ onGetQuote }: FinalCTAProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">
              Limited Time: Same-Day Service Available
            </span>
          </div>

          <h2 className="text-white mb-6">Ready to Reclaim Your Space?</h2>
          <p className="text-white/90 text-xl mb-10">
            Get your free quote in 2 minutes. No obligations, no hidden
            fees—just honest pricing and reliable service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={onGetQuote}
              className="text-lg px-10 py-5 bg-white hover:bg-white/90 shadow-xl group"
            >
              <span className="text-primary font-semibold flex items-center gap-2">
                Get Free Quote Now{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "tel:236-513-3999")}
              className="text-lg px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-sm text-white/70 mb-1">Call or Text</p>
              <a href="tel:236-513-3999" className="text-white hover:underline">
                236-513-3999
              </a>
            </div>

            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-sm text-white/70 mb-1">Email Us</p>
              <a
                href="mailto:info@metrovancouverjunk.ca"
                className="text-white hover:underline"
              >
                info@metrovancouverjunk.ca
              </a>
            </div>

            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-white/70 mb-1">Available</p>
              <p className="text-white">7 Days a Week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
