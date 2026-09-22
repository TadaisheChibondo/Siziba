import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      {/* Removed the max-w-7xl and padding constraints so the Hero can stretch end-to-end */}
      <main className="flex-grow w-full">{children}</main>

      <WhatsAppFAB />
      <Footer />
    </div>
  );
};

export default Layout;
