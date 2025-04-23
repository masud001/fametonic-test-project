"use client";

import React from "react";
import FeaturesList from "./FeaturesList";
import FooterNote from "./FooterNote";
import Image from "next/image";
import CallToAction from "./CallToAction";
import FallbackUI from "./FallbackUI"; 

type HeroData = {
  heading: string;
  subheading: string;
  features: string[];
  ctaText: string;
  ctaDescription: string;
  imageSrc: string;
  imageAlt: string;
};

type HeroSectionProps = {
  data: HeroData | null; 
  className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ data, className }) => {
  if (!data) {
    return <FallbackUI message="Oops! Unable to load hero data." className={className} />;
  }

  return (
    <section
      className={`w-full flex flex-row justify-center items-center max-w-md:pt-5 md:py-[57px] ${className || ""}`}
      aria-labelledby="hero-heading"
    >
      <div className="container max-w-[992px] flex flex-col-reverse md:flex-row justify-between items-center px-5 lg:px-0 pb-20 lg:pb-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-start flex-1 mb-8 lg:mb-0 md:z-10">
          <h1
            id="hero-heading"
            className="text-[35px] leading-[42px] font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px] text-white font-urbanist"
          >
            {data.heading}
          </h1>
          <h2
            role="heading"
            aria-level={1}
            className="text-[35px] leading-[42px] font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px] text-shadow-[0_4px_2px_#fc004e] text-[#00E7F9] font-urbanist"
            aria-describedby="hero-subheading"
          >
            {data.subheading}
          </h2>

          <FeaturesList features={data.features} />
          <div className="flex flex-col-reverse lg:flex-col gap-y-[30px]">
            <CallToAction text={data.ctaText} description={data.ctaDescription} />
            <FooterNote />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-1 flex justify-center lg:justify-end">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            loading="lazy"
            width={666}
            height={679}
            className="max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg xl:scale-116"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;