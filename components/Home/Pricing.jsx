import Image from "next/image";
import Link from "next/link";
import React from "react";

const pricings = [
  {
    title: "Starter",
    price: "$10",
    icon: "/assets/pricing/pricing-icon-01.svg",
  },
  {
    title: "Medium",
    price: "$59",
    icon: "/assets/pricing/pricing-icon-02.svg",
  },
  {
    title: "Business",
    price: "$289",
    icon: "/assets/pricing/pricing-icon-03.svg",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-0 overflow-hidden pt-16 scroll-mt-20"
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* Background Circles */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 overflow-hidden -my-56 pointer-events-none">
            {["blur-13", "blur-14", "blur-15"].map((img, i) => (
              <div key={i} className="absolute left-1/2 -translate-x-1/2 top-0">
                <Image
                  src={`/images/${img}.svg`}
                  alt="blur"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>

          <div className="max-w-[830px] w-full h-[830px] rounded-full bg-gray-900 absolute left-1/2 -translate-x-1/2 top-0"></div>

          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -top-28 left-1/2 -translate-x-1/2 -z-1">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-16 mt-24 text-center z-10 relative">
          <span className="bg-gradient-to-r from-pink-500 to-gray-500 inline-flex items-center gap-2 py-2 px-4 rounded-full font-medium text-sm text-white mb-4">
            Get access
          </span>
          <h2 className="text-white mb-4 text-2xl sm:text-4xl xl:text-[42px] font-extrabold">
            Our Pricing Plan
          </h2>
          <p className="max-w-[714px] mx-auto font-medium text-gray-300">
            Our AI writing tool empowers you with exceptional writing
            capabilities, making your workflow efficient, accurate, and
            enjoyable.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricings.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-gray-800 relative z-20 overflow-hidden pt-12 pb-10 px-8 xl:px-10 hover:bg-gray-700 transition"
            >
              <span className="absolute right-9 top-9">
                <Image src={item.icon} alt="icon" width={40} height={40} />
              </span>

              <h3 className="font-semibold text-xl text-white mb-5">
                {item.title}
              </h3>

              <div className="flex items-center gap-3.5">
                <h2 className="font-bold text-4xl bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                  {item.price}
                </h2>
                <p className="font-medium">
                  /month <br />
                  (billed annually)
                </p>
              </div>

              <div className="my-8 w-full h-[1px] bg-gradient-to-r from-pink-500 to-gray-500"></div>

              <ul className="flex flex-col gap-4 text-gray-300">
                {[
                  "Subscription with levels",
                  "Advanced features included",
                  "Shared workspaces & tools",
                  "Premium versions functionality",
                  "Customizing the outputs",
                  "Priority customer support",
                ].map((list, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span>✅</span>
                    <span className="font-medium">{list}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="mt-8 flex items-center justify-center gap-2 font-medium text-white p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 hover:scale-105 transition"
              >
                Get the plan
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path
                    d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                    fill="white"
                  />
                </svg>
              </Link>

              <p className="mt-4 text-sm text-center text-gray-300">
                No extra hidden charge
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
