// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-emerald-900/20 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Doc Assist</h2>
            <p className="mt-3 text-sm text-gray-400">
              Simplifying healthcare by connecting patients with trusted doctors.
              Book appointments, manage health records, and consult online with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@docassist.com"
                  className="hover:text-blue-400"
                >
                  support@docassist.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+919876543210" className="hover:text-blue-400">
                  +91 98765 43210
                </a>
              </li>
              <li>Location: New Delhi, India</li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition">
                🌐
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                🐦
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                📘
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                📸
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Doc Assist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
