import { useState } from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/NavBar";
import  ArticleSections  from "./components/ArticleSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSections />
      <Footer />
    </>
  );
}

export default App;
