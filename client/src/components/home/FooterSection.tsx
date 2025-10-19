import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { FaInstagram } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-black mt-5 text-white">
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

      {/* Bottom footer */}
      <section className="w-full border-t-[1px] border-stone-600 flex items-center h-[70px]">
        <MaxWidthWrapper>
          <div className="flex w-full justify-between items-center">
            {/* Left */}
            <div className="text-sm font-thin tracking-widest">©JSQUAREDSTUDIOS</div>

            {/* Right */}
            <a
              href="https://www.instagram.com/jsquared.studios/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default FooterSection;

// content

// [ per project ]
// [ per project ]
// [ per project ]
// 
// sydney thunder
// creatine