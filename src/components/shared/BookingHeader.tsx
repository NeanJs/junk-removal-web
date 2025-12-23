import { ArrowLeft, Phone } from "lucide-react";

interface BookingHeaderProps {
  onBack?: () => void;
}

export function BookingHeader({ onBack }: BookingHeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>

          <div className="text-center">
            <h3 className="text-primary">Metro Vancouver Junk Removal</h3>
          </div>

          <a
            href="tel:604-555-5865"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">604-555-JUNK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
