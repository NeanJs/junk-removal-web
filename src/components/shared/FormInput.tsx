import { InputHTMLAttributes, forwardRef } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, success, helperText, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm text-foreground">
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            ref={ref}
            className={`w-full px-4 py-3 rounded-lg border transition-all ${
              error
                ? "border-destructive bg-destructive/5 focus:border-destructive focus:ring-2 focus:ring-destructive/20"
                : success
                ? "border-accent bg-accent/5 focus:border-accent focus:ring-2 focus:ring-accent/20"
                : "border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/20"
            } outline-none ${className}`}
            {...props}
          />
          {error && (
            <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-destructive" />
          )}
          {success && !error && (
            <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-accent" />
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

FormInput.displayName = "FormInput";
