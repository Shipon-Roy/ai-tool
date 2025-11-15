import Image from "next/image";
import React from "react";

const reviews = [
  {
    author: {
      name: "Machel Pildium",
      title: "@machel",
    },
    img: "/assets/reviews/user-01.png",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    author: {
      name: "Jane Doe",
      title: "@janedoe",
    },
    img: "/assets/reviews/user-02.png",
    descriptions:
      "This AI tool has transformed the way I write. Highly recommended for content creators.",
  },
  {
    author: {
      name: "Machel Pildium",
      title: "@machel",
    },
    img: "/assets/reviews/user-01.png",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    author: {
      name: "Jane Doe",
      title: "@janedoe",
    },
    img: "/assets/reviews/user-02.png",
    descriptions:
      "This AI tool has transformed the way I write. Highly recommended for content creators.",
  },
  {
    author: {
      name: "Machel Pildium",
      title: "@machel",
    },
    img: "/assets/reviews/user-01.png",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    author: {
      name: "Jane Doe",
      title: "@janedoe",
    },
    img: "/assets/reviews/user-02.png",
    descriptions:
      "This AI tool has transformed the way I write. Highly recommended for content creators.",
  },
  {
    author: {
      name: "Machel Pildium",
      title: "@machel",
    },
    img: "/assets/reviews/user-01.png",
    descriptions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    author: {
      name: "Jane Doe",
      title: "@janedoe",
    },
    img: "/assets/reviews/user-02.png",
    descriptions:
      "This AI tool has transformed the way I write. Highly recommended for content creators.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4  text-white">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
          Wall of Love
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold">
          What Our Users Say
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="bg-gray-800 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center"
          >
            <Image
              src={r.img}
              alt={r.author.name}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <div className="mb-4">
              <h5 className="font-semibold text-lg">{r.author.name}</h5>
              <p className="text-gray-400 text-sm">{r.author.title}</p>
            </div>
            <p className="text-gray-300 text-sm">{r.descriptions}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
