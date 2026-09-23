import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Mic,
  Monitor,
  Network,
  Cloud,
  Briefcase,
  Speaker,
  MonitorPlay,
  Video,
  Camera,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";
import WhatsAppForm from "./WhatsAppForm";

// Existing features and services arrays remain unchanged
const techFeatures = [
  "Consulting & installations",
  "Networking solutions",
  "Software & hardware sales",
  "Cloud services",
];
const mediaFeatures = [
  "PA systems & live sound",
  "LED screens",
  "Livestreaming events",
  "Photography & design",
];

const techServices = [
  {
    title: "Hardware & Software Sales",
    description:
      "Premium computing equipment, peripherals, and software licensing tailored to your operational requirements.",
    icon: Monitor,
  },
  {
    title: "Networking Solutions",
    description:
      "Secure, scalable, high-speed network infrastructure design and deployment for seamless connectivity.",
    icon: Network,
  },
  {
    title: "Cloud Solutions",
    description:
      "Modern cloud integration, storage, and computing services to keep your data accessible and secure anywhere.",
    icon: Cloud,
  },
  {
    title: "IT Consulting & Installations",
    description:
      "Expert guidance on infrastructure upgrades and professional on-site installation of all tech systems.",
    icon: Briefcase,
  },
];

const mediaServices = [
  {
    title: "PA Systems & Live Sound",
    description:
      "Proper backline speakers and stage monitors, so your Front of House sound never distorts.",
    icon: Speaker,
  },
  {
    title: "LED Screens",
    description:
      "High-definition visual displays to engage your audience and lift the production value of any venue.",
    icon: MonitorPlay,
  },
  {
    title: "Livestreaming",
    description:
      "Multi-camera setups, crisp audio feeds, and reliable streaming architecture to broadcast your event globally.",
    icon: Video,
  },
  {
    title: "Design & Photography",
    description:
      "Professional event photography and bespoke graphic design to capture the moment and build your brand.",
    icon: Camera,
  },
];

// Placeholder images for the Hero slideshow (Tech and Media themes)
const slideImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop", // Sound/Media
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Tech/Hardware
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop", // Event/Camera
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Network/Cloud
];

