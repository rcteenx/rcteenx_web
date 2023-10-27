import React from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/ui/Icons";

const Social = () => {
  return (
    <div className=" hidden sm:flex items-center">
      <a
        href="#"
        className="inline-block w-6 h-6 mr-4"
        aria-label="Reach out to me via LinkedIn"
        target="_blank"
      >
        <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href="#"
        className="inline-block w-6 h-6 mr-4"
        aria-label="Reach out to me via Twitter"
        target="_blank"
      >
        <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href="#"
        className="inline-block w-6 h-6 mr-4"
        aria-label="Check my profile on Github"
        target="_blank"
      >
        <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
      </a>
      <a
        href="#"
        className="inline-block w-6 h-6 mr-4"
        aria-label="Check my profile on Dribbble"
        target="_blank"
      >
        <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
    </div>
  );
};

export default Social;
