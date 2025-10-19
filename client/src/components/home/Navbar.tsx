import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FiMenu, FiX } from "react-icons/fi";
import MaxWidthWrapper from "@/components/general/MaxWidthWrapper";
import jsquaredLogo from "@/assets/svgs/jsquared.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [time, setTime] = useState<string>("");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Australia/Sydney",
      };
      setTime(new Intl.DateTimeFormat("en-AU", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full z-50 bg-transparent backdrop-blur-sm text-white border-b border-white/20">
      <MaxWidthWrapper className="px-8 py-2.5 flex items-center justify-between">
        {/* Left (Desktop: Logo / Mobile: Logo) */}
        <img
          src={jsquaredLogo}
          alt="JSQUARED Logo"
          className="w-6 md:w-7 object-contain"
        />

        {/* Center (Desktop only) */}
        {!isMobile && (
          <div
            style={{ letterSpacing: "0.1em" }}
            className="flex gap-3 absolute left-1/2 -translate-x-1/2 text-xs text-stone-300  w-[70px] font-thin"
          >
            <span>SYD</span>
            <span>{time}</span>
          </div>
        )}

        {/* Right */}
        {!isMobile ? (
          <div className="flex gap-8 text-xs font-thin">
            <a href="#about" className="hover:text-gray-300">
              ABOUT
            </a>
            <a href="#process" className="hover:text-gray-300">
              RESERVE
            </a>
          </div>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        )}
      </MaxWidthWrapper>

      {/* Sidebar (Mobile only) */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-lg text-white flex flex-col items-center justify-center gap-8 text-lg font-thin z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            PROCESS
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
