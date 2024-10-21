export function NavBar() {
  return (
    <nav className="NavBar border-b-[0.5px] border-slate-300 h-fit w-full flex flex-row justify-between items-center sm:mb-14 sm:py-2 sm:px-8 pt mb-10">
      <p className="NavIcon w-[24px] h-[24px]">
        hh<span className="text-green-600">.</span>
      </p>
      <div className="NavHamberg w-[24px] h-[24px] sm:hidden">=</div>
      <div className="NavButton hidden sm:flex gap-2">
        <button className="w-[127px] h-[48px] rounded-[999px] p-0 bg-white border-[0.5px] border-black ">
          Login
        </button>
        <button className="w-[141px] h-[48px] rounded-[999px] p-0 bg-black text-white">
          Signup
        </button>
      </div>
    </nav>
  );
}

import { Camera, Linkedin, Github, Search } from "lucide-react";
export function Footer() {
  return (
    <div className="bg-[#EFEEEB] flex flex-col gap-4 items-center py-10 px-4 sm:flex-row sm:justify-between sm:px-[120px] sm:py-[60px]">
      <div className="left flex gap-6">
        <p className="left-text font-poppins text-base">Get in touch</p>
        <div className="left-icon flex gap-4 flex-row">
          <div>
            <Linkedin size={24} />
          </div>
          <div>
            <Github size={24} />
          </div>
          <div>
            <Search size={24} />
          </div>
        </div>
      </div>
      <div className="right">
        <a href="#" className="font-poppins text-base font-medium underline">
          Homepage
        </a>
      </div>
    </div>
  );
}
