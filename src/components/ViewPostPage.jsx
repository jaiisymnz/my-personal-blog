import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Facebook,
  Linkedin,
  Twitter,
  SmilePlus,
  Copy,
  Loader2,
} from "lucide-react";

import axios from "axios";
import { useParams } from "react-router-dom";

function ViewPostPage() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const param = useParams();

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.postId}`
      );
      setImg(response.data.image);
      setTitle(response.data.title);
      setDate(response.data.date);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setContent(response.data.content);
    
    } catch (error) {
      console.log(error);
   
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 container md:px-8 pb-20 md:pb-28 md:pt-8 lg:pt-16">
      <div className="space-y-4 md:px-4">
        <img
          src={img}
          alt={title}
          className="md:rounded-lg object-cover w-full h-[260px] sm:h-[340px] md:h-[587px]"
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-3/4 space-y-8 text-start">
          <article className="px-4">
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {category}
              </span>
              <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-4 mb-10">{description}</p>
            <div className="markdown">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ViewPostPage;
