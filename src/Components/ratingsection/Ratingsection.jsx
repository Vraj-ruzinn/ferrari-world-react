import React from "react";

const Ratingsection = () => {
  return (
    <div className="bg-black">
      <section className="container mx-auto py-6">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
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
                className="flex flex-col items-center text-gray-300 text-center"
              >
                {/* Top part (icon + label) */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-8 sm:h-10 md:h-8 lg:h-8"
                  />
                  <span className="text-sm sm:text-base md:text-lg lg:text-lg font-medium">
                    {item.label}
                  </span>
                </div>

                {/* Rating below */}
                <div className="font-bold text-lg sm:text-xl md:text-[26px] lg:text-[26px] mt-1">
                  {item.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ratingsection;
