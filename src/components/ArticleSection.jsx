import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { blogPosts } from "../data/blogPost";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [activeCategory, setActiveCategory] = useState("Highlight");

  const handleCategoryClick = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  return (
    <div className="flex flex-col gap-8 mb-12 mt-10">
      <h1 className=" font-poppins font-semibold text-2xl text-left px-4">
        Lasted article
      </h1>
      <div className="article-tab flex flex-col sm:flex-row justify-between items-center bg-[#EFEEEB] px-6 py-4">
        <div className="article-nav hidden sm:flex flex-row px-6 py-4 ">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                disabled={category === activeCategory}
                className={`px-5 py-3 rounded-lg font-poppins font-medium text-base
                ${category === activeCategory ? "bg-[#DAD6D1] font-bold" : ""}
                ${
                  category !== activeCategory
                    ? "hover:bg-[#DAD6D1]"
                    : "cursor-not-allowed"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <div className="article-search py-3 pl-4 pr-3 bg-white border-[1px] border-gray-300 rounded-lg w-[360px] h-[48px] flex justify-between">
            <p className="font-poppins font-medium text-base text-[#75716B]">
              Search
            </p>
            <Search color="#75716B" size={24} />
          </div>
          <div className="sm:hidden text-left">
            <Select>
              <p className="font-poppins text-[#75716B] font-medium text-base pb-1">
                Category
              </p>
              <SelectTrigger className="font-poppins text-[#75716B] font-medium text-base  py-3 pl-4 pr-3 bg-white border-[1px] border-gray-300 rounded-lg w-[360px] h-[48px] flex justify-between">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item) => {
                  return <SelectItem value={item}>{item} </SelectItem>;
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <BlogCard />
    </div>
  );
}
export function BlogCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-4">
      {blogPosts.map((article, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <a href={article.link} className="relative h-[212px] sm:h-[360px]">
            <img
              className="w-full h-full object-cover rounded-md"
              src={article.image}
              alt={`Image for ${article.title}`}
            />
          </a>
          <div className="flex flex-col">
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 font-poppins text-sm text-green-600 mb-2">
                {article.category}
              </span>
            </div>
            <a href={article.link}>
              <h2 className="text-start font-bold text-xl font-poppins mb-2 line-clamp-2 hover:underline">
                {article.title}
              </h2>
            </a>
            <p className="text-muted-foreground text-sm mb-4 font-poppins text-[#75716B] flex-grow line-clamp-3 text-left">
              {article.description}
            </p>
            <div className="flex items-center text-sm font-poppins">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt={`Author: ${article.author}`}
              />
              <span className="font-medium">{article.author}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="font-medium text-[#75716B]">{article.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
