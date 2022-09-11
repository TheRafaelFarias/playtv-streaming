import styled from "styled-components/native";
import { Text, View } from "../baseComponents";

export const BottomTabBarContainer = styled(View).attrs({
  direction: "horizontal",
  horizontalSpaceMode: "space-between",
})`
  height: 80px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: ${(props) => props.theme.tabsBackground};
`;

export const BottomTabBarButton = styled.Pressable<{
  isFocused: boolean;
}>`
  width: 88px;

  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.isFocused ? 1 : 0.64)};
`;

export const BottomTabBarText = styled(Text).attrs({
  weight: "semibold",
})`
  margin-top: 10px;

  color: ${(props) => props.theme.white};
`;
