import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="lg:w-full lg:shadow-md lg:bg-white lg:sticky lg:top-0 lg:z-50">
        {/* Container centers the content */}
        <div className="container mx-auto px-5">
          <div className="flex flex-row items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="https://rathincom.b-cdn.net//app-assets/media/logos/rathin-tourism-llc---------------------.jpg"
                  alt="Rathin Tourism"
                  className="h-9 md:h-9 object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
              <Link to="/about" className="hover:text-sky-400">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-sky-400">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-start px-6 space-y-4 font-medium text-gray-800">
          <Link
            to="/about"
            className="hover:text-sky-400"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-sky-400"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
  