"use client";

import { G, Path, Svg } from "@react-pdf/renderer";

export default function IconMail({ size }: { size: number }) {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill="none">
      <G strokeWidth="0"></G>
      <G strokeLinecap="round" strokeLinejoin="round"></G>
      <G>
        <Path
          fillRule="evenodd"
          d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z"
          fill="#000000"
        ></Path>
      </G>
    </Svg>
  );
}
