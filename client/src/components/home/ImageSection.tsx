import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import BoxingVideo from "@/assets/videos/boxingVideo.mp4";

const ImageSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set playback speed when mounted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // slow motion 0.5x
    }
  }, []);

  return (
    <div className="border-stone-600 border-[1px] rounded-[5px] w-full overflow-hidden">
      <div className="p-2 relative" style={{ aspectRatio: isMobile ? "1 / 1.5" : "2 / 1" }}>
        <video
          ref={videoRef}
          src={BoxingVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-[calc(100%-1rem)] h-[calc(100%-1rem)] top-[0.5rem] left-[0.5rem] object-cover rounded-[3px] filter grayscale"
        />
      </div>
    </div>
  );
};

export default ImageSection;
