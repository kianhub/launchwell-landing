import React from "react";
import { Button } from "./ui/button";

interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const HeroButton: React.FC<HeroButtonProps> = ({
  text = "Join the Waitlist",
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={
        `relative w-[180px] h-12 rounded-xl bg-[#E50914] text-white font-inter font-bold text-base leading-[19px] ` +
        `shadow-[0px_3px_4px_rgba(0,0,0,0.25),_inset_0px_2px_4px_rgba(255,255,255,0.25)] hover:bg-[#E50914]/90` +
        (props.className || "")
      }
      style={{ position: "relative", ...props.style }}
    >
      <span className="absolute left-[15%] right-[14.44%] top-[29.17%] bottom-[31.25%] w-auto h-auto">
        {text || children}
      </span>
    </Button>
  );
};
