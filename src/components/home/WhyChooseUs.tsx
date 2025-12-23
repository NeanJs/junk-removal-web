import { Heart, Users, Leaf, DollarSign, Clock, Award, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Locally Owned",
      description: "Family-run business serving Metro Vancouver for over 10 years"
    },
    {
      icon: Users,
      title: "Friendly Team",
      description: "Professional, courteous staff who treat your property with respect"
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "We donate and recycle up to 80% of items we collect"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "You only pay for the space your junk takes in our truck"
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Same-day and next-day pickups available throughout the region"
    },
    {
      icon: Award,
      title: "Fully Licensed",
      description: "Licensed, bonded, and insured for your complete peace of mind"
    }
  ];

  const serviceAreas = [
    "Vancouver", "Burnaby", "Richmond", "Surrey", "New Westminster", 
    "Coquitlam", "North Vancouver", "West Vancouver", "Delta", "Langley"
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - About content */}
          <div>
            <h2 className="mb-6">Why Choose Metro Vancouver Junk Removal</h2>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                We're your neighbors. Born and raised in Metro Vancouver, we understand the needs of our community. Whether you're a homeowner clearing out your garage or a business needing construction debris removed, we're here to help.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is simple: provide fast, affordable, and eco-friendly junk removal while making the process as stress-free as possible. We're not happy until you're happy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Metro Vancouver Service Area</h4>
                  <p className="text-sm text-muted-foreground">
                    We proudly serve all communities across the Lower Mainland
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Area Visual Section */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="relative h-64 lg:h-full min-h-[300px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664813174433-778f3068fb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjY1MzA3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vancouver skyline - Metro Vancouver junk removal service area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>

            {/* Right - Service Areas */}
            <div className="p-8 lg:p-12">
              <h3 className="mb-6">Serving All of Metro Vancouver</h3>
              <p className="text-muted-foreground mb-6">
                Fast, reliable junk removal across the entire Lower Mainland region
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Don't see your area? <span className="text-primary">Contact us</span> — we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}