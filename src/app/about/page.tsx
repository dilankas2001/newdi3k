"use client";

import { FaBullseye, FaRocket } from "react-icons/fa"; // Icons for Vision & Mission
import Image from "next/image";
import VideoSection from "@/components/layout/VideoSection";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 py-16 mt-20 text-center bg-black md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-orange-500">About Our Company</h1>
      </section>

      {/* About Section */}
      <div className="container px-6 py-16 mx-auto md:px-12 lg:px-24">
        <div className="p-8 rounded-lg bg-[#FCEEEA] md:flex md:items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              We create exceptional technology solutions that help businesses thrive in the digital age.
            </h1>
            <p className="mt-4 text-gray-700">
              Di3K is an innovative IT startup dedicated to helping businesses leverage technology to achieve their goals.
              We combine technical expertise with strategic thinking to deliver solutions that drive growth and create
              exceptional user experiences.
            </p>
          </div>

          {/* Right Section - Images */}
          <div className="flex justify-center mt-6 space-x-4 md:w-1/2 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <Image src="/about1.jpg" alt="Team Work" width={150} height={180} className="rounded-lg" />
              <Image src="/about2.jpg" alt="Discussion" width={150} height={180} className="rounded-lg" />
              <Image src="/about3.jpg" alt="Team Collaboration" width={150} height={180} className="rounded-lg" />
              <Image src="/about4.jpg" alt="Office Work" width={150} height={180} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="container px-6 py-16 mx-auto md:px-12 lg:px-24">
        <div className="relative">
          {/* Vision */}
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="flex items-center text-2xl font-bold text-blue-900">
                <FaBullseye className="mr-2 text-orange-500" />
                Our Vision
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                To be a leading force in the IT industry by empowering businesses with smart, scalable, and future-ready technology solutions.
              </p>
            </div>
            <div className="relative hidden md:block md:w-1/2">
              <div className="absolute w-24 h-2 bg-orange-500 top-6 left-10"></div>
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full top-4 left-32"></div>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center mt-12 md:flex-row-reverse md:items-start">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="flex items-center text-2xl font-bold text-blue-900">
                <FaRocket className="mr-2 text-orange-500" />
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Developing innovative software solutions that enhance business efficiency and productivity. Creating high-quality web and mobile
                applications to drive digital success. Helping businesses stay ahead with the latest technology and industry trends.
              </p>
            </div>
            <div className="relative hidden md:block md:w-1/2">
              <div className="absolute w-24 h-2 bg-orange-500 top-6 right-10"></div>
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full top-4 right-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />
    </div>
  );
};

export default About;
