import { Check, Sofa, Laptop, Hammer, Leaf, Home, Package } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface JunkTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const junkTypeOptions: Array<{
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}> = [
  {
    value: "furniture",
    label: "Furniture",
    icon: Sofa,
    color: "from-teal-500 to-teal-600"
  },
  {
    value: "appliances",
    label: "Appliances",
    icon: Package,
    color: "from-blue-500 to-blue-600"
  },
  {
    value: "electronics",
    label: "Electronics",
    icon: Laptop,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    value: "construction",
    label: "Construction Debris",
    icon: Hammer,
    color: "from-orange-500 to-orange-600"
  },
  {
    value: "yard-waste",
    label: "Yard Waste",
    icon: Leaf,
    color: "from-green-500 to-green-600"
  },
  {
    value: "general",
    label: "General Items",
    icon: Home,
    color: "from-purple-500 to-purple-600"
  },
  {
    value: "mixed",
    label: "Mixed Items",
    icon: Package,
    color: "from-gray-600 to-gray-700"
  }
];

export function JunkTypeSelector({ value, onChange, error }: JunkTypeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm text-foreground">
        What type of junk do you have? <span className="text-destructive">*</span>
      </label>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {junkTypeOptions.map((option) => {
          const isSelected = value === option.value;
          const Icon = option.icon;
          
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-center group hover:shadow-lg ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-gray-200 hover:border-primary/50 bg-white"
              }`}
            >
              {/* Icon */}
              <div className="mb-3 flex justify-center">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center transition-transform duration-200 ${
                    isSelected ? "scale-110" : "scale-100 group-hover:scale-105"
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Label */}
              <div className="text-sm">{option.label}</div>

              {/* Check mark */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
