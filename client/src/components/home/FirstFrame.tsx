import boxingVideo from "@/assets/videos/boxingVideo.mp4";
import { FiArrowDown } from "react-icons/fi";

const FirstFrame = () => {
  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {/* Background video */}
      <video
        src={boxingVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter grayscale opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase">
          JSQUARED STUDIOS
        </h1>
        <p className="text-sm md:text-base font-extralight mt-3 text-stone-400 max-w-md">
          A Sydney-based creative studio crafting timeless stories through
          photography and film.
        </p>
      </div>

      {/* Scroll indicator (bottom-left) */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/70 text-xs tracking-widest animate-bounce-slow font-thin">
        <span>SCROLL</span>
        <FiArrowDown size={16} />
      </div>

      {/* Additional description (bottom-right) */}
      <div className="absolute bottom-6 right-6 max-w-xs text-right text-[11px] md:text-sm text-stone-500 leading-relaxed font-light">
        Through light, motion, and composition, we translate human experience
        into visual form — telling stories that move, resonate, and endure.
      </div>
    </div>
  );
};

export default FirstFrame;
