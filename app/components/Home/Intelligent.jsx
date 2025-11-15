import Image from "next/image";
import React from "react";

export default function Intelligent() {
  return (
    <section className="px-32 py-20">
      {/* Hero Section */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Area */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
            🚀 Your Ultimate Creative Companion!
          </p>

          <h1
            className="text-3xl sm:text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
            bg-clip-text text-transparent"
          >
            Elevate Your Content with Our AI-Powered Writing Tool
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Highly customizable Tailwind CSS template for AI tools, startups,
            product landing pages, and SaaS platforms — includes reusable
            sections, components, pages, and more for rapid customization.
          </p>

          <button
            className="mt-4 px-7 py-3 rounded-lg 
            bg-gradient-to-r from-pink-600 to-purple-600 
            hover:scale-105 transition font-medium shadow-md"
          >
            Start Your Free Trial
          </button>
        </div>

        {/* Image Area */}
        <div className="flex justify-center">
          <Image
            src="/assets/big-icon.svg"
            alt="AI Tool Icon"
            width={350}
            height={350}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Feature Card 1 */}
        <div className=" p-5 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10">
          <Image
            src="/assets/feature/icon-05.svg"
            alt="Feature Icon"
            width={60}
            height={60}
          />
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-white">
              Empowering Writing Excellence
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process...
            </p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className=" p-5 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10">
          <Image
            src="/assets/feature/icon-03.svg"
            alt="Feature Icon"
            width={60}
            height={60}
          />
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-white">
              Grammar and Spell Check
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Our AI writing tool strengthens accuracy and saves editing time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
