"use client";

import Image from "next/image";

export default function Support() {
  return (
    <section id="contact" className="scroll-mt-[68px] relative">
      <div className="max-w-[1104px] mx-auto py-10 px-4 sm:px-8 xl:px-0">
        <div className="relative z-10 overflow-hidden rounded-[30px] bg-gray-900 py-24 px-4 sm:px-20 lg:px-[110px]">
          {/* Stars */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-10 -top-32 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          {/* Section Title */}
          <div className="mb-16 text-center relative z-10">
            <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
              Need Any Help?
            </p>

            <h2 className="text-white my-4 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
              Contact With Us
            </h2>
            <p className="max-w-[714px] mx-auto font-medium text-gray-300">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>

          {/* Support Form */}
          <div className="relative overflow-hidden rounded-[25px] bg-gray-800 p-6 sm:p-8 xl:p-12">
            <form className="relative z-10">
              <div className="-mx-4 xl:-mx-10 flex flex-wrap">
                {/* Name */}
                <div className="w-full px-4 xl:px-5 md:w-1/2 mb-6 md:mb-0">
                  <label
                    htmlFor="name"
                    className="text-white mb-2 block font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full py-3 px-6 rounded-lg border border-white/10 bg-white/5 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Email */}
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <label
                    htmlFor="email"
                    className="text-white mb-2 block font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full py-3 px-6 rounded-lg border border-white/10 bg-white/5 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Message */}
                <div className="w-full px-4 xl:px-5 mt-6">
                  <label
                    htmlFor="message"
                    className="text-white mb-2 block font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message"
                    rows={6}
                    className="w-full py-5 px-6 rounded-lg border border-white/10 bg-white/5 outline-none focus:border-purple-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full px-4 xl:px-5 mt-6">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex rounded-lg py-3 px-7 text-white font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-80 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
