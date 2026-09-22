import { Phone, Mail, MessageCircle, Calendar, Info } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full pb-16">
      {/* About Section (The Story) */}
      <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-16 mb-16 shadow-sm">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 mb-6">
            <Info size={32} className="text-corporate" />
            <h1 className="text-4xl font-extrabold text-gray-900">Our Story</h1>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Founded on the 2nd of June 2023, Abizis Innovative Solutions is a
            young, vibrant tech and media company committed to excellence and
            innovation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Operating through our two distinct divisions—AIS Tech Services &
            Sales and AIS Media—we aim to make a significant impact in the
            industry by offering cutting-edge services tailored to meet the
            evolving needs of all our customers. We cannot wait to walk this
            journey with you.
          </p>

          <div className="inline-flex items-center space-x-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-200">
            <Calendar size={18} />
            <span>Established June 2023</span>
          </div>
        </div>
      </div>

      {/* Contact Channels Grid */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 px-2">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <a
          href="tel:+263776414650" // Replace with actual number
          className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
        >
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-corporate group-hover:text-white transition-colors text-corporate">
            <Phone size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-500">Mon-Fri from 8am to 5pm.</p>
        </a>

        {/* Email Card */}
        <a
          href="mailto:info@abizis.com" // Replace with actual email
          className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
        >
          <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-vibrant group-hover:text-white transition-colors text-vibrant">
            <Mail size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-500">Drop us a line anytime.</p>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/263776414650" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
        >
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500">
            <MessageCircle size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
          <p className="text-gray-500">Message us for quick replies.</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
