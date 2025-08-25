import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showSearch, setShowSearch] = useState(false); // mobile search toggle
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
      setShowSearch(false);
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">

        {/* Logo / Mobile Search */}
        <div className="flex-1 flex items-center">
          {showSearch ? (
            <form onSubmit={handleSearch} className="flex-1">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border rounded-full px-3 py-1 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
                autoFocus
              />
            </form>
          ) : (
            <NavLink to="/" className="md:hidden">
              <img
                src="https://agents.rathin.com/img/logo/logo-dark-streamline.png"
                alt="Mobile Logo"
                className="h-8 w-auto"
              />
            </NavLink>
          )}

          {/* Desktop Logo */}
          <NavLink to="/" className="hidden md:block">
            <img
              src="https://rathincom.b-cdn.net//app-assets/media/logos/rathin-tourism-llc---------------------.jpg"
              alt="Desktop Logo"
              className="h-10 w-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation + Search */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative hover:text-sky-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative hover:text-sky-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            Contact Us
          </NavLink>

          <form
            onSubmit={handleSearch}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </form>
        </div>

        {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Search Icon */}
           <form
            onSubmit={handleSearch}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full border rounded-full px-3 py-1 text-sm 
               placeholder-gray-400 text-gray-800 
               focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </form>

            {/* Hamburger Menu */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} className="text-gray-800" />
              </button>
            </div>
            <nav className="flex flex-col items-start px-6 space-y-4 font-medium text-gray-800">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-sky-400 ${isActive ? "text-sky-500" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-sky-400 ${isActive ? "text-sky-500" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
