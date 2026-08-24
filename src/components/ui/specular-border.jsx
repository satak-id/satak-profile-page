import React from "react";

export function SpecularBorder({
  color = "#2563eb",
  duration = 4,
  borderWidth = 2,
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-3xl overflow-hidden ${className}`}
      style={{ padding: `${borderWidth}px` }}
    >
      {/* Animated Specular Conic Light Beam Line */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]">
        <div
          className="w-full h-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 300deg, ${color} 340deg, #60a5fa 360deg)`,
          }}
        />
      </div>

      {/* Inner Mask to create precise specular border line */}
      <div className="w-full h-full bg-white rounded-[22px]" />
    </div>
  );
}
