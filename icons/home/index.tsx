import React from "react";
import { IconProp } from "..";
import { HomeIconActive } from "./active";
import { HomeIconNotActive } from "./notactive";

export const HomeIcon: React.FC<IconProp> = ({ isActive, size }) => {
  return isActive ? (
    <HomeIconActive size={size} />
  ) : (
    <HomeIconNotActive size={size} />
  );
};
