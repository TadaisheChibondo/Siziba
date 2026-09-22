import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Abizis
            </span>
            <p className="mt-4 text-slate-400 max-w-sm leading-relaxed">
              Technology that works. Experiences people remember. Delivering
              professional ICT solutions and top-notch audio-visual production
              under one roof.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Divisions
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#tech"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Tech Services & Sales
                </a>
              </li>
              <li>
                <a
                  href="#media"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Media Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+263700000000"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/263700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abizis.co.zw"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Abizis Innovative Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
