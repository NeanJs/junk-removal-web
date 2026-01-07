import { CheckCircle, Calendar, MapPin, Phone, Mail, Package, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../shared/Button";
import { QuoteData } from "./QuoteStep";
import { ScheduleData } from "./ScheduleStep";

interface ConfirmationStepProps {
  quoteData: QuoteData;
  scheduleData: ScheduleData;
  onStartOver: () => void;
}

export function ConfirmationStep({ quoteData, scheduleData, onStartOver }: ConfirmationStepProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  const getEstimatedPrice = () => {
    const volumePrices: Record<string, { min: number; max: number }> = {
      small: { min: 150, max: 250 },
      medium: { min: 250, max: 400 },
      large: { min: 400, max: 550 },
      full: { min: 550, max: 700 },
      multiple: { min: 700, max: 1000 }
    };
    const range = volumePrices[quoteData.volume] || { min: 250, max: 400 };
    return { min: range.min, max: range.max };
  };

  const priceRange = getEstimatedPrice();
  const bookingId = `JR${Math.floor(Math.random() * 100000)}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
        {/* Success Icon with Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-4 relative animate-pulse">
            <CheckCircle className="w-16 h-16 text-accent" />
            <Sparkles className="w-6 h-6 text-accent absolute -top-1 -right-1 animate-pulse" />
          </div>
          <h2 className="mb-3">Booking Confirmed!</h2>
          <p className="text-muted-foreground">
            Check your email at <strong className="text-primary">{scheduleData.email}</strong> for confirmation details
          </p>
        </div>

        {/* Booking Details Card - Enhanced */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 rounded-2xl p-6 mb-8 border border-primary/20 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-6 border-b border-border gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Estimated Price Range</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-primary">${priceRange.min}</span>
                <span className="text-muted-foreground">-</span>
                <span className="text-3xl text-primary">${priceRange.max}</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-muted-foreground mb-2">Booking ID</p>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xl">#{bookingId}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pickup Date & Time</p>
                <p className="text-sm">{formatDate(scheduleData.date)}</p>
                <p className="text-sm text-primary">{scheduleData.timeWindow}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pickup Address</p>
                <p className="text-sm">{quoteData.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Items</p>
                <p className="text-sm capitalize">{quoteData.junkType.replace("-", " ")}</p>
                <p className="text-sm text-primary capitalize">{quoteData.volume} load</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white">{scheduleData.name.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Contact</p>
                <p className="text-sm">{scheduleData.name}</p>
                <p className="text-sm text-primary">{scheduleData.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next - Enhanced */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h3 className="mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            What Happens Next?
          </h3>
          <div className="space-y-3">
            {[
              { step: 1, text: "You'll receive a confirmation email with all the details" },
              { step: 2, text: "We'll call you 30 minutes before arrival" },
              { step: 3, text: "Our team will provide final pricing on-site" },
              { step: 4, text: "We'll haul away your junk and clean up the area" }
            ].map((item) => (
              <div key={item.step} className="flex gap-3 items-start bg-white rounded-lg p-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                  {item.step}
                </div>
                <span className="text-sm pt-0.5">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            variant="outline"
            size="lg"
            onClick={onStartOver}
            className="flex-1"
          >
            Book Another Pickup
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.print()}
            className="flex-1"
          >
            Print Confirmation
          </Button>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            Questions? Call us at <a href="tel:236-513-3999" className="text-primary hover:underline">236-513-3999</a>
          </p>
          <p>
            or email <a href="mailto:info@metrovancouverjunk.ca" className="text-primary hover:underline">info@metrovancouverjunk.ca</a>
          </p>
        </div>
      </div>
    </div>
  );
}