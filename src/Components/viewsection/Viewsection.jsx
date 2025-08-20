import React from "react";

const Viewsection = () => {
  return (
    <section className="container mx-auto" >
      <div className=" bg-white">
      <div className="mb-10 mt-15 text-center px-5 sm:text-left md:text-left ">
        <div className="inline-block 2xl:mx-1 ">
          <h2 className="text-[20px] md:text-4xl lg:text-5xl  font-bold text-black">
            Why Book with Rathin Tours
          </h2>
          <div className="h-1 bg-orange-400 mt-2 w-full"></div>
        </div>
      </div>

      <div className=" px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src="https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/wc-ticket.png"
            alt="Official Ticket Seller"
            className="h-20 w-20 object-contain mb-4 "
          />
          <h3 className="text-base sm:text-lg text-black font-bold mb-2">
            Official Ticket Seller
          </h3>
          <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
            Book with confidence! Rathin Tours is an authorized seller, offering
            genuine tickets at unbeatable prices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src="https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/wc-global.png"
            alt="Expert Guides"
            className="h-20 w-20 object-contain mb-4"
          />
          <h3 className="text-base sm:text-lg text-black font-bold mb-2">
            Expert Guides
          </h3>
          <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
            Enhance your experience with our knowledgeable guides who ensure you
            get the most out of every visit with insider tips and smooth
            coordination.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src="https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/wc-shield.png"
            alt="Hassle-Free Booking Process"
            className="h-20 w-20 object-contain mb-4"
          />
          <h3 className="text-base sm:text-lg text-black font-bold mb-2">
            Hassle-Free Booking Process
          </h3>
          <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
            No stress, no delays. Our smooth and secure booking system lets you
            reserve your favorite attractions in just a few clicks.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src="https://d1i3enf1i5tb1f.cloudfront.net/landing-page/icons/wc-support.png"
            alt="24x7 Customer Support"
            className="h-20 w-20 object-contain mb-4"
          />
          <h3 className="text-base sm:text-lg text-black font-bold mb-2">
            24x7 Customer Support
          </h3>
          <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
            We're always here for you. Get round-the-clock assistance before,
            during, or after your booking—your perfect trip is just a message
            away.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Viewsection;
