import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "Tech Services",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Replace this with the free access key from Web3Forms
    const accessKey = "b01c5558-1fe6-4086-809e-9a2f90c77525";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Inquiry from ${formData.name} - ${formData.division}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          division: "Tech Services",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <CheckCircle2 size={64} className="text-green-500 mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-500">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-corporate font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        Send us a message
      </h3>
      <p className="text-slate-500 mb-8">
        Fill out the form below and we will reply via email.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-vibrant focus:border-vibrant outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="john@example.com"
            />
          </div>
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
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-corporate text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-corporate/90 transition-all duration-300 shadow-lg shadow-corporate/20 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send size={20} />
          <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
