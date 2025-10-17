import { useMediaQuery } from "react-responsive";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

const FooterSection = () => {
  // detect if screen width is <= 768px (mobile)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="bg-black mt-5">
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

      <section
        className="w-full border-t-[1px] border-stone-600"
        style={{
          height: isMobile ? "100px" : "70px",
        }}
      />
    </div>
  );
};

export default FooterSection;
