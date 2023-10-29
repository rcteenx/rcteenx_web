"use client";
import { useState } from "react";

import { contHero, statistics } from "@/content/data/constants";
import { info, arrowRight } from "@/public/assets/icons";

import Button from "../ui/Button";

import { bigImg1 } from "@/public/assets/images";

const Hero = () => {
  const [bigImg, setBigImg] = useState(bigImg1);

  return (
    <section
      id="hero"
      className="container-p mt-16 md:mt-24 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2">
        <p className="my-8 lg:my-8 text-xs md:text-lg font-montserrat text-coral-red">
          {contHero.coral1}
          <br />
          {contHero.coral2}
        </p>
        <h1 className="font-palanquin text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-50 pr-12">
            {contHero.fline}
          </span>
          <br />
          <span className="text-coral-red inline-block xl:my-4">
            {contHero.span}
          </span>
          <br />
          {contHero.sline}
        </h1>
        <p className="my-8 text-xs md:text-lg font-montserrat text-slate-gray leading-4 ">
          {contHero.desc}. <sup>*</sup>
        </p>
        <div className="flex flex-row space-x-4">
          <a href="#" className="btn-hero bg-coral-red text-white">
            {contHero.btn1}
            <img
              src={arrowRight.src}
              alt="arrow right icon"
              className="ml-2 rounded-full bg-white w-8 h-8"
            />
          </a>
          <a href="#" className="btn-hero bg-white text-black">
            {contHero.btn2}
            <img
              src={info.src}
              alt="arrow right icon"
              className="ml-2 rounded-full bg-white w-8 h-8"
            />
          </a>
        </div>

        <div className="flex justify-start items-start flex-wrap w-full my-12 gap-8 md:gap-16">
          {statistics.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* hidden xl:flex  bg-hero */}
      <div className="xl:w-1/2 flex flex-col justify-end items-center border bg-[url('/assets/images/ziyaretci.png')] bg-cover relative rounded-2xl">
        <img
          src={bigImg.src}
          alt="img colletion"
          width={480}
          height={400}
          className="px-4 md:border border-b-0 bg-white/10 border-black/20"
        />
        <p className="px-4 md:px-8 m-0 py-2 mb-10 text-center bg-white/20 w-full border-black border-y">
          Ziyaretçilerinizin yüzde kaçı sizinle temas kuruyor ve müşteriniz
          oluyor?
        </p>

        {/* <blockquote className="px-4 md:px-8 py-2 my-10 text-center bg-white/20">
          "Dijital dünyada, doğru kararlar yoktur. Yanlış kararlar ve daha
          yanlış kararlar vardır!"
        </blockquote> */}
        {/* <div className="px-4 md:px-8 py-2 my-10 bg-white/20 w-full">
          <h2>Mini Araştırma</h2>
          <ul>
            <li className=" text-2xl">
              "Sitenize günde kaç ziyaretçi geliyor?"
            </li>
            <li>Bunların kaçı sizinle temas kuruyor?</li>
            <li>Kaçı, para kazandıran müşteriye dönüyor?</li>
          </ul>
        </div> */}

        {/* <div className="flex justify-around gap-2 sm:gap-6">
          {imgs.map((image, index) => (
            <ImgCard
              key={index}
              index={index}
              imgURL={image}
              changeBigImgImage={(img) => setBigImg(img)}
              bigImg={bigImg}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
