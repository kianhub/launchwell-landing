"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export function ScrollToWaitlistButton({
  children = "Put me on the List",
  text,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { text?: string }) {
  return (
    <Button
      className={"w-36 max-w-2xl rounded-xl " + className}
      id="scrollUp"
      onClick={() => {
        const el = document.getElementById("waitlist-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      {...props}
    >
      {text || children}
    </Button>
  );
}
