import { Calendar, ClipboardCheck, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "1",
      title: "Get Your Free Quote",
      description: "Fill out our quick 2-minute form or call us directly. No commitment required."
    },
    {
      icon: Calendar,
      number: "2",
      title: "Schedule Your Pickup",
      description: "Choose a convenient time. We offer same-day and next-day service across Metro Vancouver."
    },
    {
      icon: Truck,
      number: "3",
      title: "We Handle Everything",
      description: "Sit back and relax. Our team loads, hauls, and cleans up. You do nothing."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">How Junk Removal Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting rid of your junk is simple, fast, and hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 z-0" />
                )}
                
                <div className="relative text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm shadow-md">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}