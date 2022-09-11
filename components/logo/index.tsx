import React from "react";
import Svg, { Ellipse } from "react-native-svg";
import Colors from "../../constants/Colors";
import { View } from "../baseComponents";
import { PlayTVLogoText } from "./styles";

interface PlayTVLogoProps {
  mode: "accent" | "white";
}

export const PlayTVLogoSVG: React.FC<
  PlayTVLogoProps & {
    size?: number;
  }
> = ({ mode, size }) => {
  return (
    <Svg width={size ?? 48} height={size ?? 48} viewBox="0 0 23 28" fill="none">
      <Ellipse
        cx="13.8"
        cy="9.33333"
        rx="9.2"
        ry="9.33333"
        fill={Colors[mode]}
      />
      <Ellipse
        cx="9.19998"
        cy="23.3334"
        rx="4.6"
        ry="4.66667"
        fill={Colors[mode]}
      />
      <Ellipse
        cx="2.3"
        cy="16.3333"
        rx="2.3"
        ry="2.33333"
        fill={Colors[mode]}
      />
    </Svg>
  );
};

export const PlayTVLogo: React.FC<PlayTVLogoProps> = ({ mode }) => {
  return (
    <View direction="horizontal" verticalSpaceMode="center">
      <PlayTVLogoSVG mode={mode} />
      <PlayTVLogoText>PlayTV</PlayTVLogoText>
    </View>
  );
};
