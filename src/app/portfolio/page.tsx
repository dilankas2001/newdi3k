"use client";

import { useState } from "react";
import Image from "next/image";
import VideoSection from "@/components/layout/VideoSection";

const portfolioItems = [
  { id: 1, category: "All", image: "/portfolio1.jpg" },
  { id: 2, category: "All", image: "/portfolio2.jpg" },
  { id: 3, category: "All", image: "/portfolio3.png" },
  { id: 4, category: "All", image: "/portfolio4.jpg" },
  { id: 5, category: "All", image: "/portfolio5.jpg" },
];

const categories = ["All", "Life", "Moments", "Nature", "Stories", "Travel"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered portfolio items
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
    <div>
    {/* Hero Section */}
    <section className="px-6 py-16 mt-20 text-center bg-black md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-orange-500">Portfolio</h1>
    </section>

    <section className="px-6 py-20 bg-white md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold text-orange-500"> \ Portfolio \ </p>
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Our Work</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
  {/* First Row - Two Images */}
  <div className="md:col-span-1">
    <Image
      src={filteredItems[0].image}
      alt="Portfolio Image 1"
      width={600}
      height={400}
      className="object-cover w-full h-auto rounded-lg shadow-lg"
    />
  </div>
  <div className="md:col-span-1">
    <Image
      src={filteredItems[1].image}
      alt="Portfolio Image 2"
      width={600}
      height={400}
      className="object-cover w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Second Row - Three Images */}
  <div className="md:col-span-1">
    <Image
      src={filteredItems[2].image}
      alt="Portfolio Image 3"
      width={400}
      height={300}
      className="object-cover w-full h-auto rounded-lg shadow-lg"
    />
  </div>
  <div className="md:col-span-1">
    <Image
      src={filteredItems[3].image}
      alt="Portfolio Image 4"
      width={400}
      height={300}
      className="object-cover w-full h-auto rounded-lg shadow-lg"
    />
  </div>
  <div className="md:col-span-1">
    <Image
      src={filteredItems[4].image}
      alt="Portfolio Image 5"
      width={400}
      height={300}
      className="object-cover w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</div>
     </div>
    </section>

    <VideoSection />
    </div>
    </>
  );
};

export default Portfolio;
