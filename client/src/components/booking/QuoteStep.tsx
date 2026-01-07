import { useState } from "react";
import { FormInput } from "../shared/FormInput";
import { Button } from "../shared/Button";
import { JunkTypeSelector } from "./JunkTypeSelector";
import { VolumeSelector } from "./VolumeSelector";
import { Package, Info, Sparkles } from "lucide-react";

interface QuoteStepProps {
  onNext: (data: QuoteData) => void;
  initialData?: QuoteData;
}

export interface QuoteData {
  junkType: string;
  volume: string;
  address: string;
}

export function QuoteStep({ onNext, initialData }: QuoteStepProps) {
  const [formData, setFormData] = useState<QuoteData>(
    initialData || { junkType: "", volume: "", address: "" }
  );
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof QuoteData, string>> = {};

    if (!formData.junkType) newErrors.junkType = "Please select a junk type";
    if (!formData.volume) newErrors.volume = "Please select an approximate volume";
    if (!formData.address) newErrors.address = "Please enter your pickup address";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext(formData);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4 relative">
            <Package className="w-8 h-8 text-white" />
            <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1" />
          </div>
          <h2 className="mb-2">Get Your Free Quote</h2>
          <p className="text-muted-foreground">
            Tell us about your junk and we'll provide an instant estimate
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <JunkTypeSelector
            value={formData.junkType}
            onChange={(value) => {
              setFormData({ ...formData, junkType: value });
              setErrors({ ...errors, junkType: undefined });
            }}
            error={errors.junkType}
          />

          <VolumeSelector
            value={formData.volume}
            onChange={(value) => {
              setFormData({ ...formData, volume: value });
              setErrors({ ...errors, volume: undefined });
            }}
            error={errors.volume}
          />

          <FormInput
            label="Pickup Address"
            type="text"
            placeholder="123 Main St, Vancouver, BC"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
              setErrors({ ...errors, address: undefined });
            }}
            error={errors.address}
            helperText="We serve all of Metro Vancouver"
            required
          />

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5 flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <strong>Note:</strong> This is an estimated price range. Final pricing will be confirmed 
              on-site based on the actual volume and type of items.
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full group">
            Continue to Booking
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}