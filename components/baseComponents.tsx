import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Text = styled.Text<{
  weight?: "semibold" | "bold";
  size?: number;
}>`
  font-family: ${(props) =>
    !props.weight ? "rubik" : `rubik-${props.weight}`};
  color: white;
  font-size: ${(props) => props.size ?? 16}px;
`;

enum FLEX_DIRECTION_VALUES {
  horizontal = "row",
  vertical = "column",
}

export const View = styled.View<{
  fillScreen?: boolean;
  direction?: "horizontal" | "vertical";
  horizontalSpaceMode?: "flex-start" | "center" | "space-between" | "flex-end";
  verticalSpaceMode?: "flex-start" | "center" | "flex-end";
}>`
  flex-direction: ${(props) =>
    !props.direction ? "column" : FLEX_DIRECTION_VALUES[props.direction]};
  background-color: ${(props) => props.theme.secondary};

  ${(props) => props.fillScreen && "flex: 1;"}
  ${(props) =>
    props.verticalSpaceMode && `align-items: ${props.verticalSpaceMode}`}
  ${(props) =>
    props.horizontalSpaceMode &&
    `justify-content: ${props.horizontalSpaceMode}`}
`;

export const ScreenContainer: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  return (
    <>
      <StatusBar translucent style="inverted" />
      <View fillScreen>
        <SafeAreaView>{children}</SafeAreaView>
      </View>
    </>
  );
};
