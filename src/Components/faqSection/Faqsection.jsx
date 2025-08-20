import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question:
        "How do I book Ferrari World Abu Dhabi tickets through Rathin Tours?",
      answer:
        "Booking is simple! Just select your preferred ticket type, enter your details, and make the payment online. You will receive your e-tickets instantly via email.",
    },
    {
      question: "Can I get a refund or cancel my Ferrari World tickets?",
      answer:
        "Refund and cancellation policies depend on the ticket type. Please check the terms and conditions at the time of booking. Some tickets may be non-refundable.",
    },
    {
      question: "Are the tickets from Rathin Tours valid on any day?",
      answer:
        "Most tickets are valid for the date you select during booking. Some flexible tickets may allow entry on any day within a specified validity period. Please check ticket details before purchase.",
    },
    {
      question: "How will I receive my Ferrari World tickets?",
      answer:
        "Tickets are delivered instantly via email as an e-ticket or PDF. You can either print them or show them on your mobile device at the park entrance.",
    },
    {
      question: "Do I need to print the tickets, or can I use mobile tickets?",
      answer:
        "You can use mobile tickets directly from your phone. However, printing a copy is recommended as a backup.",
    },
    {
      question: "Are there any discounts for children or groups?",
      answer:
        "Yes, discounted ticket options for children, seniors, and groups are often available. Please check the ticket options while booking.",
    },
    {
      question: "What are the park opening hours?",
      answer:
        "Ferrari World Abu Dhabi is typically open from 11:00 AM to 8:00 PM, but timings may vary seasonally. Please check the official Ferrari World website for up-to-date hours.",
    },
    {
      question: "Is there a customer support team to help with my booking?",
      answer:
        "Yes! Rathin Tours offers dedicated customer support via phone, email, or chat to assist you before and after booking.",
    },
    {
      question: "Can I upgrade my ticket or add extras after purchase?",
      answer:
        "Upgrades or add-ons depend on availability. Please contact our support team to explore options.",
    },
    {
      question: "How early should I arrive at Ferrari World Abu Dhabi?",
      answer:
        "We recommend arriving at least 30 minutes before park opening to enjoy your day without rush.",
    },
    {
      question: "Are tickets transferable?",
      answer:
        "Generally, tickets are non-transferable as they are issued in the name of the purchaser. Please verify the specific ticket terms.",
    },
    {
      question:
        "What COVID-19 safety measures are in place at Ferrari World Abu Dhabi?",
      answer:
        "Ferrari World follows all government guidelines for visitor safety, including sanitization, social distancing, and mask policies. Check the official site for current measures.",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="my-15 flex justify-center items-start px-4 ">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        {/* Title */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-block">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black">
              FAQ&apos;s
            </h2>
            <div className="h-1 bg-orange-400 mt-2 w-full"></div>
          </div>
        </div>

        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border-b border-slate-200 py-3 sm:py-4 group"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="block text-left text-base sm:text-lg md:text-xl font-bold text-black">
                {faq.question || "Untitled Question"}
              </span>
              <svg
                className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 mt-2 text-left leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FaqSection;
