import React, { useRef, useState } from "react";

export function TiltedCard({
  children,
  rotateAmplitude = 14,
  scaleOnHover = 1.04,
  showGlare = true,
  className = "",
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse position (-1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const px = (mouseX / width - 0.5) * 2;
    const py = (mouseY / height - 0.5) * 2;

    // Calculate 3D tilt rotation
    const rX = -py * rotateAmplitude;
    const rY = px * rotateAmplitude;

    setRotateX(rX);
    setRotateY(rY);
    setScale(scaleOnHover);

    if (showGlare) {
      setGlarePos({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.25,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    if (showGlare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
      }}
    >
      {/* Card Content Outer Container */}
      <div className="relative w-full h-full rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {children}

        {/* 3D Glare / Light Reflection Effect */}
        {showGlare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)`,
              opacity: glarePos.opacity,
            }}
          />
        )}
      </div>
    </div>
  );
}
