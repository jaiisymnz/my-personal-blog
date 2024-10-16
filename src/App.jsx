import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="LandingPage max-w-5xl">
        <NavBar />
        <div className="flex-col sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-8">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
function NavBar() {
  return (
    <nav className="NavBar border-b-[0.5px] border-slate-300 h-fit w-full flex flex-row justify-between items-center sm:mb-14 mb-5 sm:py-2 sm:px-8">
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

function HeroSection() {
  return (
    <>
      <div className="sm:w-1/4">
        <p className="text-4xl ">Stay Informed,Stay Inspired</p>
        <p className="text-base text-gray-500">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>

      <img
        src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
        alt=""
        className="w-[343px] h-[470px] sm:w[386px] rounded-16px object-none"
      />

      <div className="sm:w-1/4 ">
        <p>
          <p className="text-sm sm:text-start">-auther</p>
          <p className="text-2xl sm:text-start">Thomson P.</p>
        </p>
        <p className="text-base text-gray-500 sm:text-start">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness. When i’m not writing, I spends
          time volunteering at my local animal shelter, helping cats find loving
          homes.
        </p>
      </div>
    </>
  );
}


export default App;
