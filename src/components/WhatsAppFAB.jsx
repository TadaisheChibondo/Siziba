import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  // Replace with the client's actual WhatsApp number (include country code, no '+')
  const phoneNumber = "263700000000";
  const defaultMessage = encodeURIComponent(
    "Hi Abizis, I'm interested in learning more about your services.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFAB;
