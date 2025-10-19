import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { client } from "@/lib/SanityClient";

interface Work {
  title: string;
  date: string;
  business: string;
  imageUrl: string;
}

const WorksSection = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 751px)" });

  useEffect(() => {
    const fetchWorks = async () => {
      const query = `*[_type == "featuredContent"] | order(order asc) {
        title,
        "imageUrl": image.asset->url,
        "date": publishedAt,
      }`;

      const data = await client.fetch(query);
      console.log(data);
      setWorks(data);
    };

    fetchWorks();
  }, []);

  return (
    <div className="flex flex-col gap-5 font-thin mt-10">
      <span>[ Featured Content ]</span>

      <section
        className={
          isMediumScreen
            ? "grid grid-cols-2 gap-4"
            : "flex flex-col gap-3"
        }
      >
        {works.map((work, i) => (
          <WorkFrame
            key={i}
            image={work.imageUrl}
            business={work.title}
            date={new Date(work.date).toLocaleDateString("en-AU")}
          />
        ))}
      </section>
    </div>
  );
};

interface WorkFrameProps {
  image: string;
  business: string;
  date: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

const WorkFrame = ({
  image,
  business,
  date,
  position = "bottom-left",
}: WorkFrameProps) => {
  const positionClasses = {
    "bottom-left": "bottom-0 left-0 text-left",
    "bottom-right": "bottom-0 right-0 text-right",
    "top-left": "top-0 left-0 text-left",
    "top-right": "top-0 right-0 text-right",
  };

  return (
    <div className="relative flex flex-col h-[500px] text-sm font-thin group overflow-hidden">
      {/* Image - grayscale by default, becomes colorful on hover */}
      <img
        src={image}
        alt={business}
        className="w-full h-full object-cover grayscale brightness-[0.7] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
      />

      {/* Text overlay with highlight bar on hover */}
      <div
        className={`absolute ${positionClasses[position]} w-full transition-all duration-500`}
      >
        <div className="px-4 py-3 bg-black/50 group-hover:bg-black/70 transition-all duration-500">
          <p className="text-sm text-stone-200 tracking-wide">{business}</p>
          <p className="text-xs text-stone-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
