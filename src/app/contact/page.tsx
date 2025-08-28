"use client";

import VideoSection from "@/components/layout/VideoSection";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div>
    {/* Hero Section */}
    <section className="px-6 py-16 mt-20 text-center bg-black md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-orange-500">Contact Us</h1>
    </section>

    
    <section className="px-6 py-20 bg-orange-50 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold text-orange-500"> \ Get In Touch \ </p>
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Hey! Let’s Talk</h2>

        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          {/* Left - Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button className="w-full px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Send Now
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="p-8 text-left bg-white rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="flex items-center font-semibold text-orange-500">
                <FaPhoneAlt className="mr-2" /> Call Anytime
              </h3>
              <p className="text-gray-600">077 273 8652</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center font-semibold text-orange-500">
                <FaEnvelope className="mr-2" /> Send Email
              </h3>
              <p className="text-gray-600">contact@di3k.com</p>
            </div>

            <div className="mb-6">
              <h3 className="flex items-center font-semibold text-orange-500">
                <FaMapMarkerAlt className="mr-2" /> Visit Us
              </h3>
              <p className="text-gray-600">262/A, Pahala Bominlya, Kaduwela</p>
            </div>

            {/* Social Media Icons */}
            <h3 className="font-semibold text-gray-800">Follow us</h3>
            <div className="flex mt-3 space-x-4">
  <a 
    href="https://www.linkedin.com/company/di3k/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaLinkedin className="text-xl" />
  </a>
  
  <a 
    href="https://www.instagram.com/your-instagram-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaInstagram className="text-xl" />
  </a>
  
  <a 
    href="https://www.facebook.com/your-facebook-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaFacebook className="text-xl" />
  </a>
  
  <a 
    href="https://twitter.com/your-twitter-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaTwitter className="text-xl" />
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
    <VideoSection />

    </div>
    </>
  );
};

export default Contact;
