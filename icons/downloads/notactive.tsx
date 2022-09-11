import React from "react";
import Svg, { Path } from "react-native-svg";
import { SubIconProp } from "..";

export const DownloadsIconNotActive: React.FC<SubIconProp> = ({ size }) => {
  return (
    <Svg
      width={size ?? "24"}
      height={size ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M13.0002 17.0017V8.99832"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0015 14.0004L13.0003 17.0017L9.99902 14.0004"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9282 3.99625C17.9009 3.99625 21.932 8.02736 21.932 13C21.932 17.9726 17.9009 22.0037 12.9282 22.0037"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.85171 21.4525C8.86477 21.0952 7.94792 20.568 7.14258 19.8949"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.14258 6.10512C7.94744 5.43126 8.86442 4.90404 9.85171 4.54747"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.06836 11.4373C4.24913 10.4026 4.61045 9.40772 5.1358 8.49812"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.06836 14.5616C4.24902 15.5967 4.61034 16.592 5.1358 17.5019"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
