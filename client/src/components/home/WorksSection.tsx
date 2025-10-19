import { useMediaQuery } from "react-responsive";
import GirlPic from "@/assets/imgs/girl.png";
import WeddingPic from "@/assets/imgs/wedding.jpg";
import GlassesPic from "@/assets/imgs/glasses.png";
import FoodPic from "@/assets/imgs/food.jpg";

const WorksSection = () => {
  // Detect large screens (≥1024px)
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="flex flex-col gap-5 font-thin mt-10">
      <span>[ Featured Works ]</span>

      {/* Use flex or grid depending on screen size */}
      <section
        className={
          isLargeScreen
            ? "grid grid-cols-2 gap-5"
            : "flex flex-col gap-5"
        }
      >
        <WorkFrame image={GlassesPic} business="Glassey Studio" date="14 October 2025" />
        <WorkFrame image={GirlPic} business="Another Studio" date="15 October 2025" />
        <WorkFrame image={WeddingPic} business="Third Studio" date="16 October 2025" />
        <WorkFrame image={FoodPic} business="Burger Studio" date="17 October 2025" />
      </section>
    </div>
  );
};

interface WorkFrameProps {
  image: string;
  business: string;
  date: string;
}

const WorkFrame = ({
  image,
  business,
  date,
}: WorkFrameProps) => {
  return (
    <div className="flex flex-col border-[1px] border-stone-700 h-[500px] text-sm font-thin group">
      <img
        src={image}
        alt="work image"
        className="w-full h-[450px] object-cover opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 hover:cursor-help"
      />
      <section className="flex justify-between px-2 border-t-[1px] border-stone-700 pt-3 text-stone-400">
        <span>{business}</span>
        <span>{date}</span>
      </section>
    </div>
  );
};

export default WorksSection;
