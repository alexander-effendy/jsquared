import { useEffect, useRef } from "react";

const HomeImageScroller = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let mouseDownAt = 0;
    let prevPercentage = 0;
    let currentPercentage = 0;

    const handleMouseDown = (e: MouseEvent) => {
      mouseDownAt = e.clientX;
    };

    const handleMouseUp = () => {
      mouseDownAt = 0;
      prevPercentage = currentPercentage;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseDownAt === 0) return;

      const mouseDelta = e.clientX - mouseDownAt;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * 100 * 2; // move 2x faster
      currentPercentage = Math.max(Math.min(prevPercentage + percentage, 0), -250);

      // Move the track
      track.style.transform = `translate(${currentPercentage}%, -50%)`;

      // Make each image's visible portion shift with parallax
      const images = track.querySelectorAll<HTMLImageElement>(".image");
      images.forEach((image) => {
        console.log(currentPercentage);
        image.style.objectPosition = `${100 + currentPercentage}% 50%`;
      });
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      id="image-track"
      style={{ transform: "translate(0%, -50%)" }}
    >
      {[
        "https://images.pexels.com/photos/33927026/pexels-photo-33927026.jpeg",
        "https://images.pexels.com/photos/34316104/pexels-photo-34316104.jpeg",
        "https://images.pexels.com/photos/34136522/pexels-photo-34136522.jpeg",
        "https://images.pexels.com/photos/33383830/pexels-photo-33383830.jpeg",
        "https://images.pexels.com/photos/23021280/pexels-photo-23021280.jpeg",
        "https://images.pexels.com/photos/34275045/pexels-photo-34275045.jpeg",
      ].map((src, i) => (
        <img
          key={i}
          className="image"
          src={src}
          draggable="false"
          alt={`slide-${i}`}
        />
      ))}
    </div>
  );
};

export default HomeImageScroller;
