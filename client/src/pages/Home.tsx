import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black text-white text-2xl flex flex-col justify-center items-center gap-5">
      <section className="border-[1px] border-stone-500"><img src={Logo} alt="JSquared Logo" className="size-50" /></section>
      <span className="font-thin">COMING SOON</span>
    </div>
  );
};

export default Home;
