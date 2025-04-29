import React from "react";
const Logo = ({ color = "#fff", width = "100%", height = "100%" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 38 40"
      fill="none"
    >
      <g clipPath="url(#clip0_9168_1447)">
        <path
          d="M32.3 6.66667L19 0L5.7 6.66667L19 13.3333L32.3 6.66667Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 22.8567L1.9 21.9043L19 30.4757L36.1 21.9043L38 22.8567V30.4757L19 39.9995L0 30.4757V22.8567ZM11.4 32.8567L9.5 31.9043V29.0472L11.4 29.9995V32.8567ZM12.35 30.4757L14.25 31.4281V34.2852L12.35 33.3329V30.4757Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.9 8.57129L0 9.52367V17.1427L19 26.6665L38 17.1427V9.52367L36.1 8.57129L19 17.1427L1.9 8.57129ZM9.5 18.5713L11.4 19.5237V16.6665L9.5 15.7141V18.5713ZM14.25 18.0951L12.35 17.1427V19.9999L14.25 20.9522V18.0951Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9168_1447">
          <rect width="38" height="40" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Logo;
