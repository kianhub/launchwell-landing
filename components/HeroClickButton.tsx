"use client";
import React from "react";
import { Button } from "./ui/button";

interface HeroClickButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const HeroClickButton: React.FC<HeroClickButtonProps> = ({
  text = "Join the Waitlist",
  id,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      id={id}
      onClick={() => {
        const el = document.getElementById("waitlist-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className={
        `relative w-[180px] h-12 rounded-xl bg-[#E50914] text-base text-white font-bold leading-[19px] ` +
        `shadow-[0px_3px_4px_rgba(0,0,0,0.25),_inset_0px_2px_4px_rgba(255,255,255,0.25)] hover:bg-[#E50914]/90 active:shadow-2xs` +
        (props.className || "")
      }
      style={{ position: "relative", ...props.style }}
    >
      <span className="left-[15%] right-[15%] top-[30%] bottom-[30%]">
        {text || children}
      </span>
    </Button>
  );
};
