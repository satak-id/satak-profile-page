import React, { useEffect, useRef, useState } from "react";

export function TrueFocus({
  sentence = "Konek Terus",
  manualMode = false,
  blurAmount = 4,
  borderColor = "#2563eb",
  glowColor = "rgba(37, 99, 235, 0.35)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.2,
  className = "",
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (manualMode) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, words.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, sentence]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center flex-wrap gap-x-3 gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => manualMode && setCurrentIndex(index)}
            className="relative cursor-pointer select-none font-extrabold tracking-tight transition-all duration-300"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.45,
            }}
          >
            {word}
          </span>
        );
      })}

      {/* Focus Box Border Animation Overlay */}
      <div
        className="absolute pointer-events-none rounded-lg border-2 transition-all duration-500 ease-out"
        style={{
          transform: `translate3d(${focusRect.x}px, ${focusRect.y}px, 0)`,
          width: `${focusRect.width}px`,
          height: `${focusRect.height}px`,
          borderColor: borderColor,
          boxShadow: `0 0 16px ${glowColor}, inset 0 0 8px ${glowColor}`,
        }}
      >
        {/* Corner Accents */}
        <span
          className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2"
          style={{ borderColor: borderColor }}
        />
        <span
          className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2"
          style={{ borderColor: borderColor }}
        />
      </div>
    </div>
  );
}
