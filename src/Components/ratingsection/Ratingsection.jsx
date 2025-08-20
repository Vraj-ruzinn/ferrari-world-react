import React from "react";

const Ratingsection = () => {
  return (
    <section className="container mx-auto bg-black py-6">
        <div className="">
        <div className="  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4">
          {[
            {
              img: "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/trip-advisor01.png",
              label: "TripAdvisor",
              rating: "4.6/5",
            },
            {
              img: "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/trust-pilot01.png",
              label: "TrustPilot",
              rating: "4.9/5",
            },
            {
              img: "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/google01.png",
              label: "Google",
              rating: "4.0/5",
            },
            {
              img: "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/reviews02.png",
              label: "Reviews.IO",
              rating: "4.3/5",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-gray-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-8 mb-1 sm:h-10 md:h-8 lg:h-10"
              />
              <span className="text-sm sm:text-base md:text-lg font-medium">
                {item.label}
              </span>
              <div className="font-bold text-lg sm:text-xl md:text-2xl mt-1">
                {item.rating}
              </div>
            </div>
          ))}
        </div>
    </div>
      </section>
  );
};

export default Ratingsection;
