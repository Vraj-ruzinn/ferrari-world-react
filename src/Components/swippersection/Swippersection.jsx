import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Swippersection() {
  return (
    <div className="container mx-auto px-4 mb-5">
      <div className="">
      {/* Section Title */}
      <div className="mb-8 mt-15 text-center sm:text-left">
        <div className="inline-block">
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-black font-bold">
            Reviews and Ratings
          </h2>
          <div className="h-1 bg-orange-400 mt-2 w-full"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-6 bg-gray-200 rounded-lg p-5">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 p-4 sm:p-6 text-center lg:text-left">
          <p className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            4.8
          </p>
          <div className="flex justify-center lg:justify-start text-green-500 text-lg sm:text-xl mb-2">
            ★★★★★
          </div>
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Based Out of Thousands
          </p>
          <h3 className="text-base sm:text-lg text-black font-bold mb-2">
            What Customers Say About Rathin Tours
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            At Rathin Tours, we're passionate about excitement—and Ferrari World
            Abu Dhabi delivers it at lightning speed! Experience the world's
            fastest roller coaster, heart-pounding rides, and F1-inspired
            adventures. Buckle up and book now!
          </p>
        </div>

        {/* Right Column - Swiper */}
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1} 
            spaceBetween={16}
            loop={true}
            observer={true} 
            observeParents={true}
            modules={[Navigation, Autoplay]}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                // sm: >=640px
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                // md: >=768px
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                // lg: >=1024px
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1280: {
                // xl: >=1280px
                slidesPerView: 2,
                spaceBetween: 36,
              },
            }}
            className="mySwiper"
          >
            {[
              {
                title: "SSmooth and Hassle-Free Booking!",
                review:
                  "I booked my Ferrari World tickets through Rathin Tours, and the whole process was seamless. The website was easy to navigate, and I received my tickets instantly via email. The prices were great, and the customer service team was very helpful. Highly recommend!",
                author: "Ayesha K",
              },
              {
                title: "Best Price and Quick Support",
                review:
                  "Rathin Tours offered the best price I found online for Ferrari World Abu Dhabi tickets. I had a question about ticket validity, and their support team responded promptly. On arrival, the tickets were accepted without any issues. A trustworthy company for sure.",
                author: "Rajesh M",
              },
              {
                title: "Convenient and Reliable Ticket Service",
                review:
                  " I appreciated how easy it was to buy Ferrari World tickets from Rathin Tours. No queues, no hassle, just scanned the e-ticket at the entrance and enjoyed the park. The email confirmation was clear and detailed. Great experience overall.",
                author: " — Sameer A",
              },
              {
                title: "Great Deals and Excellent Customer Care",
                review:
                  "I found Rathin Tours through a friend and decided to try booking Ferrari World tickets with them. The price was competitive, and their customer care went above and beyond to answer all my questions. Highly satisfied!",
                author: " — Lina R",
              },
              {
                title: "Quick Booking and Great Value",
                review:
                  "Booking Ferrari World tickets with Rathin Tours was super easy and affordable. I received instant confirmation and got to skip the long lines at the entrance. Highly recommend for a hassle-free experience.",
                author: " — Omar N",
              },
              {
                title: "Excellent Customer Support",
                review:
                  "The Rathin Tours team was very helpful when I had questions about the ticket options. They helped me choose the right package for my family, and the booking process was smooth and secure.",
                author: " — Priya D",
              },
              {
                title: "Reliable and Trustworthy",
                review:
                  "I was a bit hesitant to book online but Rathin Tours made it so simple. The tickets were genuine, and the whole process was transparent. Will use them again for sure.",
                author: " — Karan S",
              },
              {
                title: "Fantastic Service and Easy Process",
                review:
                  " From browsing to booking, everything with Rathin Tours was straightforward. The tickets arrived quickly, and the staff answered all my queries patiently. Made our Ferrari World trip stress-free.",
                author: " — Sara H",
              },
              {
                title: "Value for Money",
                review:
                  "Rathin Tours offered the best rates compared to other sellers. The booking was simple, and the tickets worked perfectly at Ferrari World. Great value and experience.",
                author: "— Anil P",
              },
              {
                title: "Perfect for Families",
                review:
                  "We booked through Rathin Tours for our family trip, and it went very smoothly. The ticket options were clearly explained, and the support team was very friendly. Would recommend to families visiting Ferrari World.",
                author: "— Neha M",
              },
              {
                title: "Efficient and Prompt",
                review:
                  "Booked my Ferrari World tickets last minute with Rathin Tours, and they delivered instantly. No issues at the gate and great customer support. Will book again!",
                author: "— Faisal R",
              },
              {
                title: "Highly Recommended",
                review:
                  "The best experience booking online tickets for Ferrari World. Rathin Tours is professional, prompt, and reliable. Made my trip hassle-free!",
                author: "— Meera T",
              },
              {
                title: "Seamless Experience",
                review:
                  "I booked my tickets for Ferrari World through Rathin Tours, and the whole process was smooth from start to finish. Quick confirmations and easy redemption.",
                author: "— Dev S",
              },
              {
                title: "Seamless Experience",
                review:
                  "I booked my tickets for Ferrari World through Rathin Tours, and the whole process was smooth from start to finish. Quick confirmations and easy redemption.",
                author: "— Dev S",
              },
              {
                title: "Great Communication and Support",
                review:
                  " Rathin Tours kept me informed at every step and responded quickly to my messages. Booking tickets was hassle-free, and the park visit was amazing!",
                author: " — Laila K",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white h-auto text-black p-4 sm:p-6 shadow-md border border-gray-300 text-center">
                  <h4 className="font-bold text-sm sm:text-lg mb-1">
                    {item.title}
                  </h4>
                  <div className="text-green-500 mb-3 text-sm sm:text-base">
                    ★★★★★
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4">
                    {item.review}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-700">
                    — {item.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </div>
    </div>
  );
}
