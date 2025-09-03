import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Calendar, MessageCircle, Star } from "lucide-react";

const CardSection = () => {
  const cityDeals = {
    Dubai: [
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
        ],
      },
      {
        title: "Ferrari World Theme Park tickets + Free Transfers",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Complimentary transfer service",
          "E-tickets and transfer vouchers delivered digitally",
          "Digital delivery of all tickets",
        ],
      },
      {
        title: "Ferrari World Theme Park tickets + Free Transfers",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Complimentary transfer service",
          "E-tickets and transfer vouchers delivered digitally",
          "Digital delivery of all tickets",
        ],
      },
      {
        title: "Ferrari World Theme Park tickets + Free Transfers",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Complimentary transfer service",
          "E-tickets and transfer vouchers delivered digitally",
          "Digital delivery of all tickets",
        ],
      },
      {
        title: "Ferrari World Theme Park tickets + Free Transfers",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Complimentary transfer service",
          "E-tickets and transfer vouchers delivered digitally",
          "Digital delivery of all tickets",
        ],
      },
      {
        title: "Ferrari World Theme Park tickets + Free Transfers",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Complimentary transfer service",
          "E-tickets and transfer vouchers delivered digitally",
          "Digital delivery of all tickets",
        ],
      },
    ],
    AbuDhabi: [
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
    ],
    Sharjah: [
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
    ],
    Singapore: [
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: true,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
      {
        title: "Ferrari World Theme Park",
        rating: 4.0,
        availableToday: false,
        images: [
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
          "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        ],
        features: [
          "Park admission ticket for Ferrari World Abu Dhabi",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "Digital delivery of all tickets",
          "Access to rides and shows as per ticket type",
          "E-ticket delivered via email for easy entry",
          "E-ticket delivered via email for easy entry",
        ],
      },
    ],
  };

  const [activeCity, setActiveCity] = useState("Dubai");

  const cities = ["Dubai", "AbuDhabi", "Sharjah", "Singapore"];

  return (
    <section className="container mx-auto">
      <div id="booking-tickets" className="mt-4 px-4">
        {/* Page Title */}
        <div className="mt-15 sm:text-left text-center">
          <div className="inline-block">
            <h1 className="text-[20px] font-bold md:text-2xl lg:text-3xl text-gray-900">
              Popular things to do in {activeCity}
            </h1>
            <div className="h-1 bg-orange-400 mt-2 w-full"></div>
          </div>
        </div>

        {/* City Buttons */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-6 mt-6">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300
        ${
          activeCity === city
            ? "bg-sky-500 text-white shadow-lg"
            : "bg-white text-gray-700 border hover:text-sky-500"
        }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cityDeals[activeCity]?.slice(0, 6).map((deal, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              {/* Swiper Image Section */}
              <div className="w-full h-64 overflow-hidden relative">
                <Swiper
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  speed={1000}
                  pagination={{ clickable: true }}
                  navigation
                  modules={[Navigation, Pagination, Autoplay, EffectFade]}
                  className="h-full mySwiper"
                >
                  {deal.images.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={img}
                        alt={`${deal.title} - ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Info Section */}
<div className="w-full p-5 flex flex-col flex-1 text-left">
  {/* Title + Rating in one row */}
  <div className="flex items-start justify-between gap-3">
    <h2 className="font-bold text-lg text-gray-900 min-h-[52px] overflow-hidden text-ellipsis">
      {deal.title}
    </h2>

    {/* Rating */}
    {deal.rating != null && (
      <div className="flex items-center gap-1 text-sm font-semibold shrink-0">
        <Star size={16} className="text-yellow-400" fill="currentColor" />
        <span className="text-gray-700">{deal.rating.toFixed(1)}</span>
      </div>
    )}
  </div>

  {/* ✅ Availability */}
  {deal.availableToday ? (
    <p className="text-green-600 text-sm font-semibold mt-1">
      Available Today
    </p>
  ) : (
    <p className="text-red-600 text-sm font-semibold mt-1">
      Not Available Today
    </p>
  )}

  <div className="border-t border-gray-200 my-3"></div>
  <div className="flex-grow"></div>

  {/* Price + Button */}
  <div className="flex items-end justify-between">
    {/* Price + Offer */}
    <div className="flex flex-col">
      <p className="text-sm text-gray-500">from</p>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-900">₹3,785</span>
        <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          20% OFF
        </span>
      </div>
    </div>

    {/* Book Ticket Button */}
    <Link
      to={`/product-page`}
      className="px-6 py-2 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-300 transition-colors duration-300"
    >
      Book Now
    </Link>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* View More */}
      <div className="mt-20">
        <Link
          to={`/product-list/${activeCity}`}
          className="mt-6 w-full p-7 text-center bg-sky-400 text-white font-semibold py-2 rounded-lg hover:bg-sky-300 transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default CardSection;

{
  /* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityDeals[activeCity]?.slice(0, 6).map((deal, index) => ( */
}
// <div
//   key={index}
//   className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
// >
{
  /* Swiper Image Section */
}
// <div className="w-full h-64 overflow-hidden">
//   <Swiper
//     autoplay={{
//       delay: 3000,
//       disableOnInteraction: false,
//     }}
//     loop={true}
//     speed={1000}
//     pagination={{ clickable: true }}
//     navigation={true}
//     modules={[Navigation, Pagination, Autoplay, EffectFade]}
//     className="h-full mySwiper"
//   >
//     {deal.images.map((img, imgIndex) => (
//       <SwiperSlide key={imgIndex}>
//         <img
//           src={img}
//           alt={`${deal.title} - ${imgIndex + 1}`}
//           className="w-full h-full object-cover"
//         />
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

{
  /* Info Section */
}
// <div className="w-full p-5 flex flex-col text-left justify-between">
{
  /* Title */
}
// <h2 className="font-bold text-xl text-gray-900 mb-2">
//   {deal.title}
// </h2>

{
  /* Features */
}
{
  /* <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1 text-sm">
                  {deal.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul> */
}

{
  /* More details */
}
{
  /* <Link
                  to={`/product-page`}
                  className="text-sm text-black font-bold hover:underline mt-2"
                >
                  More details →
                </Link> */
}

// <div className="border-t border-gray-300 my-3"></div>

{
  /* Price + Buttons */
}
// <div className="flex justify-between items-center gap-3 flex-wrap">
{
  /* <div>
                    <div className="text-sm text-gray-500">from</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-gray-900">
                        ₹3,785
                      </div>
                      <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                        20% OFF
                      </span>
                    </div>
                  </div> */
}

{
  /* <div className="flex gap-2 flex-wrap">
                    <Link
                      to={`/product-page`}
                      className="flex items-center gap-2 bg-sky-400 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-sky-300 transition-colors duration-300"
                    >
                      <Calendar size={16} />
                      Book Ticket
                    </Link> */
}

{
  /* <a
                      href="https://api.whatsapp.com/send?phone=97142087433"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                      <MessageCircle size={16} />
                      WhatsApp Now
                    </a> */
}
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
