import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../baseComponents";
import { PlayTVLogo } from "../logo";
import { HeaderContainer, HeaderUserIcon } from "./styles";

interface HeaderProps {
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparent }) => {
  const { top: statusBarHeight } = useSafeAreaInsets();

  return (
    <HeaderContainer
      statusBarHeight={statusBarHeight}
      style={{ elevation: 10 }}
    >
      <PlayTVLogo mode="white" />
      <HeaderUserIcon>
        <Text>G</Text>
      </HeaderUserIcon>
    </HeaderContainer>
  );
};
