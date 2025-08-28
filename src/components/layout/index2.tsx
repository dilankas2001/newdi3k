"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import VideoSection from "./VideoSection";

const Index2 = () => {
  return (
    <>
    <div className="text-white">
      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-black md:px-12 lg:px-24">
        <p className="text-xl font-semibold text-orange-500">Get In Touch</p>
        <h2 className="text-3xl font-bold md:text-4xl">We'd Love to Hear from You!</h2>

        {/* Contact Information Box */}
        <div className="max-w-4xl p-8 mx-auto mt-10 bg-white rounded-lg">
          <div className="grid grid-cols-1 gap-6 text-black sm:grid-cols-3">
            {/* Call */}
            <div className="flex flex-col items-center p-6 bg-orange-100 rounded-lg shadow-md">
              <FaPhoneAlt className="text-3xl text-orange-500" />
              <h3 className="mt-2 font-bold text-orange-600">Call Anytime</h3>
              <p className="text-sm text-gray-600">077 273 8652</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-6 bg-orange-100 rounded-lg shadow-md">
              <FaEnvelope className="text-3xl text-orange-500" />
              <h3 className="mt-2 font-bold text-orange-600">Send Email</h3>
              <p className="text-sm text-gray-600">contact@di3k.com</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center p-6 bg-orange-100 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-3xl text-orange-500" />
              <h3 className="mt-2 font-bold text-orange-600">Visit Us</h3>
              <p className="text-sm text-gray-600">262/A, Pahala Bominlya, Kaduwela</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mt-6 space-x-4">
  <a 
    href="https://www.linkedin.com/company/di3k/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaLinkedin className="text-xl" />
  </a>
  <a 
    href="https://wa.me/your-whatsapp-number" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaWhatsapp className="text-xl" />
  </a>
  <a 
    href="https://www.facebook.com/your-facebook-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 text-white bg-orange-500 rounded-full"
  >
    <FaFacebook className="text-xl" />
  </a>
</div>

        </div>
      </section>

     <VideoSection />
     
    </div>
    </>
  );
};

export default Index2;
