import React from "react";
import { IconProp } from "..";
import { SearchIconActive } from "./active";
import { SearchIconNotActive } from "./notactive";

export const SearchIcon: React.FC<IconProp> = ({ isActive, size }) => {
  return isActive ? (
    <SearchIconActive size={size} />
  ) : (
    <SearchIconNotActive size={size} />
  );
};
