import MaxWidthWrapper from "@/components/general/MaxWidthWrapper";
// import Footer from "@/composnents/home/Footer";
// import ImageSection from "@/components/home/ImageSection";
import Navbar from "@/components/home/Navbar";
import Words from "@/components/home/Words";
// import TeamSection from "@/components/home/TeamSection";
import FooterSection from "@/components/home/FooterSection";
// import SlidingImages from "@/components/home/SlidingImages";
// import ServicesSection from "@/components/home/ServicesSection";
import WorksSection from "@/components/home/WorksSection";
import FirstFrame from "@/components/home/FirstFrame";
// import CustomCursor from "@/components/general/CustomCursor";

const Home = () => {
  return (
    <div className="w-full flex flex-col bg-black soft-scrollbar-right overflow-x-hidden h-screen">
      <Navbar />
      {/* <CustomCursor /> */}
      {/* wrap first frame inside a calc(100vh - navbar height) */}
      <div
        style={{ height: "min(100vw, calc(100vh - 50px))" }}
        className="w-full flex flex-col overflow-x-hidden shrink-0 aspect-square"
      >
        <FirstFrame />
      </div>
      {/* <MaxWidthWrapper>
        <WorksSection />
      </MaxWidthWrapper> */}
      <MaxWidthWrapper>
        <Words />
        <WorksSection />
      </MaxWidthWrapper>

      {/* <MaxWidthWrapper>
        <div className="flex flex-col gap-5 text-2xl">
          <Words />
          <ImageSection />
          <WorksSection />
          <ServicesSection />
          <TeamSection />
          <SlidingImages />
        </div>
      </MaxWidthWrapper> */}
      <FooterSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
