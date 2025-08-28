"use client";

import Image from "next/image";
import { FaSearch, FaPaintBrush, FaCode, FaCheckCircle, FaLightbulb } from "react-icons/fa"; 
import Link from "next/link";
import Index from "@/components/layout";
import Index2 from "@/components/layout/index2";

const Home = () => {
  return (
<>
    <div className="mt-20 bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-white bg-black md:px-12 lg:px-24">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          {/* Left Content */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="max-w-full text-3xl font-bold text-orange-400 md:text-5xl whitespace-nowrap">
              Empowering Digital Innovation<br /><br />
            </h1>
            <p className="mt-4 text-lg font-semibold text-orange-300">
              We Are Here
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              Smart Tech-Smarter Solutions <br /> IoT, Web & Mobile Development
            </h2>
            <Link href="/services">
              <button className="px-6 py-3 mt-6 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                View More
              </button>
            </Link>
          </div>

          {/* Right - Background Pattern */}
          <div className="justify-end hidden md:w-1/2 md:flex">
            <Image
              src="/home1.png" // Replace with actual pattern image
              alt="Background Pattern"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

       {/* About Section */}
       <section className="relative px-6 py-20 bg-white md:px-12 lg:px-24">
        <div className="container flex flex-col items-center p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:p-12 md:flex-row">
          {/* Left - Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/home2.jpg" // Replace with actual image
              alt="Happy Employee"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div className="mt-8 md:w-1/2 md:mt-0 md:pl-12">
            <h3 className="text-xl font-semibold text-orange-500">Who We Are</h3>
            <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
              We create exceptional technology solutions that help businesses thrive in the digital age.
            </h2>
            <p className="mt-4 text-gray-600">
              Di3K is an innovative IT startup dedicated to helping businesses leverage technology to achieve their goals. 
              We combine technical expertise with strategic thinking to deliver solutions that drive growth and create 
              exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

    {/* Our Process Section */}
    <section className="px-6 py-20 bg-white md:px-12 lg:px-24"> {/* Background remains white */}
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold text-orange-500">Planning</p>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Our Process</h2>

          {/* Process Steps */}
          <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { id: "01", title: "Research", icon: <FaSearch size={50} className="mx-auto text-orange-600" /> },
              { id: "02", title: "Design", icon: <FaPaintBrush size={50} className="mx-auto text-orange-600" /> },
              { id: "03", title: "Develop", icon: <FaCode size={50} className="mx-auto text-orange-600" /> },
              { id: "04", title: "Test", icon: <FaCheckCircle size={50} className="mx-auto text-orange-600" /> },
            ].map((step) => (
              <div key={step.id} className="p-6 text-center transition-all duration-300 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                <div className="text-4xl font-bold text-gray-400">{step.id}</div>
                {step.icon} {/* Display the icon */}
                <h3 className="mt-4 text-lg font-bold text-gray-800">{step.title}</h3>
                <p className="mt-2 text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 py-10 bg-white md:px-12 lg:px-24">
        <div className="container flex flex-col items-center p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:flex-row md:p-12">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <Image
              src="/home3.jpg" // Replace with actual image
              alt="Team Collaboration"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div className="mt-8 md:w-1/2 md:mt-0 md:pl-12">
            <h3 className="text-xl font-semibold text-orange-500">What We Do</h3>
            <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
              We Develop Products That People Love to Use.
            </h2>
            <p className="mt-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>

            {/* Vision Box */}
            <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
               <FaLightbulb size={40} className="text-orange-500" /> {/* Replaced Image with Icon */}
                <h3 className="ml-4 font-semibold text-orange-500">Our Vision</h3>
              </div>
                <p className="mt-2 text-gray-600">
                  To be a leading force in the IT industry by empowering businesses with smart, scalable, and future-ready technology solutions.
                </p>
            </div>

            {/* View More Button */}
            <Link href="/services">
              <button className="px-6 py-3 mt-6 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>
   </div>
   
  <Index />
  <Index2 />
    </>
  );
};

export default Home;
