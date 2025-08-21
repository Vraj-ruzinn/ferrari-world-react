import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Calendar, MessageCircle } from "lucide-react";

const CardSection = () => {
  const deals = [
    {
      title: "Ferrari World Theme Park",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Access to rides and shows as per ticket type",
        "E-ticket delivered via email for easy entry",
      ],
    },
    {
      title: "Ferrari World Theme Park tickets + Free Transfers",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Complimentary transfer service",
        "E-tickets and transfer vouchers delivered digitally",
      ],
    },
    {
      title: "Ferrari World Theme Park + Qasr Al Watan Abu Dhabi",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Entry ticket for Qasr Al Watan, Abu Dhabi",
        "Tickets valid as per selected dates",
        "Digital delivery of all tickets",
      ],
    },
    {
      title: "Ferrari World Theme Park + Yas Water World Day Pass",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Day pass to Yas Waterworld, Abu Dhabi",
        "Tickets valid for selected dates",
        "E-ticket delivery via email",
      ],
    },
    {
      title: "Ferrari World Theme Park + Atlantis Day Pass",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-plus-Park-Atlantis-Day-Pass.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Entry ticket for Atlantis The Palm Day Pass, Dubai",
        "Tickets valid on chosen dates",
        "Electronic ticket delivery",
      ],
    },
    {
      title: "Ferrari World Theme Park + Louvre Abu Dhabi",
      images: [
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Louvre-Abu-Dhabi.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-tickets-Free-Transfers.jpg",
        "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
      ],
      features: [
        "Park admission ticket for Ferrari World Abu Dhabi",
        "Entry ticket for Louvre Abu Dhabi",
        "Tickets valid as per booking date",
        "Digital tickets delivered instantly",
      ],
    },
  ];

  return (
    <section className="container mx-auto">
      <div id="booking-tickets" className="mt-4 px-4 font-">
        {/* Page Title */}
        <div className="mt-15 sm:text-left text-center ">
          <div className="inline-block">
            <h1 className="text-[20px] font-bold md:text-4xl lg:text-5xl text-gray-900">
              Best Ferrari World Combo Deals
            </h1>
            <div className="h-1 bg-orange-400 mt-2 w-full"></div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-6 space-y-8">
          {deals.map((deal, index) => (
            <a
              key={index}
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Swiper Image Section */}
              <div className="w-full lg:w-1/2 overflow-hidden">
                <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={false}
                  modules={[Navigation, Pagination, Autoplay]}
                  className="h-full"
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
              <div className="w-full lg:w-1/2 p-5 flex flex-col text-left justify-between">
                <div>
                  {/* Title */}
                  <h2 className="font-bold text-xl text-gray-900 mb-2">
                    {deal.title}
                  </h2>

                  {/* NEW label */}
                  <div className="text-sky-500 font-bold text-sm mb-1">
                    NEW . Tickets
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 flex-wrap">
                    <a
                      href="https://rathin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap- cursor-pointer hover:underline"
                    >
                      📅 Book now, pay later
                    </a>
                    <span className="flex items-center gap-1">
                      ⏳ Flexible duration
                    </span>
                    <span className="flex items-center gap-1">
                      🍽 Meals included
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1 text-sm">
                    {deal.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>

                  {/* More details */}
                  <Link to={`/availability/${index}`} className="text-sm text-black justify-between font-bold hover:underline mt-2">
                    More details →
                  </Link>
                </div>
                <div className="border-t border-gray-300 my-3"></div>

                {/* Price + Availability */}
                <div className="flex justify-between items-center gap-3 flex-wrap">
                  <div>
                    <div className="text-sm text-gray-500">from</div>
                    <div className="text-lg font-bold text-gray-900">
                      ₹3,785
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap ">
                    {/* Check Availability Button */}
                    <Link
                      to={`/availability/${index}`}
                      className="flex items-center gap-2 bg-sky-400 text-white cursor-pointer text-sm px-4 py-2 rounded-lg hover:bg-sky-300 transition-colors duration-300"
                    >
                      <Calendar size={16} /> 
                      Book Ticket
                    </Link>

                    {/* WhatsApp Button */}
                    <a
                      href="https://api.whatsapp.com/send?phone=97142087433"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                      <MessageCircle size={16} /> 
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
