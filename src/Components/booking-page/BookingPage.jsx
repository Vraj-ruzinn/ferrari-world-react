import React from "react";
import Header from "../header/Header";
import Footersection from "../footersection/Footersection";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingPage = () => {
  
    const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneCode: Yup.string().required("Code is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(7, "Too short")
      .max(15, "Too long")
      .required("Phone number is required"),
    promoCode: Yup.string(),
    cardNumber: Yup.string().required("Card number is required"),
    expiry: Yup.string().required("Expiry date is required"),
    cvv: Yup.string().required("Security code is required"),
    country: Yup.string().required("Country is required"),
  });

   const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    promoCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    country: "India",
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div>
      <Header />

      <div className=" container mx-auto text-black bg-gray-50">
        {/* Main Content */}
        <div className="px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Booking Form */}
          <div className="lg:col-span-2 space-y-8">
             <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                {/* Booking Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Booking Details
                  </h2>

                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-left">
                        First Name *
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm text-left"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-left">
                        Last Name *
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm text-left"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block mb-1 text-left">Email *</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm text-left"
                      />
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <label className="block mb-1 text-left">Code *</label>
                        <Field
                          as="select"
                          name="phoneCode"
                          className="border rounded-md px-3 py-2"
                        >
                          <option value="+971">+971</option>
                          <option value="+91">+91</option>
                          <option value="+44">+44</option>
                        </Field>
                        <ErrorMessage
                          name="phoneCode"
                          component="div"
                          className="text-red-500 text-sm text-left"
                        />
                      </div>

                      <div className="flex-1">
                        <label className="block mb-1 text-left">
                          Phone Number *
                        </label>
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className="border rounded-md px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-500 text-sm text-left"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-4 flex gap-2 items-end">
                    <div className="flex-1">
                      <label className="block mb-1 text-left">Promo Code</label>
                      <Field
                        type="text"
                        name="promoCode"
                        placeholder="Code"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 h-10 rounded-md hover:bg-green-600 transition"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Card Payment Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                  <h2 className="text-lg font-semibold mb-4">Payment</h2>

                  {/* Card Number */}
                  <div className="mb-4 relative">
                    <label className="block mb-1 text-left">Card number</label>
                    <Field
                      type="text"
                      name="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      className="border rounded-md px-3 py-2 w-full pr-16"
                    />
                    {/* Visa + Mastercard icons */}
                    <div className="absolute right-3 top-9 flex gap-1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                        alt="Visa"
                        className="h-5"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="Mastercard"
                        className="h-5"
                      />
                    </div>
                    <ErrorMessage
                      name="cardNumber"
                      component="div"
                      className="text-red-500 text-sm text-left"
                    />
                  </div>

                  {/* Expiry + CVV */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 text-left">Expiry date</label>
                      <Field
                        type="text"
                        name="expiry"
                        placeholder="MM / YY"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="expiry"
                        component="div"
                        className="text-red-500 text-sm text-left"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-left">
                        Security code
                      </label>
                      <Field
                        type="text"
                        name="cvv"
                        placeholder="CVC"
                        className="border rounded-md px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="cvv"
                        component="div"
                        className="text-red-500 text-sm text-left"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="mb-4">
                    <label className="block mb-1 text-left">Country</label>
                    <Field
                      as="select"
                      name="country"
                      className="border rounded-md px-3 py-2 w-full"
                    >
                      <option value="India">India</option>
                      <option value="UAE">UAE</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-sm text-left"
                    />
                  </div>

                  {/* Continue to Payment */}
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition"
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>    
          </div>

          {/* Right Side - Booking Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">
              Atlantis Aquaventure Waterpark
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Atlantis Aquaventure Day Pass
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                Mobile Tickets
              </span>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                Official Reseller
              </span>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                Summer Offer
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> Wed, Sep 17, 2025 10:00 AM
            </p>

            <div className="border-t my-4"></div>

            <div className="flex justify-between text-sm mb-2">
              <span>Adult (8+)</span>
              <span>2 x AED 330.00</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Child (3-7 Years)</span>
              <span>2 x AED 280.00</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>AED 1220.00</span>
            </div>
          </div>
        </div>
      </div>

      <Footersection />
    </div>
  );
};

export default BookingPage;
