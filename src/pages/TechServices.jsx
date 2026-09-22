import { Monitor, Network, Cloud, Briefcase, Mail } from "lucide-react";

const TechServices = () => {
  const services = [
    {
      title: "Hardware & Software Sales",
      description:
        "Premium computing equipment, peripherals, and software licensing tailored to your operational requirements.",
      icon: <Monitor size={40} className="text-vibrant" />,
    },
    {
      title: "Networking Solutions",
      description:
        "Secure, scalable, and high-speed network infrastructure design and deployment for seamless connectivity.",
      icon: <Network size={40} className="text-vibrant" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Modern cloud integration, storage, and computing services to keep your data accessible and secure anywhere.",
      icon: <Cloud size={40} className="text-vibrant" />,
    },
    {
      title: "IT Consulting & Installations",
      description:
        "Expert guidance on infrastructure upgrades and professional on-site installation of all tech systems.",
      icon: <Briefcase size={40} className="text-vibrant" />,
    },
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Hero */}
      <div className="bg-corporate text-white rounded-3xl p-10 md:p-16 mb-16 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          AIS Tech Services & Sales
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          Dedicated to providing a wide range of ICT solutions for both
          businesses and individuals. Wherever you are, we have got you covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Conversion Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to upgrade your infrastructure?
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg">
          Contact our technical team today to discuss your hardware, networking,
          or consulting needs.
        </p>
        <a
          href="mailto:info@abizis.com?subject=Inquiry:%20Tech%20Services%20&%20Sales"
          className="inline-flex items-center space-x-2 bg-corporate text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition"
        >
          <Mail size={20} />
          <span>Request a Tech Consultation</span>
        </a>
      </div>
    </div>
  );
};

export default TechServices;
