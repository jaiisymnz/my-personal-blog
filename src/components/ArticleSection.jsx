import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    </div>
  );
}
