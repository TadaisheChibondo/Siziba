import { useState } from "react";
import { Send } from "lucide-react";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    division: "Tech Services",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the number includes the 263 country code without the '+' symbol
    const phoneNumber = "263700000000";

    // Formatting the message with WhatsApp markdown (asterisks for bold text)
    const text = `*New Website Inquiry*\n\n*Name:* ${formData.name}\n*Interested In:* ${formData.division}\n\n*Message:*\n${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Send a direct message
      </h3>
      <p className="text-slate-500 mb-8">
        Skip the inbox. Message our team directly on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-vibrant focus:border-vibrant outline-none transition-all bg-slate-50 focus:bg-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="division"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Service Division
          </label>
          <select
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-vibrant focus:border-vibrant outline-none transition-all bg-slate-50 focus:bg-white"
          >
            <option value="Tech Services">AIS Tech Services & Sales</option>
            <option value="Media Services">AIS Media</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-vibrant focus:border-vibrant outline-none transition-all bg-slate-50 focus:bg-white resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:-translate-y-0.5"
        >
          <Send size={20} />
          <span>Send via WhatsApp</span>
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
