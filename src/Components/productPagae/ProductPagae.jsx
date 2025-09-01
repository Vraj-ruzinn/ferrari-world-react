import React from "react";
import Header from "../header/Header";
import Footersection from "../footersection/Footersection";
import { GiLaurelCrown } from "react-icons/gi";
import { RiBookOpenLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Calendar, MessageCircle } from "lucide-react";
import { FaShieldAlt, FaTicketAlt } from "react-icons/fa";
import { FaGlobe, FaHeadset } from "react-icons/fa6";

const ProductPage = () => {
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
        "Tickets valid as per booking date",
        "Digital tickets delivered instantly",
      ],
    },
  ];

  const data = [
    {
      img: "https://cdn-imgix.headout.com/media/images/d42dc6ac73c1bfc006d2b9a193223a8a-5764-paris-haloween-in-paris-02.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Halloween in Paris",
      price: "from ₹1,126",
    },
    {
      img: "https://cdn-imgix.headout.com/media/images/35ec27e3dcaf3bd655dca3eed0db289d-2646-paris-10-paris_-attractions_parc-aste%CC%81rix-tickets-02.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Parc Astérix Paris Tickets",
      price: "from ₹2,500",
    },
    {
      img: "https://cdn-imgix.headout.com/media/images/c0f46d3425e3d434cdcce9c2291b47a1-243-paris-%23004-003-paris-%7C-eiffel-tower-02.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Eiffel Tower Tickets",
      price: "from ₹3,732",
    },
    {
      img: "https://cdn-imgix.headout.com/media/images/4489a26280a3474d97ee92d9435192aa-Orsay%20Museum%202.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Orsay Museum Tickets",
      price: "from ₹1,999",
    },
    {
      img: "https://cdn-imgix.headout.com/media/images/57cbaa26-b12a-4c48-929b-5e7e5df53055-1749565230219-283072.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Bateaux Parisiens Cruises",
      price: "from ₹4,000",
    },
    {
      img: "https://cdn-imgix.headout.com/media/images/3a62fd28834ad3f142eef38e30a41e40-Louvre%20Pyramid%20card.png?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min",
      title: "Louvre Museum Tickets",
      price: "from ₹3,200",
    },
  ];

  return (
    <div>
      <Header />

      {/* Product Section */}
      <div className="container mx-auto px-4">
        <section className=" p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-cente shadow-lg rounded-2xl mt-8">
          {/* Left Side: Heading + Content */}
          <div className="order-2 lg:order-none flex flex-col justify-center text-left">
            <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
              Ferrari World Abu Dhabi
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Experience the thrill of Ferrari-inspired adventures at Ferrari
              World Abu Dhabi. From high-speed roller coasters to
              family-friendly attractions, discover unforgettable moments filled
              with excitement and luxury.
            </p>

            {/* Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Card 1 */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center">
                  <GiLaurelCrown className="text-sky-600 text-4xl" />
                  <span className="font-semibold text-sky-700 text-sm mt-1">
                    4.5/5
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sky-700 text-lg">
                    Free cancellation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free cancellation up to 3 days before the start of your
                    experience
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-green-100 p-2 rounded-lg flex items-center justify-center">
                  <RiBookOpenLine className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-700 text-lg">
                    Free cancellation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free cancellation up to 3 days before the start of your
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="order-1 lg:order-none w-full h-64 sm:h-80 md:h-96 lg:h-auto">
            <video
              src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-md"
            ></video>
          </div>
        </section>

        <div className="border-t border-gray-300 my-3 mt-7"></div>

        {/* Cards Section */}
        <div className="mt-8 mb-8 space-y-8">
          {deals.map((deal, index) => (
            <a
              key={index}
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              {/* Info Section Full Width */}
              <div className="w-full p-5 flex flex-col text-left justify-between">
                <div>
                  {/* Title */}
                  <h2 className="font-bold text-xl text-gray-900 mb-2">
                    {deal.title}
                  </h2>

                  {/* Features Row */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 flex-wrap">
                    <a
                      href="https://rathin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 cursor-pointer hover:underline"
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
                  <Link
                    to={`/product-pagae`}
                    className="text-sm text-black font-bold hover:underline mt-2 inline-block"
                  >
                    More details →
                  </Link>
                </div>

                <div className="border-t border-gray-300 my-3"></div>

                {/* Price + Availability */}
                <div className="flex justify-between items-center gap-3 flex-wrap">
                  {/* Price + Discount */}
                  <div>
                    <div className="text-sm text-gray-500">from</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-gray-900">
                        ₹3,785
                      </div>
                      <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                        20% OFF
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      to={`/availability/${index}`}
                      className="flex items-center gap-2 bg-sky-400 text-white font-bold cursor-pointer text-sm px-4 py-2 rounded-lg hover:bg-sky-300 transition-colors duration-300"
                    >
                      <Calendar size={16} />
                      Check availability
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View Card Section */}
        <div className="mb-8">
          {/* Section Title */}
          <div className="mb-8 mt-15 text-center sm:text-left">
            <div className="inline-block">
              <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl text-black font-bold">
                Pro tips to help you make a pick
              </h2>
              <div className="h-1 bg-orange-400 mt-2 w-full"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6 bg-gray-200 rounded-lg p-5">
            {/* Right Column - Swiper */}
            <div className="w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={12}
                loop={true}
                observer={true}
                observeParents={true}
                modules={[Navigation]}
                navigation={true}
                breakpoints={{
                  480: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 28 },
                  1280: { slidesPerView: 3, spaceBetween: 32 },
                  1536: { slidesPerView: 4, spaceBetween: 36 },
                }}
                className="mySwiper !pl-0"
              >
                {[
                  {
                    review:
                      "Disneyland Paris is home to two parks: Disneyland Park and Walt Disney Studios Park. Choose the 1-Park ticket if you want to focus on just one, or opt for the 2-Park ticket to experience the best of both.",
                  },
                  {
                    review:
                      "Tickets come in two options: dated tickets, perfect for fixed plans and cost-effective visits, or flexible tickets, valid for a year—ideal for spontaneous trips.",
                  },
                  {
                    review:
                      "If you’re planning to visit both parks, consider multi-day tickets available for 2, 3, or 4 days to ensure you have enough time to fully enjoy everything at your own pace.",
                  },
                  {
                    review:
                      "Consider upgrading to Premier Access for fast-track entry to popular rides and saves 30-45 minutes per ride. (Note: Premier Access reduces wait times but doesn’t guarantee immediate entry.)",
                  },
                  {
                    review:
                      "If you’re visiting from Paris, round-trip transfer tickets add convenience with morning departures (8:15am - 8:55am) from city meeting points and return shuttles leaving Disneyland Paris at 9pm.",
                  },
                  {
                    review:
                      "Heads up! Tickets aren't sold at the entrance, so it's recommended to book online 2-3 weeks in advance as Disneyland Paris receives 10 million visitors annually.",
                  },
                ].map((item, index) => (
                  <SwiperSlide key={index} className="flex h-full !ml-0">
                    <div className="bg-white flex flex-col justify-between w-full h-full min-h-[250px] text-black p-4 sm:p-6 shadow-md border border-gray-300 text-center rounded-lg">
                      <p className="text-lg leading-7 text-black mb-4">
                        {item.review}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* horigintel card section */}
        <div className="mb-8 shadow-xl p-4">
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-block">
              <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl text-black font-bold">
                Similar things to do in Paris
              </h2>
              <div className="h-1 bg-orange-400 mt-2 w-full"></div>
            </div>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            modules={[Navigation, Autoplay, EffectFade]}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 28 },
              1536: { slidesPerView: 6, spaceBetween: 36 },
            }}
            className="h-full relative"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-fill transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View Section */}
        <section className="mb-8 mt-15">
          <div className="">
            <div className="mb-10 mt-8 text-center px-5 sm:text-left md:text-left">
              <div className="inline-block 2xl:mx-1">
                <h2 className="text-[20px] md:text-2xl lg:text-3xl font-bold text-black">
                  Why Book with Rathin Tours
                </h2>
                <div className="h-1 bg-orange-400 mt-2 w-full"></div>
              </div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <FaTicketAlt className="text-orange-500 text-6xl mb-4" />
                <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                  Official Ticket Seller
                </h3>
                <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                  Book with confidence! Rathin Tours is an authorized seller,
                  offering genuine tickets at unbeatable prices.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <FaGlobe className="text-sky-500 text-6xl mb-4" />
                <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                  Expert Guides
                </h3>
                <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                  Enhance your experience with our knowledgeable guides who
                  ensure you get the most out of every visit with insider tips
                  and smooth coordination.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <FaShieldAlt className="text-green-600 text-6xl mb-4" />
                <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                  Hassle-Free Booking Process
                </h3>
                <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                  No stress, no delays. Our smooth and secure booking system
                  lets you reserve your favorite attractions in just a few
                  clicks.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <FaHeadset className="text-sky-500 text-6xl mb-4" />
                <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                  24x7 Customer Support
                </h3>
                <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                  We're always here for you. Get round-the-clock assistance
                  before, during, or after your booking—your perfect trip is
                  just a message away.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footersection />
    </div>
  );
};

export default ProductPage;

// this is my swipper image section in cards
{
  /* Swiper Image Section */
}
{
  /* <div className="w-full lg:w-1/2 overflow-hidden">
                <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
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
              </div> */
}
