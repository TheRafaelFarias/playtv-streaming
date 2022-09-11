import React from "react";
import { IconProp } from "..";
import { DownloadsIconNotActive } from "./notactive";

export const DownloadsIcon: React.FC<Exclude<IconProp, "size">> = ({
  size,
}) => {
  return <DownloadsIconNotActive size={size} />;
};
