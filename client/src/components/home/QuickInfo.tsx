import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function QuickInfo() {
  const infoItems = [
    {
      icon: MapPin,
      title: "Service Area",
      content: (
        <>
          All of Metro Vancouver
          <br />
          Vancouver, Burnaby, Richmond,
          <br />
          Surrey & more
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a
          href="tel:236-513-3999"
          className="text-sm text-primary hover:underline"
        >
          236-513-3999
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href="mailto:info@metrovancouverjunk.ca"
          className="text-sm text-primary hover:underline break-all"
        >
          info@metrovancouverjunk.ca
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      content: (
        <>
          Mon-Sat: 8 AM - 8 PM
          <br />
          Sunday: 9 AM - 6 PM
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start w-full h-full gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group hover:shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">{item.title}</h4>
                  <div className="text-sm text-muted-foreground">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
