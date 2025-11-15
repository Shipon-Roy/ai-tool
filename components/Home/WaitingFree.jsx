"use client";

import Image from "next/image";

export default function WaitingFree() {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className=" bg-gray-900 rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 ">
          {/* Stars */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -bottom-25 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          {/* CTA Content */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
              Try our tool for Free
            </p>
            <h2 className="text-white my-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
              What are you waiting for?
            </h2>
            <p className="max-w-[714px] mx-auto font-medium mb-9 text-gray-300">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
            <button
              type="submit"
              className="inline-flex rounded-lg py-3 px-7 text-white font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-80 transition duration-300"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
