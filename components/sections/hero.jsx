"use client";
import { useState } from "react";

import { statistics, shoes } from "@/content/data/constants";

import Button from "../ui/Button";
import ShoeCard from "../ui/ShoeCard";

import { bigShoe1 } from "@/public/assets/images";
import { arrowRight } from "@/public/assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="xl:padding-l -mt-2 wide:padding-r padding-b w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">
          Akılcı Tasarım Konsepti
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Çalışan</span> Site
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Teklif Al" iconURL="/assets/arrow-right.svg" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
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
          src={bigShoeImg.src}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <ShoeCard
              key={index}
              index={index}
              imgURL={image}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
