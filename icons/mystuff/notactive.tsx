import React from "react";
import Svg, { Path } from "react-native-svg";
import { SubIconProp } from "..";

export const MyStuffIconNotActive: React.FC<SubIconProp> = ({ size }) => {
  return (
    <Svg
      width={size ?? "24"}
      height={size ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.444 22H5.111C3.945 22 3 21.055 3 19.889V9.333C3 8.167 3.945 7.222 5.111 7.222H11.444C12.61 7.222 13.555 8.167 13.555 9.333V19.889C13.556 21.055 12.61 22 11.444 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75195 7.22201L10.731 3.56501C11.033 2.43901 12.191 1.77001 13.317 2.07201L19.434 3.71101C20.56 4.01301 21.229 5.17001 20.927 6.29701L18.195 16.493C17.893 17.619 16.736 18.288 15.61 17.986L13.555 17.436"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 6.5L15.996 9.04337C16.267 9.30156 16.1616 9.75617 15.8047 9.86882L15 10.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.24298 12.5694L9.79091 14.0763C10.1132 14.2667 10.1132 14.7333 9.79091 14.9237L7.24298 16.4306C6.91481 16.6249 6.5 16.388 6.5 16.0066V12.9934C6.5 12.612 6.91481 12.3751 7.24298 12.5694V12.5694Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
