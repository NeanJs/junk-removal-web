import { Check } from "lucide-react";

interface VolumeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const volumeOptions = [
  {
    value: "small",
    label: "Small Load",
    subtitle: "1/4 truck",
    visual: "25%",
    description: "A few items",
    price: "$150-250"
  },
  {
    value: "medium",
    label: "Medium Load",
    subtitle: "1/2 truck",
    visual: "50%",
    description: "Several items",
    price: "$250-400"
  },
  {
    value: "large",
    label: "Large Load",
    subtitle: "3/4 truck",
    visual: "75%",
    description: "Room full",
    price: "$400-550"
  },
  {
    value: "full",
    label: "Full Truck",
    subtitle: "Full load",
    visual: "100%",
    description: "Multiple rooms",
    price: "$550-700"
  },
  {
    value: "multiple",
    label: "Multiple Trucks",
    subtitle: "2+ loads",
    visual: "100%+",
    description: "Whole property",
    price: "$700+"
  }
];

export function VolumeSelector({ value, onChange, error }: VolumeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm text-foreground">
        How much junk do you have? <span className="text-destructive">*</span>
      </label>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {volumeOptions.map((option) => {
          const isSelected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left group hover:shadow-lg ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-gray-200 hover:border-primary/50 bg-white"
              }`}
            >
              {/* Truck visualization */}
              <div className="mb-3 bg-gray-100 rounded-lg h-16 relative overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isSelected ? "opacity-100" : "opacity-50 group-hover:opacity-70"
                  }`}
                  style={{ width: option.visual }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-sm ${isSelected ? "text-white" : "text-gray-600"}`}>
                    {option.visual}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground">{option.subtitle}</div>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{option.description}</p>
                <p className="text-sm text-primary">{option.price}</p>
              </div>
            </button>
          );
        })}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
      <p className="text-sm text-muted-foreground">
        Not sure? We'll confirm when we arrive. Prices are estimates.
      </p>
    </div>
  );
}
