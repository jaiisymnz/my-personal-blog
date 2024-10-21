import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogPosts } from "../data/blogPost";

export default function ArticleSection() {
  return (
    <div className="flex flex-col gap-8 mb-12 mt-10">
      <h1 className=" font-poppins font-semibold text-2xl text-left px-4">
        Lasted article
      </h1>
      <div className="article-tab flex flex-col sm:flex-row justify-between items-center bg-[#EFEEEB] px-6 py-4">
        <div className="article-nav hidden sm:flex flex-row px-6 py-4 ">
          <p className="px-5 py-3 rounded-lg text-[#75716B] hover:text-black hover:bg-[#DAD6D1] font-poppins font-medium text-base">
            Hightlight
          </p>
          <p className="px-5 py-3 rounded-lg text-[#75716B] hover:text-black hover:bg-[#DAD6D1]  font-poppins font-medium text-base">
            Cat
          </p>
          <p className="px-5 py-3 rounded-lg text-[#75716B] hover:text-black hover:bg-[#DAD6D1] font-poppins font-medium text-base">
            Inspiration
          </p>
          <p className="px-5 py-3 rounded-lg text-[#75716B] hover:text-black  hover:bg-[#DAD6D1] font-poppins font-medium text-base">
            General
          </p>
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
                <SelectItem value="light"> </SelectItem>
                <SelectItem value="dark"> </SelectItem>
                <SelectItem value="system"> </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </article>
    </div>
  );
}


export function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 font-poppins text-sm text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl font-poppins mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 font-poppins text-[#75716B] flex-grow line-clamp-3 text-left">
          {description}
        </p>
        <div className="flex items-center text-sm font-poppins">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt={author}
          />
          <span className="font-medium">{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="font-medium text-[#75716B]">{date}</span>
        </div>
      </div>
    </div>
  );
}
