import MaxWidthWrapper from "@/components/general/MaxWidthWrapper";
// import Footer from "@/composnents/home/Footer";
import ImageSection from "@/components/home/ImageSection";
import Navbar from "@/components/home/Navbar";
import Words from "@/components/home/Words";
import TeamSection from "@/components/home/TeamSection";
import FooterSection from "@/components/home/FooterSection";
import SlidingImages from "@/components/home/SlidingImages";
import ServicesSection from "@/components/home/ServicesSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col bg-[#131313] soft-scrollbar-right overflow-x-hidden h-screen">
      <Navbar />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 text-2xl">
          <Words />
          <ImageSection />
          <ServicesSection />
          <TeamSection />
          <SlidingImages />
        </div>
      </MaxWidthWrapper>
      <FooterSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
