"use client";


import Image from "next/image";
import VideoSection from "@/components/layout/VideoSection";

const Services = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="px-6 py-16 mt-20 text-center bg-black md:px-12 lg:px-24">
          <h1 className="text-4xl font-bold text-orange-500">Services</h1>
        </section>

        {/* What We Do Section */}
        <section className="px-6 py-20 bg-gray-100 md:px-12 lg:px-24">
          <div className="container flex flex-col items-center mx-auto md:flex-row">
            {/* Left - Image */}
            <div className="md:w-1/2">
              <Image
                src="/home2.png" // Replace with your actual image
                alt="Team Working"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Text Content */}
            <div className="mt-8 md:w-1/2 md:mt-0 md:pl-12">
              <p className="flex items-center text-xl font-semibold text-orange-500">
                <span className="mr-2"> \ What We Do \ </span>
              </p>
              <h2 className="text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
                We Develop Products That People Love to Use.
              </h2>
              <p className="mt-4 text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to a page when looking at its layout.
              </p>
              <p className="mt-2 text-gray-600">
                The point of using Lorem Ipsum is that of a page when looking at its layout. The point of using Lorem Ipsum 
                is that Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
              </p>

             </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="container px-6 py-12 mx-auto md:px-15 lg:px-28">
          <h1 className="mb-12 text-4xl font-bold text-center text-gray-900">
            Our Expertise
          </h1>

          {/* Web Design / Development Section */}
          <section className="flex flex-col items-center mb-16 md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">
                Web Design / Development
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Reach your audience anytime, anywhere with our cutting-edge web and
                mobile applications. We specialize in designing intuitive,
                high-performance apps that provide seamless user experiences and
                drive digital transformation.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service1.png"
                alt="Web Development"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* AI-Based Solutions Section */}
          <section className="flex flex-col items-center md:flex-row-reverse">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">AI-Based Solutions</h2>
              <p className="mt-4 text-lg text-gray-700">
                Leverage the power of artificial intelligence to enhance business
                efficiency and decision-making. Our AI-driven solutions include
                smart automation, predictive analytics, and machine learning
                applications that streamline operations, reduce human errors, and
                boost productivity.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service2.png"
                alt="AI Solutions"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Cybersecurity Solutions*/}
          <section className="flex flex-col items-center mt-10 mb-16 md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">
              Cybersecurity Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
              Protect your business from evolving cyber threats with our advanced security solutions. 
              We offer threat detection, data encryption, risk management, and secure authentication 
              systems to safeguard sensitive information and ensure compliance with security standards.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service3.png"
                alt="Web Development"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* App Development */}
          <section className="flex flex-col items-center mt-10 md:flex-row-reverse">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">App Development</h2>
              <p className="mt-4 text-lg text-gray-700">
              Build high-performance, user-friendly mobile applications tailored to your business needs. 
              Our team specializes in creating iOS, Android, and cross-platform apps with intuitive interfaces,
               seamless functionality, and secure integrations. From e-commerce and enterprise solutions to 
               on-demand services and AI-powered applications, we develop innovative apps that enhance user
                engagement and drive business growth.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service4.png"
                alt="AI Solutions"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Networking Solutions*/}
          <section className="flex flex-col items-center mt-16 mb-16 md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">
              Networking Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
              Build a secure and scalable IT infrastructure with our networking services. 
              We provide high-speed connectivity, cloud integration, network security, and efficient data management to ensure seamless 
              communication and uninterrupted operations.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service6.png"
                alt="Web Development"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>

          {/* IoT-Based Systems */}
          <section className="flex flex-col items-center mt-16 md:flex-row-reverse">
            <div className="text-center md:w-1/2 md:text-left">
              <h2 className="text-2xl font-bold text-orange-500">IoT-Based Systems</h2>
              <p className="mt-4 text-lg text-gray-700">
              Transform your business with smart, connected solutions that enable real-time monitoring, 
              automation, and data-driven decision-making. Our Internet of Things (IoT) solutions integrate
               sensors, cloud computing, and AI to enhance efficiency across industries like smart homes, 
               industrial automation, healthcare, and logistics. From remote device management to predictive 
               maintenance, we help businesses optimize operations, reduce costs, and improve overall performance.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
              <Image
                src="/service5.png"
                alt="AI Solutions"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </section>
          
        </section>

        {/* Video Section */}
        <VideoSection />
      </div>
    </>
  );
};

export default Services;
