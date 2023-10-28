"use client";
import { useState } from "react";

import { contHero, statistics, imgs } from "@/content/data/constants";

import Button from "../ui/Button";
import ImgCard from "../ui/ImgCard";

import { bigImg1 } from "@/public/assets/images";

const Hero = () => {
  const [bigImg, setBigImg] = useState(bigImg1);

  return (
    <section
      id="home"
      className="xl:padding-l mt-16 wide:padding-r padding-b w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full mt-10 max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">
          {contHero.coral}
        </p>
        <h1 className="mt-8 font-palanquin text-3xl sm:text-4xl md:text-8xl font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-50 pr-10">
            {contHero.fline}
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            {contHero.span}
          </span>{" "}
          {contHero.sline}
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          {contHero.desc}. <sup>*</sup>
        </p>
        <Button label="ßirlikte Yapalım" iconURL="/assets/arrow-right.svg" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-8 md:gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* hidden xl:flex */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigImg.src}
          alt="img colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {imgs.map((image, index) => (
            <ImgCard
              key={index}
              index={index}
              imgURL={image}
              changeBigImgImage={(img) => setBigImg(img)}
              bigImg={bigImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
