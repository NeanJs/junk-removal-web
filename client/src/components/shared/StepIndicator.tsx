import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="w-full py-8 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Progress line background */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-700 ease-out rounded-full"
              style={{ 
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div key={stepNumber} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg scale-100"
                      : isCurrent
                      ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground ring-4 ring-primary/20 shadow-xl scale-110 animate-pulse"
                      : "bg-muted text-muted-foreground shadow-sm"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 animate-in zoom-in duration-300" />
                  ) : (
                    <span className="transition-transform">{stepNumber}</span>
                  )}
                </div>
                <span
                  className={`mt-3 text-sm hidden sm:block transition-all duration-200 ${
                    isCurrent ? "text-foreground scale-105" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}