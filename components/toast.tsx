"use client";
import { toast as sonnerToast } from "sonner";

export function toast(message: string, type: "success" | "error" = "success") {
  sonnerToast(message, {
    style: {
      background: type === "success" ? "#22c55e" : "#ef4444",
      color: "white",
      fontWeight: "bold",
    },
    duration: 4000,
  });
}
