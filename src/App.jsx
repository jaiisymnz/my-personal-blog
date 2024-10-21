import { useState } from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/NavBar";
import  ArticleSections  from "./components/ArticleSection";
import { BlogCard } from "./components/ArticleSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSections />
      <p className="font-poppins underline mt-12 mb-14 sm:mt-20 sm:mb-32 font-medium">
        <a href="#">View more</a>
      </p>
      <Footer />
    </>
  );
}

export default App;
