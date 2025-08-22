import React, { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footersection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowScrollButton(false);
      } else if (currentScrollY > lastScrollY.current) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black border-t-2 ">
      <footer className="container mx-auto relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4">
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 order-1 sm:order-3">
            {[
              { icon: <FaWhatsapp />, link: "https://web.whatsapp.com/#!" },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/rathin.tours/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/rathintours/",
              },
              { icon: <FaXTwitter />, link: "https://x.com/" },
              { icon: <FaYoutube />, link: "https://www.youtube.com/" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white hover:text-sky-500 border border-gray-700 rounded-full"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CENTER BOTTOM IN MOBILE */}
          <div className="text-white text-xs sm:text-sm text-center order-3 sm:order-2 flex-1">
            COPYRIGHT &copy; {new Date().getFullYear()} Rathin Pvt LTD
          </div>

          {/* LEFT SIDE */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-white text-xs sm:text-sm order-2 sm:order-1 ">
            <Link
              to={`/terms`}
              rel="noopener noreferrer"
              className="hover:underline hover:text-sky-500"
            >
              Terms of Usage
            </Link>
            <Link
              to={`/policy`}
              rel="noopener noreferrer"
              className="hover:underline hover:text-sky-500"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        {showScrollButton && (
          <div className="absolute bottom-34 right-2  md:bottom-20  z-50 ">
            <button
              onClick={scrollToTop}
              className=" 
               bg-sky-400 w-9 h-9  flex items-center justify-center 
               rounded-full text-white hover:bg-sky-500 shadow-lg"
              aria-label="Back to Top"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footersection;
