export function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center mx-4 sm:flex-row sm:justify-center sm:items-center sm:gap-8 ">
        <div className="sm:w-1/4 mb-10">
          <p className="text-4xl mb-4">Stay Informed,Stay Inspired</p>
          <p className="text-base text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <img
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt=""
            className="w-[343px] h-[470px] sm:w[386px] rounded-2xl object-none"
          />
        </div>
        <div className="sm:w-1/4 ">
          <p>
            <p className="text-sm sm:text-start">-auther</p>
            <p className="text-2xl sm:text-start mb-3">Thomson P.</p>
          </p>
          <p className="text-base text-gray-500 sm:text-start">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness. When i’m not writing,
            I spends time volunteering at my local animal shelter, helping cats
            find loving homes.
          </p>
        </div>
      </div>
    </>
  );
}
