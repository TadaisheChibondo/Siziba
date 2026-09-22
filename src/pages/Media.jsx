import { Speaker, MonitorPlay, Video, Camera, Mail, Mic2 } from "lucide-react";

const Media = () => {
  const services = [
    {
      title: "PA Systems & Live Sound",
      description:
        "Don't distort your Front of House sound. We provide proper backline speakers and stage monitors for a great live experience.",
      icon: <Speaker size={40} className="text-white" />,
    },
    {
      title: "LED Screens",
      description:
        "High-definition visual displays to engage your audience and elevate the production value of any venue.",
      icon: <MonitorPlay size={40} className="text-white" />,
    },
    {
      title: "Livestreaming",
      description:
        "Broadcast your event globally with multi-camera setups, crisp audio feeds, and reliable streaming architecture.",
      icon: <Video size={40} className="text-white" />,
    },
    {
      title: "Design & Photography",
      description:
        "Capture the moment and build your brand with professional event photography and bespoke graphic design.",
      icon: <Camera size={40} className="text-white" />,
    },
  ];

  return (
    <div className="w-full pb-16">
      {/* Page Hero */}
      <div className="bg-vibrant text-white rounded-3xl p-10 md:p-16 mb-16 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            AIS Media
          </h1>
          <p className="text-xl text-rose-100 max-w-2xl leading-relaxed">
            Delivering top-notch audio-visual services. From intimate family
            gatherings to large corporate events, we ensure high-quality and
            innovative solutions.
          </p>
        </div>
        {/* Decorative background icon */}
        <Mic2
          size={240}
          className="absolute -bottom-10 -right-10 text-rose-600 opacity-20 transform rotate-12"
        />
      </div>

      {/* Target Audience Banner */}
      <div className="bg-rose-50 border-l-4 border-vibrant p-6 mb-12 rounded-r-xl">
        <p className="text-rose-900 font-medium text-lg">
          Currently catering to:{" "}
          <span className="font-bold">
            Small Corporate Events, Business Cocktails, Church Events, Funerals,
            and Family Gatherings.
          </span>
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="bg-vibrant w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
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
      <div className="bg-gray-900 text-white rounded-3xl p-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">
          Secure your event date today.
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg">
          Reach out to our media production team to check equipment availability
          and get a custom quote for your event.
        </p>
        <a
          href="mailto:info@abizis.com?subject=Inquiry:%20AIS%20Media%20Booking"
          className="inline-flex items-center space-x-2 bg-vibrant text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition"
        >
          <Mail size={20} />
          <span>Book Our Media Team</span>
        </a>
      </div>
    </div>
  );
};

export default Media;
