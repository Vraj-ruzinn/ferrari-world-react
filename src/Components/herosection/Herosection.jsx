import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Header from "../header/Header";

const heroImages = [
  "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img/ferrari-d1.jpg",
  "https://media.architecturaldigest.com/photos/58a48979cf4c8b7525f1dbd3/16:9/w_1920,c_limit/ferrari-theme-park-spain-cr-portaventura.jpg",
  "https://www.observerdubai.com/wp-content/uploads/2024/09/Ferrari-World-Yas-Island-Abu-Dhabi-1-850x560.jpg",
  "https://img.freepik.com/free-photo/miami-bayside-marketplace_23-2151599520.jpg?t=st=1755064073~exp=1755067673~hmac=067b9f61e963da04df8b08ca169889b991f1f738e5f49481bbee1e0db37c118b&w=1060",
  "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_3_2.webp",
];

const mheroImages = [
  "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img/ferrari-m1.jpg",
  "https://www.observerdubai.com/wp-content/uploads/2024/09/Ferrari-World-Yas-Island-Abu-Dhabi-1-850x560.jpg",
  "https://img.freepik.com/free-photo/miami-bayside-marketplace_23-2151599520.jpg?t=st=1755064073~exp=1755067673~hmac=067b9f61e963da04df8b08ca169889b991f1f738e5f49481bbee1e0db37c118b&w=1060",
  "https://rathincom.b-cdn.net//app-assets/media/products/PRO_ING_3_2.webp",
];

const Herosection = () => {
  return (
    <>
     <Header/>

      {/* Hero Section with Swiper for images */}
      <section className=" mx-auto relative w-full hidden overflow-hidden md:block">
        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
          className="w-full"
        >
          {heroImages?.map((imgUrl, idx) => (
            <SwiperSlide key={idx} className="w-full">
              {/* Responsive Image */}
              <div className="relative w-full">
                <img
                  src={imgUrl}
                  alt={`Hero ${idx}`}
                  className="w-full h-[550px] sm:h-[500px] xs:h-[400px] object-cover object-center"
                />

                {/* Red overlay */}
                <div className="absolute inset-0 bg-opacity-50"></div>

                {/* Optional content */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  {/* <h1 className="text-white text-4xl sm:text-3xl xs:text-2xl font-bold text-center">
              Welcome to Ferrari World
            </h1> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container relative w-full overflow-hidden block md:hidden ">
        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="w-full"
        >
          {mheroImages?.map((imgUrl, idx) => (
            <SwiperSlide key={idx} className="w-full">
              {/* Responsive Image */}
              <div className="relative w-full">
                <img
                  src={imgUrl}
                  alt={`Hero ${idx}`}
                  className="w-full h-[550px] sm:h-[500px] xs:h-[400px] object-cover object-center"
                />

                {/* Red overlay */}
                <div className="absolute inset-0 bg-opacity-50"></div>

                {/* Optional content */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  {/* <h1 className="text-white text-4xl sm:text-3xl xs:text-2xl font-bold text-center">
              Welcome to Ferrari World
            </h1> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Herosection;
