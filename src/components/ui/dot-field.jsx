import React, { useEffect, useRef } from "react";

export function DotField({
  dotColor = "#2563eb",
  dotSize = 1.5,
  gap = 24,
  hoverRadius = 120,
  hoverStrength = 8,
  baseOpacity = 0.35,
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    if (canvas.parentElement) {
      canvas.parentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / gap) + 1;
      const rows = Math.ceil(canvas.height / gap) + 1;
      const { x: mx, y: my, active: mouseActive } = mouseRef.current;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * gap;
          const baseY = j * gap;

          let drawX = baseX;
          let drawY = baseY;
          let currentSize = dotSize;
          let currentOpacity = baseOpacity;

          // Interactive Mouse Cursor Hover Effect (Subtle & Refined Protrusion)
          if (mouseActive) {
            const dx = drawX - mx;
            const dy = drawY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < hoverRadius && dist > 0) {
              const factor = 1 - dist / hoverRadius;
              // Subtle push displacement
              const angle = Math.atan2(dy, dx);
              const push = factor * hoverStrength;
              drawX += Math.cos(angle) * push;
              drawY += Math.sin(angle) * push;

              // Gentle size growth and clear opacity boost near cursor
              currentSize += factor * 0.9;
              currentOpacity = Math.min(0.85, baseOpacity + factor * 0.5);
            }
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.globalAlpha = currentOpacity;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, dotSize, gap, hoverRadius, hoverStrength, baseOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
