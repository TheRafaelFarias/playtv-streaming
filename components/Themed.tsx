/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  ColorSchemeName,
  Text as DefaultText,
  View as DefaultView,
} from "react-native";

import Colors from "../constants/Colors";

import styled from "styled-components/native";

export function useThemeColor(
  props: {
    colorScheme: NonNullable<ColorSchemeName>;
    light?: string;
    dark?: string;
  },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const colorFromProps = props[props.colorScheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[props.colorScheme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export const Text = styled.Text<TextProps>`
  font-family: "rubik";
  color: ${(props) =>
    useThemeColor(
      {
        colorScheme: props.theme.colorScheme,
        light: props.lightColor,
        dark: props.darkColor,
      },
      "text"
    )};
`;

export const View = styled.View<ViewProps>`
  background-color: ${(props) =>
    useThemeColor(
      {
        colorScheme: props.theme.colorScheme,
        light: props.lightColor,
        dark: props.darkColor,
      },
      "background"
    )};
`;
