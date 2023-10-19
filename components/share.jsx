"use client";

import "./share.css";

import { useState } from "react";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  const handleFbShare = () => {
    window.open(
      this.href,
      "targetWindow",
      "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250"
    );
    return false;
  };

  return <div>SHARE</div>;
}
