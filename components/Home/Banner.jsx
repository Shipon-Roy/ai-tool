import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="w-full flex justify-center items-center pt-32 pb-20 px-4 text-white relative bg-[#060317] overflow-hidden">
      <div className="max-w-3xl text-center space-y-6 relative z-20">
        <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
          🚀 Your Ultimate Creative Companion!
        </p>

        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Elevate Your Content with Our AI-Powered Writing Tool
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Highly customizable Tailwind CSS template for AI tools, startups,
          product landing pages, and SaaS platforms — includes reusable
          sections, components, pages, and more for rapid customization.
        </p>

        <button className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 font-medium transition duration-300">
          Start Your Free Trial
        </button>

        {/* Hero Image */}
        <div className="mt-10 relative flex justify-center">
          <Image
            src="/assets/hero.svg"
            width={800}
            height={500}
            alt="Hero Illustration"
            className="drop-shadow-lg"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#060317]"></div>
        </div>
      </div>

      {/* Optional overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#060317] z-10"></div>
    </section>
  );
}
