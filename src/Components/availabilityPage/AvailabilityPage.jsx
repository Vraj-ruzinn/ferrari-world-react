import React, { useEffect, useState } from "react";
import Footersection from "../footersection/Footersection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Header from "../header/Header";
import { Dialog } from "@headlessui/react";
import {
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  getDay,
} from "date-fns";
import { Link } from "react-router-dom";

function generateMonthDays(monthDate) {
  return eachDayOfInterval({
    start: startOfMonth(monthDate),
    end: endOfMonth(monthDate),
  });
}

function toLocalDateOnly(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

const AvailabilityPage = () => {
  // --- Date state ---
  const [selectedDate, setSelectedDate] = useState(null); // final chosen date
  const [tempSelectedDate, setTempSelectedDate] = useState(null); // temp date inside modal
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // --- Time & Person state ---
  const [step, setStep] = useState(1); // 1 = date, 2 = time, 3 = people
  const [selectedTime, setSelectedTime] = useState("");
  const [personCount, setPersonCount] = useState({ adult: 1, child: 0 });

  const todayStart = startOfDay(new Date());

  // Time slots (customize as needed)
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const allMonths = Array.from({ length: 12 }, (_, i) => {
    const monthDate = addMonths(todayStart, i);
    return {
      date: monthDate,
      days: generateMonthDays(monthDate),
    };
  });

  useEffect(() => {
    if (isOpen) {
      // Pre-fill the date in the modal if already chosen
      setTempSelectedDate(selectedDate ? toLocalDateOnly(selectedDate) : null);
    }
  }, [isOpen, selectedDate]);

  const handleSelectDay = (day) => {
    if (!isBefore(day, todayStart)) {
      setTempSelectedDate(toLocalDateOnly(day));
      setSelectedTime(""); // reset time when changing date
    }
  };

  // Called when clicking the side "Check availability" button
  const handleCheckAvailability = () => {
    setIsOpen(true);
    // If a date is already chosen, jump to time step, else start at date
    if (selectedDate) {
      setStep(2);
      setTempSelectedDate(selectedDate);
    } else {
      setStep(1);
    }
  };

  // Modal footer actions
  const goNextFromDate = () => {
    if (!tempSelectedDate) return;
    setSelectedDate(tempSelectedDate);
    setStep(2);
  };

  const goNextFromTime = () => {
    if (!selectedTime) return;
    setStep(3);
  };

  const handleConfirmBooking = () => {
    // Simple guard
    if (!selectedDate || !selectedTime) return;

    // Do your API call or navigation here
    console.log("Booking:", {
      date: selectedDate,
      time: selectedTime,
      persons: personCount,
    });

    alert(
      `Booking confirmed!\nDate: ${format(
        selectedDate || new Date(),
        "EEE, MMM d, yyyy"
      )}\nTime: ${selectedTime}\nAdults: ${personCount.adult}, Children: ${personCount.child}`
    );

    // Reset modal
    setIsOpen(false);
    setStep(1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
  };

  const inc = (field) =>
    setPersonCount((p) => ({ ...p, [field]: p[field] + 1 }));
  const dec = (field) =>
    setPersonCount((p) => ({
      ...p,
      [field]: Math.max(field === "adult" ? 1 : 0, p[field] - 1),
    }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Video And Image Section */}
      <section className="container mx-auto px-3 md:px-4 xl:px-5">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-black mt-8 font-bold text-2xl text-center sm:text-3xl md:text-3xl lg:text-4xl lg:text-left">
            1-Day Ticket to Disneyland Paris
          </h1>

          {/* Tags Section */}
          <div
            className="flex flex-wrap gap-2 mt-4 
                justify-center sm:justify-center 
                md:justify-start lg:justify-start xl:justify-start"
          >
            {[
              "Mobile Tickets",
              "Official Reseller",
              "Valid For 3 Months",
              "Summer Offer",
              "Family Friendly",
              "Bestseller",
              "Open Date Ticket",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 
                 text-xs sm:text-sm md:text-base 
                 bg-gray-500 text-white 
                 font-medium rounded-full 
                 shadow-sm  
                 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop Grid (≥ sm) */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Video Section */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto">
            <video
              src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-md"
            ></video>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-plus-Park-Atlantis-Day-Pass.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Louvre-Abu-Dhabi.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-full object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Mobile Swiper (≤ sm only) */}
        <div className="block sm:hidden">
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={true}
          >
            {/* Video Slide */}
            <SwiperSlide>
              <video
                src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover rounded-xl shadow-md"
              ></video>
            </SwiperSlide>

            {/* Image Slides */}
            {[
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-plus-Park-Atlantis-Day-Pass.jpg",
              "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Louvre-Abu-Dhabi.jpg",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="container mx-auto px-3 md:px-4 xl:px-5">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {/* LEFT SECTION — Features */}
          <section className="lg:col-span-2 space-y-6 ">
            <section className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="bg-green-100 p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 text-lg">
                      Free cancellation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Free cancellation up to 3 days before the start of your
                      experience
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="bg-amber-100 p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-amber-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-700 text-lg">
                      Instant Confirmation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get your ticket immediately after booking, no waiting!
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="bg-orange-100 p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 108 8 8.01 8.01 0 00-8-8zM9 4h2v6H9zm0 8h2v2H9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-700 text-lg">
                      Explore at your pace
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Choose your entry time, stay as long as you like
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="bg-sky-100 p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-sky-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-500 text-lg">
                      Best Price Guarantee
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get the best prices available for your booking
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-black text-left mt-4 px-4 leading-[1.8rem]">
              <p>
                The Disney magic comes to life in 2 theme parks, Disneyland®
                Park and Walt Disney Studios® Park. Meet your favorite Disney®
                characters and spend an entire day exploring the different areas
                of Disneyland® Paris. Visit any one or both parks, enjoy
                attractions, shows, selfie spots with Disney characters, and
                much more!
              </p>
            </div>

            <div className="border-t border-gray-300 my-3"></div>

            {/* FAQ */}
            <div className="max-w-screen-lg mx-auto px-4">
              <div className="space-y-8">
                {[
                  {
                    q: "Highlights",
                    a: (
                      <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 leading-relaxed">
                        <li>
                          Level up your Dubai trip (literally!) with a visit to
                          the 124 and 125 floors of the Burj Khalifa.
                        </li>
                        <li>
                          The observation deck with floor-to-ceiling windows on
                          the 124th floor gives you 360° views of the Arabian
                          Gulf.
                        </li>
                        <li>
                          The 125th floor ups the ante with an open-air terrace.
                          And don't miss the exquisite Mashrabiya motifs – a
                          tribute to Arab arts and culture.
                        </li>
                        <li>
                          For a luxurious and personalized experience with
                          shorter wait times, upgrade to Sky Lounge access on
                          the 148th floor. You can also include a visit to the
                          Dubai Aquarium & Underwater Zoo.
                        </li>
                        <li>
                          The 125th floor ups the ante with an open-air terrace.
                          And don't miss the exquisite Mashrabiya motifs – a
                          tribute to Arab arts and culture.
                        </li>
                      </ul>
                    ),
                  },
                  {
                    q: "Inclusions",
                    a: (
                      <ul className="pl-2 space-y-3 text-base text-gray-600 leading-relaxed">
                        {[
                          "Level up your Dubai trip (literally!) with a visit to the 124 and 125 floors of the Burj Khalifa.",
                          "The observation deck with floor-to-ceiling windows on the 124th floor gives you 360° views of the Arabian Gulf.",
                          "The 125th floor ups the ante with an open-air terrace. And don't miss the exquisite Mashrabiya motifs – a tribute to Arab arts and culture.",
                          "For a luxurious and personalized experience with shorter wait times, upgrade to Sky Lounge access on the 148th floor. You can also include a visit to the Dubai Aquarium & Underwater Zoo.",
                          "The 125th floor ups the ante with an open-air terrace. And don't miss the exquisite Mashrabiya motifs – a tribute to Arab arts and culture.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    q: "Exclusions",
                    a: (
                      <ul className="pl-2 space-y-3 text-base text-gray-600 leading-relaxed">
                        {[
                          "Transport is not included.",
                          "Food & beverages are not included.",
                          "Special events are not included.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-red-600 mt-1">✖</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    q: "Location",
                    a: (
                      <div className="w-full h-[400px] mt-6">
                        <iframe
                          title="Ferrari World Abu Dhabi Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.699287746792!2d54.60997231501084!3d24.49552698423425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4547c4a8696d%3A0xc41fcae9d82ba90!2sFerrari%20World%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1702748945678!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          allowFullScreen=""
                          loading="lazy"
                          className="rounded-lg border shadow-md"
                        ></iframe>
                      </div>
                    ),
                  },
                ].map((faq, i) => (
                  <details key={i} className="group border-b border-gray-200 pb-6">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-xl">
                      <span>{faq.q}</span>
                      <svg
                        className="w-5 h-5 text-gray-600 transition-transform duration-300 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pt-5 text-lg text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Reviews Swiper */}
            <div className="max-w-screen-xl mx-auto px-5 mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-sky-400">⭐ 4.5/5 (24,872)</h2>
                <a href="#" className="text-sm font-medium text-sky-400 hover:underline">
                  Show all 24.8K reviews
                </a>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="shadow-md"
              >
                {Array.from({ length: 7 }).map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white shadow rounded-lg p-4 border">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={`https://i.pravatar.cc/50?img=${(idx % 8) + 1}`}
                          alt="user"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">Przemysław</h3>
                          <p className="text-xs text-gray-500">Aug 2025 • Verified booking</p>
                        </div>
                      </div>
                      <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
                      <p className="text-gray-700 text-sm mt-2">
                        That was very exciting however not perfect day in Disneyland Park. Two
                        attractions broke and we lost two hours.
                      </p>
                      <a href="#" className="text-sm font-medium text-sky-400 hover:underline">
                        Read more
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* RIGHT SECTION — Price, Date/Time/Person */}
          <aside className="space-y-6 lg:sticky lg:top-8 self-start">
            {/* Price & Date input trigger */}
            <div className="border rounded-lg p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-400 line-through text-sm">AED 365</p>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                  45% off
                </span>
              </div>
              <p className="text-sm text-gray-500">from</p>
              <p className="text-2xl font-bold mb-4 text-black">AED 199</p>

              {/* Date display (readonly) */}
              <div className="relative mb-4">
                <input
                  type="text"
                  readOnly
                  value={selectedDate ? format(selectedDate, "EEE, MMM d, yyyy") : ""}
                  onClick={() => {
                    setStep(1);
                    setIsOpen(true);
                  }}
                  placeholder="Select a date"
                  className="w-full border rounded-lg p-3 bg-white text-gray-700 text-sm focus:ring-2 focus:ring-sky-400 cursor-pointer pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Trigger full flow */}
              <button
                onClick={handleCheckAvailability}
                className="w-full bg-sky-500 text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition"
              >
                Check availability
              </button>
            </div>

            {/* Why Headout */}
            <div className="border rounded-lg p-5 shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-black">Why Headout?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <p className="text-black">Trusted platform used by 100K+ people, each month</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <p className="text-black">Get the lowest prices and last minute availability</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <p className="text-black">
                    <strong>Discover</strong> and connect with 10,000+ experiences
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <p className="text-black">Browse verified reviews and professional photographs</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <p className="text-black">Have a question? Live chat with our experts 24/7</p>
                </li>
              </ul>
            </div>

            {/* Modal: Date -> Time -> People */}
            <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl 
             w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
             max-h-[95vh] overflow-y-auto scrollbar-hidden 
             transition-all duration-300 relative"
                >
                  {/* Close */}
                  <button
                    onClick={closeModal}
                    aria-label="Close dialog"
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  >
                    ✕
                  </button>

                  {/* Step header */}
                  <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 text-center">
                    {step === 1 && "Select Your Date"}
                    {step === 2 && "Select a Time Slot"}
                    {step === 3 && "Select Persons"}
                  </h2>
                  <p className="text-center text-sm text-gray-500 mb-4">
                    {selectedDate ? format(selectedDate, "EEE, MMM d, yyyy") : "No date selected"}
                    {selectedTime ? ` • ${selectedTime}` : ""}
                  </p>

                  {/* STEP 1: Calendar */}
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {allMonths
                          .slice(currentMonthIndex, currentMonthIndex + 2)
                          .map((month, i) => {
                            const firstDayOffset = getDay(startOfMonth(month.date));
                            return (
                              <div key={i} className="w-full">
                                <div className="flex justify-between items-center mb-4">
                                  {i === 0 && (
                                    <button
                                      onClick={() =>
                                        setCurrentMonthIndex((prev) => Math.max(prev - 1, 0))
                                      }
                                      disabled={currentMonthIndex === 0}
                                      className={`px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base ${
                                        currentMonthIndex === 0
                                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                          : "bg-sky-500 text-white hover:bg-sky-600"
                                      }`}
                                    >
                                      Prev
                                    </button>
                                  )}

                                  <h3 className="text-base sm:text-lg font-semibold text-gray-700 mx-auto">
                                    {format(month.date, "MMMM yyyy")}
                                  </h3>

                                  {i === 1 && (
                                    <button
                                      onClick={() =>
                                        setCurrentMonthIndex((prev) =>
                                          Math.min(prev + 1, allMonths.length - 2)
                                        )
                                      }
                                      disabled={currentMonthIndex >= allMonths.length - 2}
                                      className={`px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base ${
                                        currentMonthIndex >= allMonths.length - 2
                                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                          : "bg-sky-500 text-white hover:bg-sky-600"
                                      }`}
                                    >
                                      Next
                                    </button>
                                  )}
                                </div>

                                <div className="grid grid-cols-7 gap-1 sm:gap-2 text-xs sm:text-sm">
                                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                                    <div
                                      key={d}
                                      className="text-center text-gray-500 font-medium"
                                    >
                                      {d}
                                    </div>
                                  ))}

                                  {Array.from({ length: firstDayOffset }).map((_, idx) => (
                                    <div key={`spacer-${idx}`} className="h-8 sm:h-10" />
                                  ))}

                                  {month.days.map((day) => {
                                    const disabled = isBefore(day, todayStart);
                                    const isSelected =
                                      tempSelectedDate && isSameDay(day, tempSelectedDate);
                                    return (
                                      <button
                                        key={day.toISOString()}
                                        onClick={() => handleSelectDay(day)}
                                        disabled={disabled}
                                        className={`h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all
                                          ${
                                            disabled
                                              ? "text-gray-300 cursor-not-allowed"
                                              : "text-black hover:bg-sky-100 hover:text-sky-600"
                                          }
                                          ${
                                            isSelected
                                              ? "bg-sky-500 text-white shadow-md"
                                              : ""
                                          }`}
                                      >
                                        {format(day, "d")}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                      </div>

                      {/* Footer: Date step */}
                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end gap-3">
                        <button
                          onClick={closeModal}
                          className="px-4 py-2 rounded-lg shadow transition-all bg-gray-200 text-gray-700 text-sm sm:text-base"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={goNextFromDate}
                          disabled={!tempSelectedDate}
                          className={`px-4 py-2 rounded-lg shadow transition-all text-sm sm:text-base ${
                            !tempSelectedDate
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-sky-500 text-white hover:bg-sky-600"
                          }`}
                        >
                          Next: Time
                        </button>
                      </div>
                    </>
                  )}

                  {/* STEP 2: Time slots */}
                  {step === 2 && (
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`border rounded-lg px-3 py-2 text-sm transition ${
                              selectedTime === t
                                ? "bg-sky-500 text-white border-sky-500"
                                : "bg-white text-gray-700 hover:bg-sky-50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="px-4 py-2 rounded-lg shadow transition-all bg-gray-200 text-gray-700 text-sm sm:text-base"
                        >
                          Back
                        </button>
                        <div className="flex gap-3 justify-end">
                          <button
                            onClick={closeModal}
                            className="px-4 py-2 rounded-lg shadow transition-all bg-gray-200 text-gray-700 text-sm sm:text-base"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={goNextFromTime}
                            disabled={!selectedTime}
                            className={`px-4 py-2 rounded-lg shadow transition-all text-sm sm:text-base ${
                              !selectedTime
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-sky-500 text-white hover:bg-sky-600"
                            }`}
                          >
                            Next: Persons
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 3: Person selector */}
                  {step === 3 && (
                    <>
                      <div className="space-y-4">
                        {/* Adults */}
                        <div className="flex items-center justify-between border text-black rounded-xl p-3">
                          <div>
                            <p className="font-semibold text-gray-800">Adults</p>
                            <p className="text-xs text-gray-500">Age 12+</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => dec("adult")}
                              className="w-8 h-8 rounded-full border  flex items-center justify-center text-lg"
                            >
                              –
                            </button>
                            <span className="w-6 text-center font-semibold">
                              {personCount.adult}
                            </span>
                            <button
                              onClick={() => inc("adult")}
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between border text-black rounded-xl p-3">
                          <div>
                            <p className="font-semibold text-gray-800">Children</p>
                            <p className="text-xs text-gray-500">Age 3–11</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => dec("child")}
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
                            >
                              –
                            </button>
                            <span className="w-6 text-center font-semibold">
                              {personCount.child}
                            </span>
                            <button
                              onClick={() => inc("child")}
                              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-3">
                        <button
                          onClick={() => setStep(2)}
                          className="px-4 py-2 rounded-lg shadow transition-all bg-gray-200 text-gray-700 text-sm sm:text-base"
                        >
                          Back
                        </button>
                        <div className="flex gap-3 justify-end">
                          <button
                            onClick={closeModal}
                            className="px-4 py-2 rounded-lg shadow transition-all bg-gray-200 text-gray-700 text-sm sm:text-base"
                          >
                            Cancel
                          </button>
                          <Link
                            to={"/booking-page"}
                            onClick={handleConfirmBooking}
                            className="px-4 py-2 rounded-lg shadow transition-all bg-sky-500 text-white hover:bg-sky-600 text-sm sm:text-base"
                          >
                            Chakeckout
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </div>
            </Dialog>

            {/* Mobile bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 flex justify-between items-center md:hidden z-50">
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">from</p>
                <span className="font-bold text-black text-lg">AED 199</span>
              </div>
              <button
                onClick={handleCheckAvailability}
                className="bg-sky-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-sky-600 transition"
              >
                BOOK NOW
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-500 mt-15">
        <Footersection />
      </footer>
    </div>
  );
};

export default AvailabilityPage;




// import React, { useEffect, useState } from "react";
// import Herosection from "../herosection/Herosection";
// import Footersection from "../footersection/Footersection";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import Header from "../header/Header";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Dialog } from "@headlessui/react";
// import {
//   addMonths,
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   format,
//   isBefore,
//   isSameDay,
//   startOfDay,
//   getDay,
  
// } from "date-fns";

// function generateMonthDays(monthDate) {
//   return eachDayOfInterval({
//     start: startOfMonth(monthDate),
//     end: endOfMonth(monthDate),
//   });
// }

// function toLocalDateOnly(d) {
//   return new Date(d.getFullYear(), d.getMonth(), d.getDate());
// }

// const AvailabilityPage = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [tempSelectedDate, setTempSelectedDate] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

//   const todayStart = startOfDay(new Date());

//   const allMonths = Array.from({ length: 12 }, (_, i) => {
//     const monthDate = addMonths(todayStart, i);
//     return {
//       date: monthDate,
//       days: generateMonthDays(monthDate),
//     };
//   });

//   useEffect(() => {
//     if (isOpen) {
//       setTempSelectedDate(selectedDate ? toLocalDateOnly(selectedDate) : null);
//     }
//   }, [isOpen, selectedDate]);

//   const applySelection = () => {
//     if (tempSelectedDate) {
//       setSelectedDate(toLocalDateOnly(tempSelectedDate));
//     }
//     setIsOpen(false);
//   };

//   const handleSelect = (day) => {
//     if (!isBefore(day, todayStart)) {
//       setTempSelectedDate(toLocalDateOnly(day));
//     }
//   };

//   const handleCheckAvailability = () => {
//     if (!selectedDate) {
//       console.log("No date selected");
//       return;
//     }

//     console.log("Checking availability for:", selectedDate);

//     setSelectedDate(null);
//     setTempSelectedDate(null);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Header />

//       {/* Video And Image Section */}
//       <section className="container mx-auto px-3 md:px-4 xl:px-5">
//         {/* Title */}
//         <div className="mb-6">
//           <h1 className="text-black mt-8 font-bold text-2xl text-center sm:text-3xl md:text-3xl lg:text-4xl lg:text-left">
//             1-Day Ticket to Disneyland Paris
//           </h1>

//           {/* Tags Section */}
//           <div
//             className="flex flex-wrap gap-2 mt-4 
//                 justify-center sm:justify-center 
//                 md:justify-start lg:justify-start xl:justify-start"
//           >
//             {[
//               "Mobile Tickets",
//               "Official Reseller",
//               "Valid For 3 Months",
//               "Summer Offer",
//               "Family Friendly",
//               "Bestseller",
//               "Open Date Ticket",
//             ].map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 
//                  text-xs sm:text-sm md:text-base 
//                  bg-gray-500 text-white 
//                  font-medium rounded-full 
//                  shadow-sm  
//                  transition"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Tablet / Desktop Grid (≥ sm) */}
//         <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
//           {/* Video Section */}
//           <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto">
//             <video
//               src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             ></video>
//           </div>

//           {/* Images Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-plus-Park-Atlantis-Day-Pass.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Louvre-Abu-Dhabi.jpg",
//             ].map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`Image ${i + 1}`}
//                 className="w-full h-40 sm:h-48 md:h-56 lg:h-full object-cover rounded-xl shadow-md"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Mobile Swiper (≤ sm only) */}
//         <div className="block sm:hidden">
//           <Swiper 
//           spaceBetween={12} 
//           slidesPerView={1}
//            modules={[Navigation]}
//           navigation={true}
//           >
            
            
//             {/* Video Slide */}
//             <SwiperSlide>
//               <video
//                 src="https://static.myconnect.ae/-/media/yasconnect/project/fwad/videos/ranveer2022.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-64 object-cover rounded-xl shadow-md"
//               ></video>
//             </SwiperSlide>

//             {/* Image Slides */}
//             {[
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Qasr-Al-Watan-Abu-Dhabi.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Yas-Water-World-Day-Pass.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-plus-Park-Atlantis-Day-Pass.jpg",
//               "https://d1i3enf1i5tb1f.cloudfront.net/landing-page/img-ferrari/Ferrari-World-Theme-Park-Louvre-Abu-Dhabi.jpg",
//             ].map((src, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={src}
//                   alt={`Image ${i + 1}`}
//                   className="w-full h-64 object-cover rounded-xl shadow-md"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       <div className="container mx-auto px-3 md:px-4 xl:px-5">
//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
//           {/* LEFT SECTION — Features */}
//           <section className="lg:col-span-2 space-y-6 ">
//             <section className="container mx-auto px-4 py-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//                 {/* Feature 1 */}
//                 <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
//                   <div className="bg-green-100 p-2 rounded-lg flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-green-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-green-700 text-lg">
//                       Free cancellation
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       Free cancellation up to 3 days before the start of your
//                       experience
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 2 */}
//                 <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
//                   <div className="bg-amber-100 p-2 rounded-lg flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-amber-700"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-amber-700 text-lg">
//                       Instant Confirmation
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       Get your ticket immediately after booking, no waiting!
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 3 */}
//                 <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
//                   <div className="bg-orange-100 p-2 rounded-lg flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-orange-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 2a8 8 0 108 8 8.01 8.01 0 00-8-8zM9 4h2v6H9zm0 8h2v2H9z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-orange-700 text-lg">
//                       Explore at your pace
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       Choose your entry time, stay as long as you like
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 4 */}
//                 <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
//                   <div className="bg-sky-100 p-2 rounded-lg flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-sky-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 15H9v-2h2zm0-4H9V5h2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-sky-500 text-lg">
//                       Best Price Guarantee
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       Get the best prices available for your booking
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <div className="text-black text-left mt-4 px-4 leading-[1.8rem]">
//               <p>
//                 The Disney magic comes to life in 2 theme parks, Disneyland®
//                 Park and Walt Disney Studios® Park. Meet your favorite Disney®
//                 characters and spend an entire day exploring the different areas
//                 of Disneyland® Paris. Visit any one or both parks, enjoy
//                 attractions, shows, selfie spots with Disney characters, and
//                 much more!
//               </p>
//             </div>

//             <div className="border-t border-gray-300 my-3"></div>

//             {/* FAQ */}
//             <div className="max-w-screen-lg mx-auto px-4">
//               {/* FAQ Section */}
//               <div className="space-y-8">
//                 {[
//                   {
//                     q: "Highlights",
//                     a: (
//                       <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 leading-relaxed">
//                         <li>
//                           Level up your Dubai trip (literally!) with a visit to
//                           the 124 and 125 floors of the Burj Khalifa.
//                         </li>
//                         <li>
//                           The observation deck with floor-to-ceiling windows on
//                           the 124th floor gives you 360° views of the Arabian
//                           Gulf.
//                         </li>
//                         <li>
//                           The 125th floor ups the ante with an open-air terrace.
//                           And don't miss the exquisite Mashrabiya motifs – a
//                           tribute to Arab arts and culture.
//                         </li>
//                         <li>
//                           For a luxurious and personalized experience with
//                           shorter wait times, upgrade to Sky Lounge access on
//                           the 148th floor. You can also include a visit to the
//                           Dubai Aquarium & Underwater Zoo.
//                         </li>
//                         <li>
//                           The 125th floor ups the ante with an open-air terrace.
//                           And don't miss the exquisite Mashrabiya motifs – a
//                           tribute to Arab arts and culture.
//                         </li>
//                       </ul>
//                     ),
//                   },
//                   {
//                     q: "Inclusions",
//                     a: (
//                       <ul className="pl-2 space-y-3 text-base text-gray-600 leading-relaxed">
//                         {[
//                           "Level up your Dubai trip (literally!) with a visit to the 124 and 125 floors of the Burj Khalifa.",
//                           "The observation deck with floor-to-ceiling windows on the 124th floor gives you 360° views of the Arabian Gulf.",
//                           "The 125th floor ups the ante with an open-air terrace. And don't miss the exquisite Mashrabiya motifs – a tribute to Arab arts and culture.",
//                           "For a luxurious and personalized experience with shorter wait times, upgrade to Sky Lounge access on the 148th floor. You can also include a visit to the Dubai Aquarium & Underwater Zoo.",
//                           "The 125th floor ups the ante with an open-air terrace. And don't miss the exquisite Mashrabiya motifs – a tribute to Arab arts and culture.",
//                         ].map((item, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start space-x-2"
//                           >
//                             <span className="text-green-600 mt-1">✔</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     ),
//                   },

//                   {
//                     q: "Exclusions",
//                     a: (
//                       <ul className="pl-2 space-y-3 text-base text-gray-600 leading-relaxed">
//                         {[
//                           "Transport is not included.",
//                           "Food & beverages are not included.",
//                           "Special events are not included.",
//                         ].map((item, index) => (
//                           <li
//                             key={index}
//                             className="flex items-start space-x-2"
//                           >
//                             <span className="text-red-600 mt-1">✖</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     ),
//                   },

//                   {
//                     q: "Location",
//                     a: (
//                       <div className="w-full h-[400px] mt-6">
//                         <iframe
//                           title="Ferrari World Abu Dhabi Map"
//                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.699287746792!2d54.60997231501084!3d24.49552698423425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4547c4a8696d%3A0xc41fcae9d82ba90!2sFerrari%20World%20Abu%20Dhabi!5e0!3m2!1sen!2sin!4v1702748945678!5m2!1sen!2sin"
//                           width="100%"
//                           height="100%"
//                           allowFullScreen=""
//                           loading="lazy"
//                           className="rounded-lg border shadow-md"
//                         ></iframe>
//                       </div>
//                     ),
//                   },
//                 ].map((faq, i) => (
//                   <details
//                     key={i}
//                     className="group border-b border-gray-200 pb-6"
//                   >
//                     {/* Question / Heading */}
//                     <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-xl">
//                       <span>{faq.q}</span>
//                       <svg
//                         className="w-5 h-5 text-gray-600 transition-transform duration-300 group-open:rotate-180"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </summary>

//                     {/* Answer */}
//                     <div className="pt-5 text-lg text-gray-700 leading-relaxed">
//                       {faq.a}
//                     </div>
//                   </details>
//                 ))}
//               </div>
//             </div>

//             {/* Swipper */}
//             <div className="max-w-screen-xl mx-auto px-5 mt-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold text-sky-400">
//                   ⭐ 4.5/5 (24,872)
//                 </h2>
//                 <a
//                   href="#"
//                   className="text-sm font-medium text-sky-400 hover:underline"
//                 >
//                   Show all 24.8K reviews
//                 </a>
//               </div>

//               <Swiper
//                 modules={[Navigation, Pagination, Autoplay, EffectFade]}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 autoplay={{
//                   delay: 3000,
//                   disableOnInteraction: false,
//                 }}
//                 loop={true}
//                 speed={1000}
//                 // navigation
//                 // pagination={{ clickable: true }}
//                 breakpoints={{
//                   640: { slidesPerView: 1 },
//                   768: { slidesPerView: 2 },
//                   1024: { slidesPerView: 2 },
//                 }}
//                 className="shadow-md"
//               >
//                 {/* Slide 1 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=3"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Boubabouri
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Jul 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐⭐ 5/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       I wanted to take the moment to express my appreciation for
//                       the exceptional experience my family and I had at
//                       Disneyland Paris.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 2 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 3 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 4 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 5 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 6 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>

//                 {/* Slide 7 */}
//                 <SwiperSlide>
//                   <div className="bg-white shadow rounded-lg p-4 border">
//                     <div className="flex items-center gap-3 mb-2">
//                       <img
//                         src="https://i.pravatar.cc/50?img=5"
//                         alt="user"
//                         className="w-10 h-10 rounded-full"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-800">
//                           Przemysław
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Aug 2025 • Verified booking
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-sky-400 font-semibold">⭐⭐⭐⭐ 4/5</p>
//                     <p className="text-gray-700 text-sm mt-2">
//                       That was very exciting however not perfect day in
//                       Disneyland Park. Two attractions broke and we lost two
//                       hours.
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium text-sky-400 hover:underline"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </section>

//           {/* RIGHT SECTION — Price, Date Picker, Why Headout */}
//           <aside className="space-y-6 lg:sticky lg:top-8 self-start">
//             {/* Price & Date Picker */}
//             <div className="border rounded-lg p-5 shadow-lg">
//               {/* Price & Discount */}
//               <div className="flex items-center gap-2 mb-2">
//                 <p className="text-gray-400 line-through text-sm">AED 365</p>
//                 <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
//                   45% off
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500">from</p>
//               <p className="text-2xl font-bold mb-4 text-black">AED 199</p>

//               {/* Date Input */}
//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   readOnly
//                   value={
//                     selectedDate ? format(selectedDate, "EEE, MMM d, yyyy") : ""
//                   }
//                   onClick={() => setIsOpen(true)}
//                   placeholder="Select a date"
//                   className="w-full border rounded-lg p-3 bg-white text-gray-700 text-sm focus:ring-2 focus:ring-sky-400 cursor-pointer pr-8"
//                 />
//                 {/* Dropdown Icon */}
//                 <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </span>
//               </div>

//               {/* Check Availability Button */}
//               <button
//                 onClick={handleCheckAvailability}
//                 className="w-full bg-sky-500 text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition"
//               >
//                 Check availability
//               </button>
//             </div>

//             {/* Why Headout */}
//             <div className="border rounded-lg p-5 shadow-lg">
//               <h2 className="text-lg font-bold mb-4 text-black">
//                 Why Headout?
//               </h2>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <span className="text-green-500 mr-2">✔</span>
//                   <p className="text-black">
//                     Trusted platform used by 100K+ people, each month
//                   </p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-green-500 mr-2">✔</span>
//                   <p className="text-black">
//                     Get the lowest prices and last minute availability
//                   </p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-green-500 mr-2">✔</span>
//                   <p className="text-black">
//                     <strong>Discover</strong> and connect with 10,000+
//                     experiences
//                   </p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-green-500 mr-2">✔</span>
//                   <p className="text-black">
//                     Browse verified reviews and professional photographs
//                   </p>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-green-500 mr-2">✔</span>
//                   <p className="text-black">
//                     Have a question? Live chat with our experts 24/7
//                   </p>
//                 </li>
//               </ul>
//             </div>

//             {/* Modal for DatePicker */}
//             <Dialog
//               open={isOpen}
//               onClose={() => setIsOpen(false)}
//               className="relative z-50"
//             >
//               <div
//                 className="fixed inset-0 bg-black/40 backdrop-blur-sm"
//                 aria-hidden="true"
//               />

//               <div className="fixed inset-0 flex items-center justify-center p-4">
//                 <Dialog.Panel
//                   className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl 
//              w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
//              max-h-[95vh] overflow-y-auto scrollbar-hidden 
//              transition-all duration-300 relative"
//                 >
//                   {/* TOP-RIGHT Close button */}
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     aria-label="Close dialog"
//                     className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
//                   >
//                     ✕
//                   </button>

//                   <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">
//                     Select Your Date
//                   </h2>

//                   {/* Calendar container → 1 column on mobile, 2 columns from md+ */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//                     {allMonths
//                       .slice(currentMonthIndex, currentMonthIndex + 2)
//                       .map((month, i) => {
//                         const firstDayOffset = getDay(startOfMonth(month.date));

//                         return (
//                           <div key={i} className="w-full">
//                             {/* Month header */}
//                             <div className="flex justify-between items-center mb-4">
//                               {i === 0 && (
//                                 <button
//                                   onClick={() =>
//                                     setCurrentMonthIndex((prev) =>
//                                       Math.max(prev - 1, 0)
//                                     )
//                                   }
//                                   disabled={currentMonthIndex === 0}
//                                   className={`px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base ${
//                                     currentMonthIndex === 0
//                                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                                       : "bg-sky-500 text-white hover:bg-sky-600"
//                                   }`}
//                                 >
//                                   Prev
//                                 </button>
//                               )}

//                               <h3 className="text-base sm:text-lg font-semibold text-gray-700 mx-auto">
//                                 {format(month.date, "MMMM yyyy")}
//                               </h3>

//                               {i === 1 && (
//                                 <button
//                                   onClick={() =>
//                                     setCurrentMonthIndex((prev) =>
//                                       Math.min(prev + 1, allMonths.length - 2)
//                                     )
//                                   }
//                                   disabled={
//                                     currentMonthIndex >= allMonths.length - 2
//                                   }
//                                   className={`px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-base ${
//                                     currentMonthIndex >= allMonths.length - 2
//                                       ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                                       : "bg-sky-500 text-white hover:bg-sky-600"
//                                   }`}
//                                 >
//                                   Next
//                                 </button>
//                               )}
//                             </div>

//                             {/* Calendar Grid */}
//                             <div className="grid grid-cols-7 gap-1 sm:gap-2 text-xs sm:text-sm">
//                               {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
//                                 (d) => (
//                                   <div
//                                     key={d}
//                                     className="text-center text-gray-500 font-medium"
//                                   >
//                                     {d}
//                                   </div>
//                                 )
//                               )}

//                               {Array.from({ length: firstDayOffset }).map(
//                                 (_, idx) => (
//                                   <div
//                                     key={`spacer-${idx}`}
//                                     className="h-8 sm:h-10"
//                                   />
//                                 )
//                               )}

//                               {month.days.map((day) => (
//                                 <button
//                                   key={day.toISOString()}
//                                   onClick={() => handleSelect(day)}
//                                   disabled={isBefore(day, todayStart)}
//                                   className={`h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all
//                   ${
//                     isBefore(day, todayStart)
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-black hover:bg-sky-100 hover:text-sky-600"
//                   }
//                   ${
//                     tempSelectedDate && isSameDay(day, tempSelectedDate)
//                       ? "bg-sky-500 text-white shadow-md"
//                       : ""
//                   }`}
//                                 >
//                                   {format(day, "d")}
//                                 </button>
//                               ))}
//                             </div>
//                           </div>
//                         );
//                       })}
//                   </div>

//                   {/* calender Footer */}
//                   <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-end gap-3">
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="px-4 py-2 rounded-lg shadow transition-all bg-sky-500 hover:bg-sky-600 text-sm sm:text-base"
//                     >
//                       Cancel
//                     </button>

//                     <button
//                       onClick={applySelection}
//                       disabled={!tempSelectedDate}
//                       className={`px-4 py-2 rounded-lg shadow transition-all text-sm sm:text-base ${
//                         !tempSelectedDate
//                           ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           : "bg-sky-500 text-white hover:bg-sky-600"
//                       }`}
//                     >
//                       Apply
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </div>
//             </Dialog>

//             <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 flex justify-between items-center md:hidden z-50">
//               {/* Price text together */}
//               <div className="flex flex-col">
//                 <p className="text-gray-700 text-sm">from</p>
//                 <span className="font-bold text-black text-lg">AED 199</span>
//               </div>

//               {/* Right side button */}
//               <button
//               value={
//                     selectedDate ? format(selectedDate, "EEE, MMM d, yyyy") : ""
//                   }
//               onClick={() => setIsOpen(true)}
//                className="bg-sky-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-sky-600 transition">
//                 BOOK NOW
//               </button>
//             </div>
//           </aside>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-orange-500 mt-15">
//         <Footersection />
//       </footer>
//     </div>
//   );
// };

// export default AvailabilityPage;
