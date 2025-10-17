import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
// import { Music } from "lucide-react"; // 🎵 icon from lucide-react

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [time, setTime] = useState<string>("");

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
    <footer className="w-full text-white py-6 fixed bottom-0 left-0 bg-none z-50">
      <MaxWidthWrapper>
        <div
          className={`mx-auto flex ${
            isMobile
              ? "flex-col gap-3 text-center"
              : "justify-between items-center"
          }`}
        >
          {/* Left */}
          <div className="text-sm font-thin tracking-widest">©JSQUARED</div>

          {/* Right (SYD + time together) */}
          <div
            className={`flex items-end gap-3 ${
              isMobile ? "justify-center" : "justify-end flex-1"
            }`}
          >
            {/* <Music size={16} className="text-gray-300" /> */}
            <span className="text-sm font-thin">SYD</span>
            <span className="text-sm font-thin w-[70px] text-center">
              {time}
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
