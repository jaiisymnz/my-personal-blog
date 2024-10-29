import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/NavBar";
import ArticleSection from "./components/ArticleSection";
import ViewPostPage from "./components/ViewPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HeroSection />
              <ArticleSection />
              <Footer />
            </>
          }
        />
        <Route path="/post/:postId" element={<ViewPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
