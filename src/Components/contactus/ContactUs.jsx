import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../header/Header";
import Footersection from "../footersection/Footersection";

// ✅ Validation Schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const ContactUs = () => {
  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <Header />

      <div className="container mx-auto bg-white text-black flex flex-col items-center mb-12 px-4">
        {/* Heading */}
        <div className="text-center mb-10 mt-8">
          <h1 className="text-4xl">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We're here to help and answer any questions you might have. Please
            feel free to reach out to us using the information below:
          </p>
        </div>

        {/* Contact Section */}
        <div className=" w-full shadow-2xl rounded-lg overflow-hidden grid md:grid-cols-2">
          {/* Left Info Section */}
          <div className="bg-orange-300 text-white p-8 space-y-6">
            <div className="bg-orange-400 rounded-lg p-5 text-left">
              <h3 className="flex items-center font-semibold text-lg">
                <FaMapMarkerAlt className="mr-2" /> Location:
              </h3>
              <p className="mt-2 text-sm">
                Office #01, Naser Ahmed Bldg Ground Floor, Kuwait Street, Al
                Mankhool, Bur Dubai, PO Box: 46008
              </p>
            </div>

            <div className="bg-orange-400 rounded-lg p-5 text-left">
              <h3 className="flex items-center font-semibold text-lg">
                <FaMapMarkerAlt className="mr-2" /> Branch:
              </h3>
              <p className="mt-2 text-sm">
                FF109/110 Regalia Orane Apollo International school road, nr.
                VIP Road, South, Bopal, Ahmedabad, Gujarat 380058, India.
              </p>
            </div>

            <div className="bg-orange-400 rounded-lg p-5 text-left">
              <h3 className="flex items-center font-semibold text-lg">
                <FaEnvelope className="mr-2" /> Email:
              </h3>
              <p className="mt-2 text-sm">info@rathin.com</p>
            </div>

            <div className="bg-orange-400 rounded-lg p-5 text-left">
              <h3 className="flex items-center font-semibold text-lg">
                <FaPhoneAlt className="mr-2" /> Call:
              </h3>
              <p className="mt-2 text-sm">
                UAE: +971 56 537 4934, +971 4 228 3664
              </p>
            </div>

            <div className="bg-orange-400 rounded-lg p-5 text-left">
              <h3 className="flex items-center font-semibold text-lg">
                <FaClock className="mr-2" /> Open Hours:
              </h3>
              <p className="mt-2 text-sm">Mon-Sat: 11AM - 11PM</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="p-8">
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Submitted:", values);
                alert("Message Sent Successfully ✅");
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`w-full border ${
                          errors.name && touched.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={`w-full border ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm mt-1 text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`w-full border ${
                        errors.subject && touched.subject
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                    />
                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      className={`w-full border ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-400 text-white px-6 py-3 rounded font-semibold hover:bg-orange-500 transition"
                  >
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <Footersection />
    </div>
  );
};

export default ContactUs;
