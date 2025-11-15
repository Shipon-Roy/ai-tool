import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/assets/feature/icon-01.svg",
    title: "Intelligent Writing Assistance",
    descriptions:
      "Our AI writing tool analyzes your content and suggests improvements.",
  },
  {
    icon: "/assets/feature/icon-02.svg",
    title: "Grammar and Spell Check",
    descriptions: "Say goodbye to embarrassing typos and grammar mistakes.",
  },
  {
    icon: "/assets/feature/icon-03.svg",
    title: "Plagiarism Detection",
    descriptions:
      "Ensure originality and maintain high-quality content integrity.",
  },
  {
    icon: "/assets/feature/icon-04.svg",
    title: "Voice to Text Conversion",
    descriptions:
      "Transform your spoken words into written text easily and accurately.",
  },
  {
    icon: "/assets/feature/icon-05.svg",
    title: "Style and Tone Adaptation",
    descriptions:
      "Tailor your tone — professional, friendly, casual, persuasive and more.",
  },
  {
    icon: "/assets/feature/icon-06.svg",
    title: "Content Generation",
    descriptions:
      "Get creative ideas, outlines, headlines and complete article drafts.",
  },
];

export default function Features() {
  return (
    <section className="w-full flex justify-center items-center pt-32 pb-20 px-4 text-white">
      <div className="max-w-6xl text-center space-y-6">
        {/* Header */}
        <p className="text-sm sm:text-base text-gray-300 bg-gray-700 rounded-2xl py-2 px-4 tracking-wide inline-block">
          🚀 Some of Main Features
        </p>

        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Key Features of Our Tool
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          Our AI writing tool is built to enhance your workflow, helping you
          write smarter, faster, and more creatively with powerful automation
          and intelligent suggestions.
        </p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-pink-500/50 hover:scale-[1.02] transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.descriptions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
