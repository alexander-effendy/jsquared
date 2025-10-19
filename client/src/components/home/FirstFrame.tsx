import { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { client } from "@/lib/SanityClient";

const FirstFrame = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const query = `*[_type == "videoContent"] | order(order asc)[0] {
        "videoUrl": video.asset->url
      }`;
      const result = await client.fetch(query);
      setVideoUrl(result?.videoUrl || null);
    };
    fetchVideo();
  }, []);

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {/* Background video */}
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter grayscale opacity-70"
        />
      ) : (
        <div className="w-full h-full bg-black flex items-center justify-center text-white">
          Loading video...
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl md:text-5xl font-thin tracking-[0.3em] uppercase">
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
