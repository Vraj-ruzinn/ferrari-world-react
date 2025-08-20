import React from "react";
import Header from "../header/Header";
import Footersection from "../footersection/Footersection";

const TermsConditions = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className=" container flex-1 py-10  text-left ">
        <div className=" text-black p-4">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            {/* Intro */}
            <p>
              Rathin Tourism LLC., its subsidiaries and affiliates, d/b/a Rathin
              Tourism LLC (“Rathin Tourism LLC”, “we”, “our” or “us”) welcomes
              you (the “User(s)”, or “you”) to its primary website at:{" "}
              <a
                href="https://www.rathintourism.com"
                className="text-blue-600 underline"
              >
                www.rathintourism.com
              </a>{" "}
              (including its subdomains) and other websites operated by Rathin
              Tourism LLC (collectively, the “Website”). Rathin Tourism LLC also
              welcomes you to its mobile application “Rathin Tourism” (the “App”,
              and collectively with the Website, the “Platform”).
            </p>
            <p>
              The Platform offers basic information regarding Rathin Tourism LLC
              and allows our Users to access and use the App and Website’s
              content, including text, logos, icons, images, data compilations,
              documents, descriptions, products, software, graphics, photos,
              sounds, videos, interactive features and services (collectively,
              the “Services”, as further detailed below).
            </p>
            <p>
              These Terms of Use (the “Terms”) govern your access to and use of
              the Platform and the Services. We recommend that you read these
              Terms carefully.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Acceptance of the Terms
              </h2>
              <p>
                By entering, connecting to, accessing or using the Platform,
                you acknowledge that you have read and understood the following
                terms of use, including the terms of our Privacy Policy and our
                Cookie Policy (collectively, the "Terms") and you agree to be
                bound by them and to comply with all applicable laws and
                regulations regarding your use of the Platform and you
                acknowledge that these Terms constitute a binding and
                enforceable legal contract between Rathin Tourism LLC and you.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. The Website/App and the Services
              </h2>
              <p>
                Rathin Tourism LLC offers its Users an online platform through
                which Users can book tourism-related services and/or products
                including tours, transportation services, and accommodation
                services. The Services also include features such as customer
                support, secure payment processing, and user account
                management. Rathin Tourism LLC may, at its sole discretion, add
                additional services or remove existing ones.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">3. Bookings</h2>
              <p>
                You are welcome to make an online booking of various tourism
                services via Rathin Tourism LLC's Website/App. Upon completion
                of the booking process and successful payment, a confirmation
                will be sent to you via email. Bookings are considered final
                only after confirmation has been issued. It is your
                responsibility to review the details of your booking and ensure
                all information is correct.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. User Responsibility
              </h2>
              <p>
                Users are required to duly arrive to any Group Tour pick-up
                point at least 15 minutes prior to the start time. During the
                Tour, drivers are not obligated to wait after the set time. Any
                delays or failure to arrive at the specified location will be
                considered a “no-show” and may result in cancellation without
                refund. Users are also responsible for providing accurate
                personal details during booking.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                5. Waiver and Release
              </h2>
              <p>
                During a Tour, the Operator and/or their representatives may
                take certain photographs for advertising or promotional
                purposes. If you do not agree, you must inform the guide or
                representative in advance. By participating in the Tour, you
                grant Rathin Tourism LLC a worldwide, royalty-free license to
                use any such photographs or recordings for promotional purposes
                unless otherwise stated.
              </p>
            </section>

            {/* Section 6 - Example Table */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                6. Cancellation and Refund Policy
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-3 py-2 text-left">
                        Type of Service
                      </th>
                      <th className="border px-3 py-2 text-left">
                        Cancellation Terms
                      </th>
                      <th className="border px-3 py-2 text-left">
                        Refund Terms
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2">1-Day Group Tours</td>
                      <td className="border px-3 py-2">
                        Cancel up to 24 hours before
                      </td>
                      <td className="border px-3 py-2">
                        100% refund minus 5% fee
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">Private Tours</td>
                      <td className="border px-3 py-2">
                        Cancel up to 48 hours before
                      </td>
                      <td className="border px-3 py-2">
                        100% refund minus 5% fee
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">E-Tickets</td>
                      <td className="border px-3 py-2">
                        Before issuance only
                      </td>
                      <td className="border px-3 py-2">
                        No refund once issued
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Add remaining sections 7–22 */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                7. Fees and Payments
              </h2>
              <p>
                Payments may be processed via certain online payment service
                providers. Rathin Tourism LLC does not control or is affiliated
                with such processors. Users are responsible for ensuring that
                they use authorized payment methods. By providing payment
                details, you represent that you are legally authorized to use
                the payment method.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                22. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Rathin Tourism
                LLC, its affiliates, and representatives from any claims,
                damages, liabilities, and expenses arising from your use of the
                Website/App, violation of these Terms, or infringement of any
                third-party rights.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footersection />
    </div>
  );
};

export default TermsConditions;
