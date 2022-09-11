import * as styledComponents from "styled-components/native";
import Colors from "./constants/Colors";

declare module "styled-components/native" {
  export interface DefaultTheme {
    accent: string;
    secondary: string;
    white: string;
    bottomTabBackground: string;
  }
}

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof Colors
>;

export { css, ThemeProvider };
export default styled;
