import React from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/Icons";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

const FooterIndex = () => {
  return (
    <footer className="rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        H12 Egzersizleri | Güncellemeler | Rehberlik
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.social[0]}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.social[1]}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.social[2]}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className=" my-4">
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
      </div>

      <div className="w-full  mt-4 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 H12 Egzersizleri. Tüm hakları saklıdır.
        </span>
        <div className="text-center">
          <span className=" text-red-700">&hearts;</span> by{" "}
          <a href="#" className="underline" target="_blank">
            rcteenx
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterIndex;
