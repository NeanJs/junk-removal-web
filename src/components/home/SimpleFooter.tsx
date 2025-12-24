export function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-white">Metro Vancouver Junk Removal</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Fast, affordable, and eco-friendly junk removal services across Metro Vancouver. 
              Licensed, insured, and locally owned since 2014.
            </p>
            <div className="flex gap-2">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">How It Works</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Service Areas</a></li>
              <li><a href="#about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:236-513-3999" className="hover:text-white transition-colors">
                  236-513-3999
                </a>
              </li>
              <li>
                <a href="mailto:info@metrovancouverjunk.ca" className="hover:text-white transition-colors">
                  info@metrovancouverjunk.ca
                </a>
              </li>
              <li className="pt-2">Metro Vancouver, BC</li>
              <li>Mon-Sat: 8 AM - 8 PM</li>
              <li>Sunday: 9 AM - 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Metro Vancouver Junk Removal. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}