"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export function ScrollToWaitlistButton({
  children = "Put me on the List",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={"w-36 max-w-2xl " + className}
      id="scrollUp"
      onClick={() => {
        const el = document.getElementById("waitlist-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
