import { useState } from "react";
import { StepIndicator } from "../shared/StepIndicator";
import { QuoteStep, QuoteData } from "./QuoteStep";
import { ScheduleStep, ScheduleData } from "./ScheduleStep";
import { ConfirmationStep } from "./ConfirmationStep";

const STEPS = ["Get Quote", "Schedule", "Confirmation"];

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);

  const handleQuoteNext = (data: QuoteData) => {
    setQuoteData(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleNext = (data: ScheduleData) => {
    setScheduleData(data);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleBack = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setQuoteData(null);
    setScheduleData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8">
      <StepIndicator currentStep={currentStep} steps={STEPS} />

      {currentStep === 1 && (
        <QuoteStep onNext={handleQuoteNext} initialData={quoteData || undefined} />
      )}

      {currentStep === 2 && quoteData && (
        <ScheduleStep
          onNext={handleScheduleNext}
          onBack={handleScheduleBack}
          quoteData={quoteData}
          initialData={scheduleData || undefined}
        />
      )}

      {currentStep === 3 && quoteData && scheduleData && (
        <ConfirmationStep
          quoteData={quoteData}
          scheduleData={scheduleData}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}
