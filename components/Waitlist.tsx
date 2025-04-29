"use client";
import React, { useState } from "react";
import { HeroButton } from "./HeroButton";
import { Input } from "./ui/input";
import { createSubscriber } from "@/app/octopusSubmit";
import { toast } from "./toast";
import { Toaster } from "sonner";

export default function Waitlist() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const res = await createSubscriber(email);
    setLoading(false);
    if (res && res.status === "subscribed") {
      setSuccess(true);
      toast(res.message || "Successfully joined the waitlist!", "success");
    } else {
      toast(
        (res && res.detail && res.detail == "List contact already exists."
          ? "You're on the waitlist."
          : res.detail) || "Failed to join the waitlist. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-4">
      <Toaster />
      <div className="relative">
        <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="start@launchwell.ai"
            className="h-12 rounded-xl bg-warm-white border-slate-black text-[#121212] placeholder:text-[#121212]]/80 focus-visible:ring-[#E50914]"
            required
          />
          <HeroButton
            type="submit"
            text={
              loading ? "Joining..." : success ? "Joined!" : "Join the Waitlist"
            }
            style={{
              background: success ? "#22c55e" : "#E50914",
              transition: "background 0.3s",
            }}
            disabled={loading}
          />
        </form>
      </div>
      <p className="text-sm text-[#121212]/60">
        Join founders who are building what others only dream about.
      </p>
    </div>
  );
}
