import Image from "next/image";
import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import Intelligent from "../components/Home/Intelligent";
import Pricing from "../components/Home/Pricing";
import Reviews from "../components/Home/Reviews";
import BrandSlider from "../components/Home/BrandSlider";
import Support from "../components/Home/Support";
import Blogs from "../components/Home/Blogs";
import WaitingFree from "../components/Home/WaitingFree";
import NewsletterSection from "../components/Home/NewsletterSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Intelligent />
      <Pricing />
      <Reviews />
      <BrandSlider />
      <Support />
      <Blogs />
      <WaitingFree />
      <NewsletterSection />
    </>
  );
}
