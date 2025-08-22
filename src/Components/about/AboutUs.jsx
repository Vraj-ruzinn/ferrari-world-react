import React from "react";
import Header from "../header/Header";
import Footersection from "../footersection/Footersection";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Header />
    <div className="container mx-auto">
      {/* Header */}

      {/* Company Overview */}
      <section className=" px-4 mt-8">
        <h2 className="text-3xl mb-4 text-black">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We, at ‘Rathin Tourism LLC’, swear by this and put stock in satisfying
          your Tourism Dreams that make you perpetually rich constantly. We have
          been moving excellent encounters for a considerable length of time
          through our cutting edge planned occassion bundles and other
          fundamental tourism administrations. We arouse our clients to carry on
          with a Rich life, brimming with extraordinary adventurous encounters.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="px-4 space-y-10">
          <div>
            <h2 className="text-2xl text-black font-semibold mb-2 text-left">
              Our Mission
            </h2>
            <p className="text-gray-700 text-left">
              Our primary goal is to provide the best services to our clients at
              each steps. Our passionate team will always assist you in
              exploring Dubai or any other Emirates. Through our exceptionally
              curated occasion bundles, we need to take you on an adventure
              where you personally enjoy with the stunning magnificence of the
              United Arab Emirates and far off deserts. We need you to observe
              sensational scenes that are a long ways beyond your Creative
              Ability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-black font-semibold mb-2 text-left">
              Our Vision
            </h2>
            <p className="text-gray-700 text-left">
              The Powerful inclination of the Voyagers to travel more nowadays
              is something that keeps us inspired to satisfy your vacation
              necessities. Our vision to give you consistent encounters & makes
              us the One of the Main visit administrators in regularly expanding
              tourism industry. To guarantee that you have a satisfied Occassion
              and Healthy encounters, all our services are available to you.
              Regardless of whether it’s reserving a theme park or desert safari
              and city tours for your movement, Rathin Tourism offers everything
              under one umbrella.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="max-w-5xl mx-auto px-5 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8"> */}
      {/* Team Member */}
      {/* <div className="bg-white rounded-lg shadow p-6 text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Rathin Patel</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Priya Sharma</h3>
            <p className="text-gray-600">Travel Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Amit Joshi</h3>
            <p className="text-gray-600">Tour Consultant</p>
          </div>
        </div>
      </section> */}

      {/* Footer CTA */}
    </div>
      <Footersection />
    </div>
  );
};

export default AboutUs;
