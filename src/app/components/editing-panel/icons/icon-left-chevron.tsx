"use client";

import React from "react";

function IconLeftChevron({ size }: { size: number }) {
  return (
    <svg
      className={`text-(--foreground-primary) fill-(--foreground-primary)`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
      />
    </svg>
  );
}

export default IconLeftChevron;
