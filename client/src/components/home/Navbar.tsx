import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FiMenu, FiX } from "react-icons/fi";
import MaxWidthWrapper from "@/components/general/MaxWidthWrapper";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div className="w-full z-50 bg-transparent backdrop-blur-sm text-white border-b border-white/20">
      <MaxWidthWrapper className="px-8 py-4 flex items-center justify-between">
        {/* Left (Desktop: OUR WORK / Mobile: JSQUARED) */}
        {!isMobile ? (
          <span className="font-thin text-sm">WORKS</span>
        ) : (
          <h1 style={{ letterSpacing: "0.4em" }} className="text-2xl font-thin">
            JSQUARED
          </h1>
        )}

        {/* Center (Desktop only) */}
        {!isMobile && (
          <h1
            style={{ letterSpacing: "0.2em" }}
            className="absolute left-1/2 -translate-x-1/2 text-xl font-thin"
          >
            JSQUARED
          </h1>
        )}

        {/* Right */}
        {!isMobile ? (
          <div className="flex gap-8 text-xs font-thin">
            <a href="#about" className="hover:text-gray-300">
              ABOUT
            </a>
            <a href="#process" className="hover:text-gray-300">
              PROCESS
            </a>
            <a href="#contact" className="hover:text-gray-300">
              CONTACT
            </a>
          </div>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
