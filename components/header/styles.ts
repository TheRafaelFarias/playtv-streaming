import styled from "styled-components/native";
import { View } from "../baseComponents";

export const HeaderContainer = styled(View).attrs({
  direction: "horizontal",
  horizontalSpaceMode: "space-between",
  verticalSpaceMode: "flex-end",
})<{
  statusBarHeight: number;
}>`
  padding-bottom: 15px;
  padding-left: 16px;
  padding-right: 16px;

  /* caveat view to be behind status bar */
  margin-top: -${(props) => props.statusBarHeight}px;
  height: ${(props) => 80 + props.statusBarHeight}px;

  background-color: ${(props) => props.theme.tabsBackground};
`;

export const HeaderUserIcon = styled(View).attrs({
  verticalSpaceMode: "center",
  horizontalSpaceMode: "center",
})`
  width: 50px;
  height: 50px;
  border-radius: 100px;

  elevation: 10;

  background-color: ${(props) => props.theme.accent};
`;
