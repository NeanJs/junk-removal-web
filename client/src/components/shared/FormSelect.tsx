import { SelectHTMLAttributes, forwardRef } from "react";
import { AlertCircle, ChevronDown } from "lucide-react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, helperText, options, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm text-foreground">
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-3 rounded-lg border transition-all appearance-none ${
              error
                ? "border-destructive bg-destructive/5 focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                : "border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20"
            } outline-none ${className}`}
            {...props}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
          {error && (
            <AlertCircle className="absolute right-10 top-3.5 w-5 h-5 text-destructive" />
          )}
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
