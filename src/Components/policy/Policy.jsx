import React from 'react'
import Header from '../header/Header'
import Footersection from '../footersection/Footersection'

const Policy = () => {
  return (
    <div>
      <Header />
      
      <main className='container mx-auto'>
        <div className=" px-4 py-12 text-gray-800 leading-relaxed text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="mb-4">
          <strong>Privacy Policy for Rathin Tourism LLC</strong>
        </p>
        <p className="mb-4">
          At Rathin Tourism LLC, accessible at <span className="text-blue-600">rathin.com</span>, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by Rathin and how we use it.
        </p>
        <p className="mb-4">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at{' '}
          <a href="mailto:info@rathin.com" className="text-blue-600">
            info@rathin.com
          </a>
        </p>
        <p className="mb-8">
          This privacy policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Rathin. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
        <p className="mb-6">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information we collect
        </h2>
        <p className="mb-6">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. <br />
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide. <br />
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How we use your information
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, updates, and marketing
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Log Files</h2>
        <p className="mb-6">
          Rathin follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          as part of hosting services' analytics. The information collected
          includes IP addresses, browser type, ISP, date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any personally identifiable information. The purpose is to
          analyze trends, administer the site, and gather demographic data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Cookies and Web Beacons
        </h2>
        <p className="mb-6">
          Like any other website, Rathin uses cookies. These cookies are used to
          store information including visitors' preferences, and the pages on
          the website that the visitor accessed or visited. The information is
          used to optimize the users' experience by customizing content based on
          visitors' browser type and/or other information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          DoubleClick DART Cookie
        </h2>
        <p className="mb-6">
          Google is one of a third-party vendors on our site. It uses DART
          cookies to serve ads based on visits to our website and others. You
          can opt out at:{' '}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Policy
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          GDPR & CCPA Privacy Rights
        </h2>
        <p className="mb-6">
          Users have the right to access, rectify, erase, restrict processing,
          object to processing, and request data portability. California
          consumers also have the right to request disclosure or deletion of
          data, and opt-out of the sale of personal data. If you wish to
          exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Children's Information
        </h2>
        <p className="mb-6">
          Rathin does not knowingly collect any Personal Identifiable
          Information from children under 13. If you believe your child provided
          such information, please contact us immediately and we will promptly
          remove it.
        </p>
        </div>
      </main>

      <Footersection />
    </div>
  )
}

export default Policy
