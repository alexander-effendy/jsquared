import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

const FooterSection = () => {
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
    <div className="bg-[#131313] mt-5 text-white">
      {/* Top description section */}
      <MaxWidthWrapper>
        <section className="py-5 font-light">
          <span>
            We are a Sydney-based creative studio specializing in photography and film.
            We craft visual stories that capture emotion, movement, and atmosphere —
            transforming moments into timeless imagery. From editorial portraits to
            commercial campaigns, our work blends precision and artistry to bring
            every vision to life with purpose and soul.
          </span>
        </section>
      </MaxWidthWrapper>

      {/* Bottom footer with time */}
      <section
        className="w-full border-t-[1px] border-stone-600 flex items-center"
        style={{
          height: isMobile ? "100px" : "70px",
        }}
      >
        <MaxWidthWrapper>
          <div
            className={`flex w-full ${
              isMobile
                ? "flex-col gap-3 text-center"
                : "justify-between items-center"
            }`}
          >
            {/* Left */}
            <div className="text-sm font-thin tracking-widest">©JSQUARED</div>

            {/* Right */}
            <div
              className={`flex items-end gap-3 ${
                isMobile ? "justify-center" : "justify-end flex-1"
              }`}
            >
              <span className="text-sm font-thin">SYD</span>
              <span className="text-sm font-thin w-[70px] text-center">
                {time}
              </span>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default FooterSection;
