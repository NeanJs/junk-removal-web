import { useState } from "react";
import { FormInput } from "../shared/FormInput";
import { FormSelect } from "../shared/FormSelect";
import { Button } from "../shared/Button";
import { Calendar, ChevronLeft, Clock, DollarSign } from "lucide-react";
import { QuoteData } from "./QuoteStep";

interface ScheduleStepProps {
  onNext: (data: ScheduleData) => void;
  onBack: () => void;
  quoteData: QuoteData;
  initialData?: ScheduleData;
}

export interface ScheduleData {
  date: string;
  timeWindow: string;
  name: string;
  phone: string;
  email: string;
}

const timeWindowOptions = [
  { value: "8am-12pm", label: "Morning (8 AM - 12 PM)" },
  { value: "12pm-4pm", label: "Afternoon (12 PM - 4 PM)" },
  { value: "4pm-8pm", label: "Evening (4 PM - 8 PM)" },
  { value: "flexible", label: "Flexible - Any time" }
];

export function ScheduleStep({ onNext, onBack, quoteData, initialData }: ScheduleStepProps) {
  const [formData, setFormData] = useState<ScheduleData>(
    initialData || { date: "", timeWindow: "", name: "", phone: "", email: "" }
  );
  const [errors, setErrors] = useState<Partial<Record<keyof ScheduleData, string>>>({});

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof ScheduleData, string>> = {};

    if (!formData.date) newErrors.date = "Please select a pickup date";
    if (!formData.timeWindow) newErrors.timeWindow = "Please select a time window";
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.phone) newErrors.phone = "Please enter your phone number";
    if (!formData.email) newErrors.email = "Please enter your email";

    // Basic email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Basic phone validation
    if (formData.phone && !/^\d{10}$|^\d{3}-\d{3}-\d{4}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext(formData);
  };

  const getEstimatedPrice = () => {
    const volumePrices: Record<string, { min: number; max: number }> = {
      small: { min: 150, max: 250 },
      medium: { min: 250, max: 400 },
      large: { min: 400, max: 550 },
      full: { min: 550, max: 700 },
      multiple: { min: 700, max: 1000 }
    };
    return volumePrices[quoteData.volume] || { min: 250, max: 400 };
  };

  const priceRange = getEstimatedPrice();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-2">Schedule Your Pickup</h2>
          <p className="text-muted-foreground">
            Choose your preferred date and time
          </p>
        </div>

        {/* Estimated Price Card - Enhanced */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/20 shadow-md">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Estimated Price Range
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-primary">${priceRange.min}</span>
                <span className="text-muted-foreground">-</span>
                <span className="text-3xl text-primary">${priceRange.max}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                <p className="text-sm capitalize">{quoteData.junkType.replace("-", " ")}</p>
                <p className="text-sm text-muted-foreground capitalize">{quoteData.volume} load</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/50 rounded-lg px-3 py-2">
            <Clock className="w-4 h-4" />
            <span>Final price confirmed on-site • No hidden fees • Same-day service available</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput
              label="Preferred Date"
              type="date"
              min={minDate}
              value={formData.date}
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
                setErrors({ ...errors, date: undefined });
              }}
              error={errors.date}
              required
            />

            <FormSelect
              label="Time Window"
              options={timeWindowOptions}
              value={formData.timeWindow}
              onChange={(e) => {
                setFormData({ ...formData, timeWindow: e.target.value });
                setErrors({ ...errors, timeWindow: undefined });
              }}
              error={errors.timeWindow}
              required
            />
          </div>

          <FormInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors({ ...errors, name: undefined });
            }}
            error={errors.name}
            required
          />

          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="604-123-4567"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              setErrors({ ...errors, phone: undefined });
            }}
            error={errors.phone}
            helperText="We'll call 30 minutes before arrival"
            required
          />

          <FormInput
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors({ ...errors, email: undefined });
            }}
            error={errors.email}
            helperText="We'll send your booking confirmation here"
            required
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onBack}
              className="flex-1"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </Button>
            <Button type="submit" variant="primary" size="lg" className="flex-1 group">
              Confirm Booking
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}