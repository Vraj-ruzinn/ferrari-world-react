import React, { useRef, useEffect, useState } from "react";
import { FaTicketAlt, FaGlobe, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Reveal = ({ children, delay = 0, duration = 400 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target); // only animate once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Viewsection = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-white">
        <div className="mb-10 mt-15 text-center px-5 sm:text-left md:text-left">
          <div className="inline-block 2xl:mx-1">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl font-bold text-black">
              Why Book with Rathin Tours
            </h2>
            <div className="h-1 bg-orange-400 mt-2 w-full"></div>
          </div>
        </div>

        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Card 1 */}
          <Reveal delay={100}>
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
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
              <FaGlobe className="text-sky-500 text-6xl mb-4" />
              <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                Enhance your experience with our knowledgeable guides who ensure
                you get the most out of every visit with insider tips and smooth
                coordination.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300}>
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
              <FaShieldAlt className="text-green-600 text-6xl mb-4" />
              <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                Hassle-Free Booking Process
              </h3>
              <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                No stress, no delays. Our smooth and secure booking system lets
                you reserve your favorite attractions in just a few clicks.
              </p>
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={400}>
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-sm">
              <FaHeadset className="text-sky-500 text-6xl mb-4" />
              <h3 className="text-base sm:text-lg text-black font-bold mb-2">
                24x7 Customer Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                We're always here for you. Get round-the-clock assistance before,
                during, or after your booking—your perfect trip is just a message
                away.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Viewsection;
