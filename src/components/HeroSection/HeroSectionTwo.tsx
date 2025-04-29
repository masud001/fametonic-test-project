"use client";

import React from "react";
import FeaturesList from "./FeaturesList";
import FooterNote from "./FooterNote";
import Image from "next/image";
import CallToAction from "./CallToAction";
import FallbackUI from "./FallbackUI"; 
import {useHeroContext} from "@/context/HeroContext";


const HeroSection: React.FC<{className?:string}> = ({ className }) => {
  const { heroData, loading, error } = useHeroContext();
  if (loading) {
    return <FallbackUI message="Loading..." className={className} />;
  }
  if (error || !heroData) {
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
            className="text-[35px] leading-[42px] font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px] text-text font-urbanist"
          >
            {heroData.heading}
          </h1>
          <h2
            role="heading"
            aria-level={1}
            className="text-[35px] leading-[42px] font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px] text-shadow-[0_4px_2px_#fc004e] text-secondary font-urbanist"
            aria-describedby="hero-subheading"
          >
            {heroData.subheading}
          </h2>

          <FeaturesList features={heroData.features} />
          <div className="flex flex-col-reverse lg:flex-col gap-y-[30px]">
            <CallToAction text={heroData.ctaText} description={heroData.ctaDescription} />
            <FooterNote />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-1 flex justify-center lg:justify-end">
          <Image
            src={heroData.imageSrc}
            alt={heroData.imageAlt}
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