const Navbar = () => {
  return (
    <>
      <nav className="w-full">
        <div className="upper bg-slate-800 flex justify-end gap-6 text-white text-[12px] md:text-[15px] pr-6 py-[0.4rem] md:py-[0.6rem]">
          <div>Call us 1600 420 260</div>
          <div className="flex gap-2">
            sign in{" "}
            <img
              src="https://uploads-ssl.webflow.com/6411205aa4059e3917a059f4/645dae6436e891a354921aab_arrow-external.svg"
              alt=""
            />
          </div>
        </div>
        <div className="lower flex justify-between items-center px-5 md:px-7 lg:px-10 pr-5 md:pr-14">
          <div className="logo w-[100px] md:w-[200px]">
            <img src="https://www.abhyaz.com/logo.png" alt="logo" />
          </div>
          <div className="links gap-12 font-[500] text-slate-600 hidden md:flex">
            <div className="relative hoverable-element">
              Business Solutions{" "}
              <div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
            <div className="hoverable-element">
              Science<div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
            <div className="hoverable-element">
              About<div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
            <div className="hoverable-element">
              Pricing<div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
            <div className="hoverable-element">
              Resources
              <div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
            <div className="hoverable-element">
              Contact<div className="line absolut h-[2px] bg-green-700 "></div>
            </div>
          </div>
          <div className="touchBtn text-sm md:text-lg font-[500] text-slate-900 bg-green-200 px-3 py-1 md:py-2 rounded-full cursor-pointer hover:bg-green-300">
            Get in touch
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
