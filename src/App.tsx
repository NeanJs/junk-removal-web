import { useState } from "react";
import { SimpleHero } from "./components/home/SimpleHero";
import { QuickInfo } from "./components/home/QuickInfo";
import { HowItWorks } from "./components/home/HowItWorks";
import { ServicesOverview } from "./components/home/ServicesOverview";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { FinalCTA } from "./components/home/FinalCTA";
import { SimpleFooter } from "./components/home/SimpleFooter";
import { BookingFlow } from "./components/booking/BookingFlow";
import { BookingHeader } from "./components/shared/BookingHeader";

export default function App() {
  const [showBookingFlow, setShowBookingFlow] = useState(false);

  if (showBookingFlow) {
    return (
      <div className="min-h-screen flex flex-col">
        <BookingHeader onBack={() => setShowBookingFlow(false)} />
        <BookingFlow />
        <div className="mt-auto">
          <SimpleFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHero onGetQuote={() => setShowBookingFlow(true)} />
      <QuickInfo />
      <HowItWorks />
      <ServicesOverview />
      <WhyChooseUs />
      <FinalCTA onGetQuote={() => setShowBookingFlow(true)} />
      <div className="mt-auto">
        <SimpleFooter />
      </div>
    </div>
  );
}