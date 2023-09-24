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

  return (
    <div>
      <button
        onClick={handleClick}
        className="border px-2 py-1 rounded text-slate-500 text-sm
                 hover:bg-orange-100 hover:text-slate-700"
      >
        {clicked ? "Link copied!" : "Share link"}
      </button>
      <i className="bi bi-facebook">12</i>
    </div>
  );
}
