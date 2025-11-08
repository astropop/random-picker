"use client";

import { useCallback, useRef } from "react";

interface UseColorToggleCounterOptions {
  toggleColor?: string;
  getButtonText?: (count: number) => string;
}

export function useColorToggleCounter(options: UseColorToggleCounterOptions) {
  const {
    toggleColor = "#1e90ff",
    getButtonText = (count) => `Đã click ${count} lần`,
  } = options; // default

  const buttonRef = useRef<HTMLButtonElement>(null);
  const countRef = useRef(0);

  const handleClick = useCallback(() => {
    if (buttonRef.current) {
      // Tăng số lần click
      countRef.current += 1;

      // Thay đổi màu nền
      if (buttonRef.current) {
        buttonRef.current.style.backgroundColor = toggleColor;
      }

      // Update text content với custom formatter
      buttonRef.current.textContent = getButtonText(countRef.current);
    }
  }, [toggleColor, getButtonText]);

  return { buttonRef, count: countRef.current, handleClick };
}
