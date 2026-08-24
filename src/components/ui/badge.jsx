import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-blue-100 text-blue-700 border-blue-200",
    secondary: "bg-gray-100 text-gray-800 border-gray-200",
    outline: "text-gray-700 border-gray-300",
    primary: "bg-blue-600 text-white border-transparent",
    accent: "bg-cyan-50 text-cyan-700 border-cyan-200 font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
