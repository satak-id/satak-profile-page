import React, { useState, useEffect } from "react";

export function TextType({
  text,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 1000,
  loop = true,
  className = "",
  showCursor = true,
  cursorClassName = "w-[3px] h-[0.8em] bg-blue-600 rounded-full inline-block ml-1 align-baseline animate-pulse",
}) {
  const textArray = Array.isArray(text) ? text : [text];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullText = textArray[currentTextIndex] || "";

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        if (loop || currentTextIndex < textArray.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, textArray, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={`inline-inline flex items-baseline relative whitespace-pre ${className}`}>
      <span>{displayedText || "\u00A0"}</span>
      {showCursor && <span className={cursorClassName} />}
    </span>
  );
}
