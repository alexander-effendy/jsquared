import { FaInstagram } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-black text-white">
      {/* Upper info section */}
      <div className="px-8">
        <span className="font-thin">[ Let's talk ]</span>
        <section className="py-10 text-left font-thin">
          <div className="space-y-2">
            <p className="tracking-wide">Sydney, New South Wales, Australia</p>
            <p className="text-sm text-stone-400">
              info.jsquaredstudios.com.au
            </p>
            <p className="text-sm text-stone-400">(+61) 413 032 238</p>
          </div>
        </section>
      </div>

      {/* Bottom footer (unchanged) */}
      <section className="w-full border-t border-stone-600 flex items-center h-[70px]">
        <div className="flex w-full justify-between items-center px-8">
          {/* Left */}
          <div className="text-sm font-thin tracking-widest">
            © JSQUARED STUDIOS
          </div>

          {/* Right */}
          <a
            href="https://www.instagram.com/jsquared.studios/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-300 transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
