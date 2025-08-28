"use client";

import React from "react";

const VideoSection = () => {
  return (
    <section className="px-6 py-14 md:px-12 lg:px-24">
    <div
      className="max-w-4xl p-10 mx-auto text-center bg-center bg-cover rounded-lg"
      style={{ backgroundImage: "url('/home4.jpg')" }} 
    >
      {/* Overlay for better readability */}
      <div className="bg-opacity-50 rounded-lg p-9">
        <p className="text-3xl font-semibold text-white">
          “Some of the History of Our Company is that<br /> we are Catching up through Video”
        </p>
        <button className="px-6 py-3 mt-6 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
          Get In Touch
        </button>
      </div>
    </div>
  </section>
  );
};

export default VideoSection;
