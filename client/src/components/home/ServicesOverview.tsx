import { Home, Building2, Sofa, Leaf, Trash2, Hammer } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential Junk Removal",
      description: "Furniture, appliances, garage cleanouts, estate sales",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description: "Office furniture, equipment, construction debris",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sofa,
      title: "Furniture Removal",
      description: "Couches, mattresses, tables, chairs, cabinets",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Hammer,
      title: "Renovation Debris",
      description: "Drywall, flooring, fixtures, construction waste",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Leaf,
      title: "Yard Waste Removal",
      description: "Branches, leaves, soil, landscaping materials",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trash2,
      title: "General Junk",
      description: "Anything that needs to go—just point and it's gone",
      color: "from-teal-600 to-blue-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Junk Removal Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a single item to a full house cleanout, we handle it all
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-6 shadow-md border border-primary/10">
          <p className="text-muted-foreground">
            Not sure if we take it? <span className="text-primary">Give us a call—we probably do!</span> Most items can be removed same-day.
          </p>
        </div>
      </div>
    </section>
  );
}