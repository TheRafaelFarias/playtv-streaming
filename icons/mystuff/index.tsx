import React from "react";
import { IconProp } from "..";
import { MyStuffIconActive } from "./active";
import { MyStuffIconNotActive } from "./notactive";

export const MyStuffIcon: React.FC<IconProp> = ({ isActive, size }) => {
  return isActive ? (
    <MyStuffIconActive size={size} />
  ) : (
    <MyStuffIconNotActive size={size} />
  );
};