// Refined animation variants for smoother scrolling
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <Hero />
      <DivisionSplit />
      <TechSection />
      <MediaSection />
      <ContactSection />
    </div>
  );
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slideImages.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={slideImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="Abizis Services"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
      </div>

      {/* Hero Content - Adjusted mobile padding */}
      <div className="relative z-10 text-center px-4 sm:px-6 pt-16 pb-24 lg:pt-32 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm text-vibrant font-bold tracking-widest uppercase mb-6 drop-shadow-md">
            Abizis Innovative Solutions
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg mb-8">
            Technology that works.
            <br className="hidden md:block" /> Experiences people remember.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            AIS brings together professional ICT solutions and audio-visual
            production under one roof — from business infrastructure and cloud
            solutions to live events and media production.
          </p>

          {/* Dual Action Funnel - Adjusted for mobile stacking */}
          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <a
              href="#tech"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-white text-corporate font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg"
            >
              Explore Tech
            </a>
            <a
              href="#media"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-vibrant text-white font-bold text-lg hover:bg-rose-700 transition-all duration-300 shadow-lg shadow-vibrant/25"
            >
              Explore Media
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DivisionSplit() {
  return (
    // Scaled negative margin across breakpoints to prevent cards from covering hero text on mobile
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-24 lg:-mt-32 mb-16 lg:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <TechPortal />
        <MediaPortal />
      </div>
    </div>
  );
}

function TechPortal() {
  return (
    <motion.a
      href="#tech"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between bg-corporate p-10 sm:p-12 rounded-3xl shadow-2xl overflow-hidden border border-white/10"
    >
      <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-white/10 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
        <Zap size={240} strokeWidth={1} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-2xl mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300">
          <Zap className="text-vibrant" size={28} strokeWidth={2.25} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          AIS Tech Services
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
          Robust ICT solutions, cloud infrastructure, and hardware sales
          engineered for your business.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex items-center text-vibrant font-bold text-lg group-hover:text-white transition-colors duration-300">
        Explore division
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </motion.a>
  );
}

function MediaPortal() {
  return (
    <motion.a
      href="#media"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between bg-rose-50 p-10 sm:p-12 rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
    >
      <div className="absolute -top-12 -right-12 text-slate-50 group-hover:text-slate-100 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
        <Mic size={240} strokeWidth={1} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-vibrant/10 flex items-center justify-center rounded-2xl mb-8 border border-vibrant/20 group-hover:scale-110 transition-transform duration-300">
          <Mic className="text-vibrant" size={28} strokeWidth={2.25} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 mb-4 leading-tight">
          AIS Media
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
          High-definition audio, visual displays, and livestreaming for the
          moment that doesn't get a retake.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex items-center text-corporate font-bold text-lg group-hover:text-vibrant transition-colors duration-300">
        Explore division
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </motion.a>
  );
}

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={fadeUp}
      className="max-w-2xl mb-12"
    >
      <p
        className={`text-sm font-bold uppercase tracking-wider mb-3 ${dark ? "text-vibrant" : "text-vibrant"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function TechSection() {
  return (
    // Adjusted padding for mobile (pt-16 pb-24) while preserving desktop sizing
    <section
      id="tech"
      className="relative scroll-mt-20 bg-corporate text-white px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-40"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          dark
          eyebrow="AIS Tech Services & Sales"
          title="ICT solutions for businesses and individuals"
          description="Wherever you are, we have got you covered — sales, consulting, and installation across hardware, networking, and cloud."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16 rounded-xl overflow-hidden"
        >
          {techServices.map(({ title, description, icon: Icon }) => (
            <motion.div
              variants={fadeUp}
              key={title}
              className="bg-corporate p-8 hover:bg-corporate/90 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/25 rounded-lg mb-6 bg-white/5">
                <Icon size={22} className="text-vibrant" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 translate-y-[1px]">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120H0V0l1200 120z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section
      id="media"
      className="scroll-mt-20 bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="AIS Media"
          title="Audio-visual production for the moment that doesn't get a retake"
          description="Top-notch media services, from intimate family gatherings to large corporate events."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 mb-16 rounded-xl overflow-hidden"
        >
          {mediaServices.map(({ title, description, icon: Icon }) => (
            <motion.div
              variants={fadeUp}
              key={title}
              className="bg-white p-8 hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-vibrant/30 rounded-lg mb-6 bg-vibrant/5">
                <Icon size={22} className="text-vibrant" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    // Adjusted padding for mobile (py-16)
    <section
      id="contact"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-bold uppercase tracking-wider mb-3 text-vibrant">
                Our story
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                A young, vibrant tech and media company
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Founded on the 2nd of June 2023, Abizis Innovative Solutions is
                committed to excellence and innovation. Operating through AIS
                Tech Services &amp; Sales and AIS Media, we aim to make a
                significant impact in the industry by offering cutting-edge
                services tailored to your evolving needs.
              </p>
              <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2.5 text-slate-700 font-medium rounded-lg">
                <Calendar size={18} className="text-vibrant" />
                Established June 2023
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a
                href="tel:+263776414650"
                className="group flex flex-col items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors duration-200"
              >
                <Phone
                  size={24}
                  className="text-corporate group-hover:text-vibrant transition-colors"
                />
                <div>
                  <h3 className="text-lg font-bold mb-1">Call us</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300">
                    Mon–Fri, 8am to 5pm
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@abizis.co.zw"
                className="group flex flex-col items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors duration-200"
              >
                <Mail
                  size={24}
                  className="text-corporate group-hover:text-vibrant transition-colors"
                />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email us</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300">
                    Drop us a line anytime
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            variants={fadeUp}
            className="lg:pl-8"
          >
            <WhatsAppForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
