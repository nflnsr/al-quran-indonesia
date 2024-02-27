import { ReactNode } from "react";

export function CircleAyah({
  children,
  className,
  fontPositionX,
  fontPositionY,
}: {
  children?: ReactNode;
  className?: string;
  fontPositionX?: string;
  fontPositionY?: string;
}) {
  return (
    <svg
      className={className}
      width="97"
      height="116"
      viewBox="0 0 97 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // fontSize={`${String(surah.id).length > 2 ? 30 : 33}`}
    >
      <path
        d="M88 58C88 79.5391 70.5391 97 49 97C27.4609 97 10 79.5391 10 58C10 36.4609 27.4609 19 49 19C70.5391 19 88 36.4609 88 58Z"
        stroke="#797777"
        strokeWidth="2"
      />
      <path
        d="M4 51L13.5 42.5L16.5 51L29 29L50.5 23.5L69.5 29L81.5 51L85.5 42.5L93.5 51L81.5 23.5L50.5 5.5L16.5 23.5L4 51Z"
        fill="white"
        stroke="#797777"
        strokeWidth="2"
      />
      <path
        d="M93.4998 66.0001L83.9998 74.5001L80.9998 66.0001L68.4998 88.0001L46.9998 93.5001L27.9998 88.0001L15.9998 66.0001L11.9998 74.5001L3.99976 66.0001L15.9998 93.5001L46.9998 111.5L80.9998 93.5001L93.4998 66.0001Z"
        fill="white"
        stroke="#797777"
        strokeWidth="2"
      />
      <text
        x={fontPositionX}
        y={fontPositionY}
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Verdana"
        fill="#797777"
      >
        {children}
      </text>
    </svg>
  );
}
