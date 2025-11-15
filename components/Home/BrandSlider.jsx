"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliders = [
  {
    image: "/assets/slider/client-01.svg",
  },
  {
    image: "/assets/slider/client-02.svg",
  },
  {
    image: "/assets/slider/client-03.svg",
  },
  {
    image: "/assets/slider/client-04.svg",
  },
  {
    image: "/assets/slider/client-05.svg",
  },
  {
    image: "/assets/slider/client-06.svg",
  },
  {
    image: "/assets/slider/client-07.svg",
  },
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function BrandSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0, // Start immediately
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Keeps scrolling even on hover
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" mx-auto bg-gray-900 p-3">
        <Slider {...settings}>
          {/* Slide 1 */}
          {sliders.map((s, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-[100px] h-[100px]">
                <Image
                  src={s.image}
                  alt="Client image"
                  width={10}
                  height={5}
                  className=" w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
