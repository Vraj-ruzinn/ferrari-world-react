import React from "react";

const Backlinesection = () => {
  return (
    <section className="container mx-auto">
      <div className="text-black mb-10">
      <div className="px-4">
        {/* Section Title */}
        <div className="mb-6 text-center sm:text-left">
          <div className="inline-block">
            <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold">
              Explore More On Rathin Tours
            </h2>
            <div className="h-1 bg-orange-400 mt-2 w-full"></div>
          </div>
        </div>

        {/* Things */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:text-left">
            Things to do in Dubai:
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              "Dubai City Tours",
              "Desert Safari Dubai",
              "Dubai Theme Parks",
              "Dubai Limousine Tours",
              "Dubai Burj Khalifa Tickets",
              "Dubai Water Parks",
              "Yacht Rental Dubai",
              "Dubai Adventure Tours",
              "Dubai Airport Transfers",
              "Atlantis Hotel Tours",
              "Hot Air Balloon Dubai",
              "Dubai Events and Live Concerts",
              "Dubai Water Activities",
              "Dhow Cruise Dubai",
            ].map((item, index, arr) => (
              <React.Fragment key={index}>
                <a
                  href="https://rathin.com/"
                  className="text-gray-800 text-xs sm:text-sm md:text-base hover:text-sky-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
                {index !== arr.length - 1 && (
                  <div className="block w-px h-4 bg-gray-400 self-center"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* More Attractions */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:text-left">
            More Dubai Attractions:
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              "IMG Worlds of Adventure",
              "Motiongate Dubai",
              "Global Village Dubai",
              "Dubai Dolphinarium",
              "AYA Universe Dubai",
              "Dhow Cruise Dinner Marina",
              "Dhow Cruise Dinner Creek",
              "Museum of the Future",
              "Dubai Parks and Resorts",
              "Miracle Garden Dubai",
              "Glow Garden",
              "Dubai Aquarium and Underwater Zoo",
              "Atlantis Aquaventure Waterpark",
              "Dubai Frame",
              "Burj Khalifa At The Top Tickets",
              "Sky Views Observatory Tickets",
              "Wild Wadi Water Park Tickets",
              "SKI Dubai Tickets",
              "The Lost Chambers Aquarium Tickets",
              "Dubai Safari Park Tickets",
              "The Green Planet Dubai Tickets",
              "Real Madrid World Dubai Tickets",
              "Theatre Of Digital Art Tickets",
              "OliOli Dubai Tickets",
            ].map((item, index, arr) => (
              <React.Fragment key={index}>
                <a
                  href="https://rathin.com/"
                  className="text-gray-800 text-xs sm:text-sm md:text-base hover:text-sky-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
                {index !== arr.length - 1 && (
                  <div className="block w-px h-4 bg-gray-400 self-center"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Backlinesection;
