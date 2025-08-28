"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-12 text-white bg-black sm:px-12 md:px-16 lg:px-24">
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
        {/* Logo & Social Links */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png" // Replace with actual logo path
              alt="Di3K Logo"
              width={120}
              height={50}
              className="mx-auto md:mx-0"
            />
          </Link>
          <p className="mt-4 text-gray-400">
            It is a long established fact that a reader will be distracted by readable content.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center mt-4 space-x-4 md:justify-start">
  <Link 
    href="https://www.linkedin.com/company/di3k/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 bg-orange-500 rounded-full"
  >
    <FaLinkedin className="w-5 h-5 text-white" />
  </Link>
  
  <Link 
    href="https://www.facebook.com/your-facebook-page" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 bg-orange-500 rounded-full"
  >
    <FaFacebookF className="w-5 h-5 text-white" />
  </Link>
</div>

        </div>

        {/* Services */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Services</h3>
          <div className="w-8 h-1 mx-auto mb-2 bg-orange-500 md:mx-0"></div>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#">Web Design/Development</Link></li>
            <li><Link href="#">App Development</Link></li>
            <li><Link href="#">UI/UX Design</Link></li>
            <li><Link href="#">HubSpot Integration</Link></li>
            <li><Link href="#">Email Marketing</Link></li>
            <li><Link href="#">Website Migration</Link></li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Career</h3>
          <div className="w-8 h-1 mx-auto mb-2 bg-orange-500 md:mx-0"></div>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#">Job Opportunities</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Subscribe Us</h3>
          <div className="w-8 h-1 mx-auto mb-2 bg-orange-500 md:mx-0"></div>
          <p className="mb-4 text-gray-400">
            It is a long established fact that a reader will be distracted.
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-black rounded-md"
            />
            <button className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
