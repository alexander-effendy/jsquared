import { useMediaQuery } from "react-responsive";

const Words = () => {
  const isSmall = useMediaQuery({ maxWidth: 640 }); // mobile
  const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1024 }); // tablets / small laptops

  const textSizeClass = isSmall
    ? "text-xs"
    : isMedium
    ? "text-sm"
    : "text-md";

  return (
    <div className="flex flex-col mt-10 font-thin">
      {/* Title */}
      <span className="mb-5">[ Overview ]</span>

      {/* Text Content */}
      <div
        className={`text-stone-400 ${textSizeClass} leading-relaxed mx-auto grid grid-cols-2 gap-4`}
      >
        <p>
          We are a Sydney-based creative studio specializing in photography and film.
          We craft visual stories that capture emotion, movement, and atmosphere —
          transforming moments into timeless imagery. From editorial portraits to
          commercial campaigns, our work blends precision and artistry to bring
          every vision to life with purpose and soul.
        </p>

        <p>
          Our approach is rooted in collaboration and curiosity. Every project is a
          partnership — an exploration of light, texture, and story. Whether on set
          or on location, we aim to capture authenticity in every frame, creating
          visuals that not only impress but resonate deeply.
        </p>
      </div>
    </div>
  );
};

export default Words;
