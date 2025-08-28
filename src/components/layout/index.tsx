"use client";

import { FaLaptopCode, FaPencilRuler, FaServer, FaMobileAlt, FaProjectDiagram, FaEnvelopeOpenText } from "react-icons/fa"; // Import suitable icons
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"; // Autoplay & Pagination
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const services = [
  { title: "Web Design / Development", icon: <FaLaptopCode />, bgColor: "bg-gray-100" },
  { title: "UI/UX Design", icon: <FaPencilRuler />, bgColor: "bg-gray-100" }, 
  { title: "Website Migration", icon: <FaServer />, bgColor: "bg-gray-100" },
  { title: "App Development", icon: <FaMobileAlt />, bgColor: "bg-gray-100" },
  { title: "HubSpot Integration", icon: <FaProjectDiagram />, bgColor: "bg-gray-100" },
  { title: "Email Marketing", icon: <FaEnvelopeOpenText />, bgColor: "bg-gray-100" },
];

const leaders = [
  { name: "Larry F. Burnett", role: "CEO", image: "/member1.jpg" },
  { name: "Meghan J. Webb", role: "CTO", image: "/member2.jpg" },
  { name: "Yvonne J. Cullum", role: "CFO", image: "/member3.jpeg" },
  { name: "Diana H. Williams", role: "COO", image: "/member4.jpg" },
];

const testimonials = [
  {
    name: "Samuel Karl",
    role: "CEO",
    image: "/member1.jpg",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Daria Linney",
    role: "CEO",
    image: "/member2.jpg",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/member3.jpeg",
    feedback: "The quality of work exceeded our expectations. Will work again!",
  },
  {
    name: "Anna Smith",
    role: "Product Manager",
    image: "/member4.jpg",
    feedback: "Their customer service and attention to detail were outstanding.",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/member3.jpeg",
    feedback: "The quality of work exceeded our expectations. Will work again!",
  },
  
];

const Index = () => {
  return (
    <div className="mt-10 bg-white">
      {/* Our Expertise Section */}
      <section className="px-6 py-10 bg-white md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold text-orange-500">Services</p>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Our Expertise</h2>

          <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className={`p-6 text-center rounded-lg shadow-lg transition-all duration-300 ${service.bgColor} hover:bg-orange-200`}>
                <div className="mx-auto text-5xl text-orange-500">{service.icon}</div> {/* Icon */}
                <h3 className="mt-4 text-lg font-bold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders Section */}
      <section className="px-6 py-20 bg-gray-100 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <p className="text-xl font-semibold text-orange-500">Team</p>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Our Leaders</h2>

          <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-4">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <Image src={leader.image} alt={leader.name} width={200} height={200} className="mx-auto rounded-lg" />
                <h3 className="mt-4 text-lg font-bold text-orange-500">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-white md:px-12 lg:px-24">
  <div className="container mx-auto text-center">
    <p className="text-xl font-semibold text-orange-500">From our Customers</p>
    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Testimonials</h2>

    {/* ✅ Corrected Swiper Position */}
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2,
        slideShadows: false,
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, EffectCoverflow]}
      className="max-w-5xl mx-auto mt-10 custom-swiper"
    >
      {/* ✅ Move map() inside Swiper to avoid JSX errors */}
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="max-w-2xl">
          <div className="p-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 border-2 border-orange-500 rounded-full"
              />
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-lg text-gray-600">{testimonial.feedback}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    
    </div>
  );
};

export default Index;
