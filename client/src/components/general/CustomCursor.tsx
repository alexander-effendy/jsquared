import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll(".hover-target");
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
        hovered ? "scale-100 opacity-100" : "scale-75 opacity-80"
      }`}
      style={{
        transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-stone-400 bg-black text-white font-light text-[12px] uppercase w-20 h-20 transition-all duration-300 ${
          hovered ? "bg-stone-900 text-white border-stone-600" : "bg-transparent text-transparent border-stone-300"
        }`}
      >
        {hovered && "Explore"}
      </div>
    </div>
  );
};

export default CustomCursor;
